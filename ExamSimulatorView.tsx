import React, { useState, useEffect, useMemo } from 'react';
import { Question, ExamResult } from './types.ts';
import { QUESTION_BANK } from './questionBank.ts';
import { READING_TEXTS } from './readingTexts.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { recordExamResult, shuffleArray } from './storage.ts';
import { ClipboardCheck, Clock, CheckCircle2, XCircle, ArrowLeft, RotateCcw, AlertCircle, Award, Eye, EyeOff } from 'lucide-react';

interface ExamSimulatorViewProps {
  onBackToHome: () => void;
}

export const ExamSimulatorView: React.FC<ExamSimulatorViewProps> = ({ onBackToHome }) => {
  const [examMode, setExamMode] = useState<'corto' | 'normal' | 'completo'>('corto');
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // questionId -> chosenOptionId
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(20 * 60);
  const [startTime, setStartTime] = useState<number>(0);
  const [allowTranslationsInExam, setAllowTranslationsInExam] = useState<boolean>(true);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Pool of all questions (bank + reading questions)
  const allQuestionsPool: Question[] = useMemo(() => {
    const readingQs = READING_TEXTS.flatMap(t => t.questions);
    return [...QUESTION_BANK, ...readingQs];
  }, []);

  const [examQuestions, setExamQuestions] = useState<Question[]>([]);

  const startExam = (mode: 'corto' | 'normal' | 'completo') => {
    setExamMode(mode);
    const count = mode === 'corto' ? 20 : mode === 'normal' ? 40 : 60;
    const durationMinutes = mode === 'corto' ? 25 : mode === 'normal' ? 45 : 60;

    const shuffled = shuffleArray(allQuestionsPool);
    const selected = shuffled.slice(0, count);

    setExamQuestions(selected);
    setAnswers({});
    setActiveQuestionIdx(0);
    setTimeLeftSeconds(durationMinutes * 60);
    setStartTime(Date.now());
    setIsExamActive(true);
    setIsExamFinished(false);
    setExamResult(null);
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamActive || isExamFinished) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isExamFinished]);

  const handleSelectOption = (chosenOptionId: string) => {
    if (!isExamActive || !examQuestions[activeQuestionIdx]) return;
    const q = examQuestions[activeQuestionIdx];
    setAnswers(prev => ({
      ...prev,
      [q.id]: chosenOptionId,
    }));
  };

  const finishExam = () => {
    setIsExamActive(false);
    setIsExamFinished(true);

    const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
    let correct = 0;
    const topicBreakdown: Record<string, { correct: number; total: number }> = {};
    const missed: { question: Question; chosenOptionId: string }[] = [];

    examQuestions.forEach(q => {
      const chosen = answers[q.id];
      const isCorrect = chosen === q.correctOptionId;

      if (!topicBreakdown[q.topicId]) {
        topicBreakdown[q.topicId] = { correct: 0, total: 0 };
      }
      topicBreakdown[q.topicId].total += 1;

      if (isCorrect) {
        correct += 1;
        topicBreakdown[q.topicId].correct += 1;
      } else {
        missed.push({
          question: q,
          chosenOptionId: chosen || 'sin_responder'
        });
      }
    });

    const score10 = Math.round((correct / (examQuestions.length || 1)) * 100) / 10;

    const result: ExamResult = {
      id: `exam_${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES'),
      mode: examMode,
      totalQuestions: examQuestions.length,
      correctCount: correct,
      score10,
      timeSeconds: timeSpentSeconds,
      topicBreakdown,
      missedQuestions: missed,
    };

    setExamResult(result);
    recordExamResult(result);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[activeQuestionIdx];

  const getGradeText = (score: number) => {
    if (score >= 9) return { text: 'Sobresaliente (Excelente)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score >= 7) return { text: 'Notable (Muy Bien)', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (score >= 5) return { text: 'Aprobado (Bien)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { text: 'Insuficiente (Necesita Repaso)', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* 1. SELECTION SCREEN BEFORE EXAM */}
      {!isExamActive && !isExamFinished && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
              <ClipboardCheck className="w-4 h-4" />
              <span>Simulador Oficial de Examen</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Simulacro de Examen — 1.º de ESO
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Prueba de evaluación idéntica a los exámenes de los institutos de España:
              tiempo medido, sin pistas inmediatas y con calificación final de 0 a 10.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Rápido
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">Examen Corto</h3>
                <p className="text-xs text-slate-500 mt-1">20 preguntas · 25 minutos</p>
                <p className="text-xs text-slate-600 mt-3">
                  Ideal para una revisión rápida diaria de conceptos fundamentales.
                </p>
              </div>
              <button
                onClick={() => startExam('corto')}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                Comenzar Corto (20q)
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-blue-500 shadow-md flex flex-col justify-between space-y-4 relative">
              <span className="absolute -top-3 right-4 text-[10px] uppercase font-bold tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full">
                Recomendado
              </span>
              <div>
                <span className="text-xs font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Estándar
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">Examen Normal</h3>
                <p className="text-xs text-slate-500 mt-1">40 preguntas · 45 minutos</p>
                <p className="text-xs text-slate-600 mt-3">
                  Estructura equivalente a una evaluación trimestral de Lengua y Literatura.
                </p>
              </div>
              <button
                onClick={() => startExam('normal')}
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                Comenzar Normal (40q)
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  Completo
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">Examen Completo</h3>
                <p className="text-xs text-slate-500 mt-1">60 preguntas · 60 minutos</p>
                <p className="text-xs text-slate-600 mt-3">
                  Prueba exhaustiva de todas las figuras, literatura popular, culta y textos.
                </p>
              </div>
              <button
                onClick={() => startExam('completo')}
                className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                Comenzar Completo (60q)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM MODE */}
      {isExamActive && currentQ && (
        <div className="space-y-6">
          {/* Exam Header: Timer, Navigator, Finish button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-amber-300 font-mono text-sm font-bold border border-slate-700">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>
              <div className="text-xs text-slate-300">
                Pregunta <strong className="text-white">{activeQuestionIdx + 1}</strong> de {examQuestions.length}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Optional translation toggle */}
              <button
                onClick={() => setAllowTranslationsInExam(!allowTranslationsInExam)}
                className="px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {allowTranslationsInExam ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>{allowTranslationsInExam ? 'Traducción ON' : 'Traducción OFF'}</span>
              </button>

              <button
                onClick={finishExam}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                Finalizar y Entregar
              </button>
            </div>
          </div>

          {/* Question Jump Palette */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
            {examQuestions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = idx === activeQuestionIdx;
              return (
                <button
                  key={q.id}
                  onClick={() => setActiveQuestionIdx(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400/40'
                      : isAnswered
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active Question Render (Exam style: no immediate explanation) */}
          <QuestionCard
            key={currentQ.id}
            question={currentQ}
            onAnswer={(_, optId) => handleSelectOption(optId)}
            allowTranslations={allowTranslationsInExam}
            isExamMode={true}
            selectedOptionId={answers[currentQ.id] || null}
            showFeedbackImmediately={false}
          />

          {/* Bottom Navigator */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={activeQuestionIdx === 0}
              className="px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50 disabled:opacity-40"
            >
              ← Pregunta Anterior
            </button>
            <button
              onClick={() => {
                if (activeQuestionIdx < examQuestions.length - 1) {
                  setActiveQuestionIdx(prev => prev + 1);
                } else {
                  finishExam();
                }
              }}
              className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              {activeQuestionIdx === examQuestions.length - 1 ? 'Terminar Examen' : 'Siguiente Pregunta →'}
            </button>
          </div>
        </div>
      )}

      {/* 3. EXAM RESULTS & FULL REVIEW */}
      {isExamFinished && examResult && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Scorecard */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs text-center space-y-4">
            <Award className="w-12 h-12 text-blue-600 mx-auto" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Resultados del Simulacro de Examen
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {examResult.score10} <span className="text-2xl text-slate-400">/ 10</span>
            </div>

            <div className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border">
              <span className={getGradeText(examResult.score10).color}>
                {getGradeText(examResult.score10).text}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 max-w-lg mx-auto text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900">
                <span className="block font-bold text-base text-emerald-700">{examResult.correctCount}</span>
                Aciertos
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-900">
                <span className="block font-bold text-base text-rose-700">{examResult.missedQuestions.length}</span>
                Errores
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900">
                <span className="block font-bold text-base text-blue-700">
                  {Math.round((examResult.correctCount / examResult.totalQuestions) * 100)}%
                </span>
                Eficacia
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 text-slate-800">
                <span className="block font-bold text-base text-slate-700">
                  {formatTimer(examResult.timeSeconds)}
                </span>
                Tiempo
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => startExam(examMode)}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Repetir con Nuevas Preguntas</span>
              </button>
              <button
                onClick={onBackToHome}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Volver al Menú Principal
              </button>
            </div>
          </div>

          {/* Full Missed Questions Review with Bilingual Explanations */}
          {examResult.missedQuestions.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>Revisión de Errores ({examResult.missedQuestions.length})</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Aprende de cada error antes de tu examen de verdad. Aquí tienes la explicación completa en español y armenio:
              </p>

              <div className="space-y-4">
                {examResult.missedQuestions.map((m, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-rose-200 shadow-2xs space-y-3">
                    <span className="text-xs font-bold text-rose-700 uppercase">
                      Error #{idx + 1}
                    </span>
                    <h4 className="font-semibold text-slate-900 text-base">
                      {m.question.questionEs}
                    </h4>
                    <p className="text-xs sm:text-sm font-armenian text-slate-600">
                      {m.question.questionHy}
                    </p>

                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs sm:text-sm">
                      <strong className="text-emerald-900 block mb-0.5">Respuesta correcta:</strong>
                      <p className="text-emerald-950 font-medium">
                        {m.question.options.find(o => o.id === m.question.correctOptionId)?.textEs}
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                      <p><strong>Explicación:</strong> {m.question.explanationEs}</p>
                      <p className="font-armenian text-slate-800">
                        🇦🇲 <strong>Հայերեն՝</strong> {m.question.explanationHy}
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-blue-900 bg-blue-50/70 p-2.5 rounded-lg border border-blue-200">
                      RECUERDA: {m.question.rememberRuleEs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
