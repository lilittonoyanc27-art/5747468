import React, { useState, useEffect } from 'react';
import { THEORY_TOPICS } from './theoryData.ts';
import { CONFUSION_PAIRS } from './confusionPairs.ts';
import { QUESTION_BANK } from './questionBank.ts';
import { READING_TEXTS } from './readingTexts.ts';
import { Question } from './types.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { shuffleArray } from './storage.ts';
import { Zap, Clock, CheckCircle2, ArrowRight, ShieldCheck, Flame, BookOpen, AlertTriangle } from 'lucide-react';

interface ExamTomorrowViewProps {
  onBackToHome: () => void;
}

export const ExamTomorrowView: React.FC<ExamTomorrowViewProps> = ({ onBackToHome }) => {
  const [durationMinutes, setDurationMinutes] = useState<30 | 45 | 60>(45);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(45 * 60);

  // Filter questions for the steps
  const easyQuestions: Question[] = React.useMemo(() => {
    return shuffleArray(QUESTION_BANK.filter(q => q.difficulty === 'facil')).slice(0, 15);
  }, []);

  const mediumQuestions: Question[] = React.useMemo(() => {
    return shuffleArray(QUESTION_BANK.filter(q => q.difficulty === 'medio')).slice(0, 15);
  }, []);

  const hardQuestions: Question[] = React.useMemo(() => {
    return shuffleArray(QUESTION_BANK.filter(q => q.difficulty === 'dificil')).slice(0, 15);
  }, []);

  const [questionIdx, setQuestionIdx] = useState<number>(0);

  useEffect(() => {
    if (!isStarted) return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isStarted]);

  const handleStart = (mins: 30 | 45 | 60) => {
    setDurationMinutes(mins);
    setSecondsRemaining(mins * 60);
    setIsStarted(true);
    setCurrentStep(1);
    setQuestionIdx(0);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const stepsList = [
    { num: 1, title: 'Definiciones Clave Express', desc: 'Repaso relámpago de los 7 temas' },
    { num: 2, title: 'Trampas y Confusiones', desc: 'Las 4 diferencias que siempre caen' },
    { num: 3, title: 'Batería Fácil (Nivel 🟢)', desc: 'Preguntas para afianzar conceptos' },
    { num: 4, title: 'Batería Media (Nivel 🟡)', desc: 'Preguntas tipo control de clase' },
    { num: 5, title: 'Batería Difícil (Nivel 🔴)', desc: 'Para aspirar al sobresaliente' },
    { num: 6, title: 'Análisis de Texto Rápido', desc: 'Lectura y detección de recursos' },
    { num: 7, title: 'Mini-Examen de Cierre', desc: 'Comprobación final de confianza' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-900 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Plan de Emergencia Intensivo</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          ¡Tengo Examen Mañana!
        </h1>
        <p className="text-rose-100 text-sm sm:text-base max-w-2xl">
          El itinerario concentrado para repasar todo el temario de 1.º de ESO en 30, 45 o 60 minutos.
          Directo al grano, sin rodeos y centrado en las preguntas reales que saldrán en tu hoja de examen.
        </p>
      </div>

      {!isStarted ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">
            ¿Cuánto tiempo tienes para estudiar hoy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleStart(30)}
              className="p-5 rounded-xl border-2 border-slate-200 hover:border-rose-500 hover:bg-rose-50/40 text-left transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-slate-900">30 Minutos</span>
                <Clock className="w-5 h-5 text-rose-600" />
              </div>
              <p className="text-xs text-slate-600">
                Sprint de rescate: definiciones esenciales y preguntas clave.
              </p>
            </button>

            <button
              onClick={() => handleStart(45)}
              className="p-5 rounded-xl border-2 border-rose-500 bg-rose-50/50 text-left transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-rose-900">45 Minutos</span>
                <span className="text-[10px] bg-rose-600 text-white font-bold px-2 py-0.5 rounded">
                  Recomendado
                </span>
              </div>
              <p className="text-xs text-slate-700">
                Ruta óptima: repaso conceptual, trampas y preguntas graduadas.
              </p>
            </button>

            <button
              onClick={() => handleStart(60)}
              className="p-5 rounded-xl border-2 border-slate-200 hover:border-rose-500 hover:bg-rose-50/40 text-left transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-slate-900">60 Minutos</span>
                <ShieldCheck className="w-5 h-5 text-rose-600" />
              </div>
              <p className="text-xs text-slate-600">
                Preparación completa a fondo con análisis de texto y mini-examen.
              </p>
            </button>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
            <strong className="block text-slate-900">Itinerario guiado en 7 pasos:</strong>
            <p>1. Definiciones express · 2. Trampas habituales · 3. Fácil · 4. Medio · 5. Difícil · 6. Texto · 7. Mini-examen final.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Progress Strip & Timer */}
          <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Paso {currentStep} de 7:
              </span>
              <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-none">
                {stepsList[currentStep - 1]?.title}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm font-bold bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-amber-400">
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>
          </div>

          {/* STEP 1: DEFINICIONES EXPRESS */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">
                Paso 1: Las 7 Definiciones que no puedes olvidar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Léelas con atención. Si tienes dudas, fíjate en el truco para recordarlo en el examen:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {THEORY_TOPICS.map((t) => (
                  <div key={t.id} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs space-y-1">
                    <span className="font-bold text-blue-900 block">{t.title}</span>
                    <p className="text-slate-700">{t.summaryEs}</p>
                    <p className="text-slate-500 font-armenian text-[11px]">🇦🇲 {t.summaryHy}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs"
                >
                  <span>Siguiente: Las 4 Trampas Habituales</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: TRAMPAS HABITUALES */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">
                Paso 2: Las 4 Trampas que el profesor pondrá en el examen
              </h3>

              <div className="space-y-3">
                {CONFUSION_PAIRS.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1.5 text-xs sm:text-sm">
                    <span className="font-bold text-amber-900 block text-sm">⚡ {p.title}</span>
                    <p className="font-semibold text-slate-800">{p.keyDifferenceEs}</p>
                    <p className="font-armenian text-amber-950 text-xs">🇦🇲 {p.keyDifferenceHy}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm rounded-lg"
                >
                  Volver a Paso 1
                </button>
                <button
                  onClick={() => { setCurrentStep(3); setQuestionIdx(0); }}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs"
                >
                  <span>Siguiente: 10 Preguntas Nivel Fácil 🟢</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: EASY QUESTIONS */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-emerald-800">
                  Paso 3: Batería Rápida — Fácil (Pregunta {questionIdx + 1} de {Math.min(10, easyQuestions.length)})
                </h3>
              </div>

              {easyQuestions[questionIdx] && (
                <QuestionCard
                  key={easyQuestions[questionIdx].id}
                  question={easyQuestions[questionIdx]}
                  onAnswer={() => {}}
                  onNext={() => {
                    if (questionIdx < Math.min(9, easyQuestions.length - 1)) {
                      setQuestionIdx(prev => prev + 1);
                    } else {
                      setCurrentStep(4);
                      setQuestionIdx(0);
                    }
                  }}
                  allowTranslations={true}
                />
              )}
            </div>
          )}

          {/* STEP 4: MEDIUM QUESTIONS */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-amber-800">
                  Paso 4: Batería Media — Tipo Examen (Pregunta {questionIdx + 1} de {Math.min(10, mediumQuestions.length)})
                </h3>
              </div>

              {mediumQuestions[questionIdx] && (
                <QuestionCard
                  key={mediumQuestions[questionIdx].id}
                  question={mediumQuestions[questionIdx]}
                  onAnswer={() => {}}
                  onNext={() => {
                    if (questionIdx < Math.min(9, mediumQuestions.length - 1)) {
                      setQuestionIdx(prev => prev + 1);
                    } else {
                      setCurrentStep(5);
                      setQuestionIdx(0);
                    }
                  }}
                  allowTranslations={true}
                />
              )}
            </div>
          )}

          {/* STEP 5: HARD QUESTIONS */}
          {currentStep === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-rose-800">
                  Paso 5: Batería Difícil — Para sacar un 10 (Pregunta {questionIdx + 1} de {Math.min(10, hardQuestions.length)})
                </h3>
              </div>

              {hardQuestions[questionIdx] && (
                <QuestionCard
                  key={hardQuestions[questionIdx].id}
                  question={hardQuestions[questionIdx]}
                  onAnswer={() => {}}
                  onNext={() => {
                    if (questionIdx < Math.min(9, hardQuestions.length - 1)) {
                      setQuestionIdx(prev => prev + 1);
                    } else {
                      setCurrentStep(6);
                    }
                  }}
                  allowTranslations={true}
                />
              )}
            </div>
          )}

          {/* STEP 6: TEXT ANALYSIS */}
          {currentStep === 6 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">
                Paso 6: Prueba de Texto Rápido
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                En el examen siempre habrá un texto literario para analizar. Fíjate en el Romance del Prisionero:
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                <span className="font-bold text-blue-900 block">Romance del Prisionero</span>
                <p className="italic text-slate-800">
                  "Que por mayo era, por mayo, cuando hace la calor..."
                </p>
                <div className="pt-2 text-slate-700 space-y-1">
                  <div><strong>Métrica:</strong> Versos de 8 sílabas (octosílabos).</div>
                  <div><strong>Rima:</strong> Asonante en versos pares (calor, ruiseñor, albor); impares sueltos.</div>
                  <div><strong>Género:</strong> Romance lírico de la literatura popular tradicional.</div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(7)}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs"
                >
                  <span>Paso 7: Conclusión y Mensaje de Ánimo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: CONCLUSION & CONGRATS */}
          {currentStep === 7 && (
            <div className="bg-white rounded-2xl border border-emerald-300 p-8 text-center space-y-4 shadow-sm animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                ¡Has completado el Plan de Choque!
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
                Has repasado todas las definiciones, trampas y preguntas tipo de 1.º de ESO.
                Ve al examen con calma, lee bien cada una de las 4 opciones antes de marcar y confía en lo que has entrenado hoy.
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onBackToHome}
                  className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs"
                >
                  Volver al Menú Principal
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
