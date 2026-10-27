import React, { useState, useMemo } from 'react';
import { Question } from './types.ts';
import { QUESTION_BANK } from './questionBank.ts';
import { READING_TEXTS } from './readingTexts.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { loadProgress, recordAnswer } from './storage.ts';
import { RotateCcw, CheckCircle2, Sparkles, BookOpen, ArrowLeft, Trophy } from 'lucide-react';

interface SmartReviewViewProps {
  onBackToHome: () => void;
  onGoToPractice: () => void;
}

export const SmartReviewView: React.FC<SmartReviewViewProps> = ({ onBackToHome, onGoToPractice }) => {
  const [currentReviewIdx, setCurrentReviewIdx] = useState<number>(0);

  const progress = loadProgress();

  // Combine all possible questions: from Question Bank + Reading questions
  const allKnownQuestions: Question[] = useMemo(() => {
    const readingQs = READING_TEXTS.flatMap(t => t.questions);
    return [...QUESTION_BANK, ...readingQs];
  }, []);

  // Filter missed questions
  const missedQuestions: Question[] = useMemo(() => {
    return allKnownQuestions.filter(q => progress.missedQuestionIds.includes(q.id));
  }, [allKnownQuestions, progress.missedQuestionIds]);

  const currentQ: Question | undefined = missedQuestions[currentReviewIdx];

  const handleReviewAnswer = (isCorrect: boolean) => {
    if (!currentQ) return;
    // Passing true as isReview removes it from missed list if correct!
    recordAnswer(isCorrect, currentQ.id, currentQ.topicId, true);
  };

  const handleNext = () => {
    if (currentReviewIdx < missedQuestions.length - 1) {
      setCurrentReviewIdx(prev => prev + 1);
    } else {
      setCurrentReviewIdx(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-300 uppercase mb-2">
          <RotateCcw className="w-4 h-4" />
          <span>Repaso Inteligente por Intervalos</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Entrenamiento de Errores Pendientes
        </h1>
        <p className="text-rose-100 text-sm sm:text-base max-w-2xl">
          El secreto para sacar un 10 en el examen de Lengua es no repetir los mismos fallos.
          Aquí se guardan las preguntas que te resultaron dudosas para que las domines al 100%.
        </p>
      </div>

      {missedQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            ¡Bandeja de Errores Limpia!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
            No tienes ninguna pregunta fallada pendiente de repasar en este momento. ¡Excelente trabajo de estudio!
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onGoToPractice}
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              Hacer una nueva práctica
            </button>
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
            >
              Volver al Menú Principal
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase">
                Errores por dominar: {missedQuestions.length}
              </span>
              <p className="text-xs text-slate-500">
                Pregunta {currentReviewIdx + 1} de {missedQuestions.length}
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
              +15 XP por acertar en repaso
            </span>
          </div>

          {currentQ && (
            <QuestionCard
              key={currentQ.id}
              question={currentQ}
              onAnswer={handleReviewAnswer}
              onNext={handleNext}
              allowTranslations={true}
            />
          )}
        </div>
      )}
    </div>
  );
};
