import React, { useState, useEffect, useMemo } from 'react';
import { Question, OptionItem } from './types.ts';
import { shuffleArray } from './storage.ts';
import { SentenceTranslator } from './SentenceTranslator.tsx';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Volume2, Sparkles, BookOpen } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, chosenOptionId: string) => void;
  onNext?: () => void;
  onRetrySimilar?: () => void;
  allowTranslations?: boolean;
  isExamMode?: boolean;
  selectedOptionId?: string | null;
  showFeedbackImmediately?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onNext,
  onRetrySimilar,
  allowTranslations = true,
  isExamMode = false,
  selectedOptionId: externalSelectedId = null,
  showFeedbackImmediately = true,
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(externalSelectedId);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [optionTranslations, setOptionTranslations] = useState<Record<string, boolean>>({});

  // Reset local state when question changes
  useEffect(() => {
    setInternalSelectedId(externalSelectedId);
    setShowExplanation(false);
    setOptionTranslations({});
  }, [question.id, externalSelectedId]);

  // Shuffle options with Fisher-Yates once per question.id
  const shuffledOptions: OptionItem[] = useMemo(() => {
    return shuffleArray(question.options);
  }, [question.id]);

  const selectedId = externalSelectedId !== undefined && externalSelectedId !== null
    ? externalSelectedId
    : internalSelectedId;

  const isAnswered = selectedId !== null;
  const isCorrect = isAnswered && selectedId === question.correctOptionId;

  const handleSelectOption = (optId: string) => {
    if (isAnswered && !isExamMode) return; // Prevent changing in normal practice
    setInternalSelectedId(optId);
    const correct = optId === question.correctOptionId;
    if (showFeedbackImmediately) {
      setShowExplanation(true);
    }
    onAnswer(correct, optId);
  };

  const toggleOptionTranslation = (e: React.MouseEvent, optId: string) => {
    e.stopPropagation();
    setOptionTranslations(prev => ({
      ...prev,
      [optId]: !prev[optId]
    }));
  };

  const letters = ['A', 'B', 'C', 'D'];

  const getEncouragementMessage = () => {
    if (isCorrect) {
      const msgs = [
        '¡Excelente! Has comprendido la regla a la perfección.',
        '¡Muy bien! Ya lo entiendes mejor.',
        '¡Brillante! Has identificado el detalle clave.',
        '¡Sigue así! Estás cada vez más cerca del 10.',
      ];
      return msgs[question.id.length % msgs.length];
    } else {
      return '¡Casi! Vamos a repasarlo para que no vuelva a ocurrir en el examen.';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-7 max-w-3xl mx-auto transition-all">
      {/* Question Header & Difficulty Tag */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Pregunta de Examen
        </span>
        <div className="flex items-center gap-2">
          {question.difficulty === 'facil' && (
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              🟢 Fácil
            </span>
          )}
          {question.difficulty === 'medio' && (
            <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              🟡 Medio
            </span>
          )}
          {question.difficulty === 'dificil' && (
            <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
              🔴 Difícil
            </span>
          )}
        </div>
      </div>

      {/* Question Prompt */}
      <div className="text-lg sm:text-xl font-medium text-slate-900 mb-6 leading-relaxed">
        {allowTranslations ? (
          <SentenceTranslator
            sentenceEs={question.questionEs}
            sentenceHy={question.questionHy}
          />
        ) : (
          <span>{question.questionEs}</span>
        )}
      </div>

      {/* 4 Options (A, B, C, D) */}
      <div className="space-y-3 mb-6">
        {shuffledOptions.map((opt, idx) => {
          const letter = letters[idx] || `${idx + 1}`;
          const isSelected = selectedId === opt.id;
          const isThisCorrect = opt.id === question.correctOptionId;

          let btnClass = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800';

          if (isExamMode) {
            if (isSelected) {
              btnClass = 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-500/20';
            }
          } else if (isAnswered && showExplanation) {
            if (isThisCorrect) {
              btnClass = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-medium ring-2 ring-emerald-500/30';
            } else if (isSelected && !isThisCorrect) {
              btnClass = 'border-rose-400 bg-rose-50/80 text-rose-950 line-through ring-2 ring-rose-400/20';
            } else {
              btnClass = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-70';
            }
          }

          return (
            <div
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-lg border transition-all duration-150 flex items-start justify-between gap-3 cursor-pointer ${btnClass}`}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-slate-100 text-slate-700 text-xs font-bold shrink-0 mt-0.5">
                  {letter}
                </span>
                <div className="flex-1">
                  <div className="text-sm sm:text-base leading-snug">{opt.textEs}</div>
                  {allowTranslations && optionTranslations[opt.id] && (
                    <div className="mt-1.5 text-xs sm:text-sm font-armenian text-amber-900 bg-amber-100/90 p-1.5 rounded border border-amber-200 animate-fadeIn">
                      <span className="font-semibold mr-1">🇦🇲</span> {opt.textHy}
                    </div>
                  )}
                </div>
              </div>

              {/* Dedicated Armenian Translation Button so clicking it does NOT select the option */}
              {allowTranslations && (
                <button
                  type="button"
                  onClick={(e) => toggleOptionTranslation(e, opt.id)}
                  title="Traducir opción al armenio / Թարգմանել տարբերակը հայերեն"
                  className="px-2 py-1 text-xs font-medium rounded text-slate-600 hover:text-amber-800 bg-slate-100 hover:bg-amber-100 transition-colors shrink-0 flex items-center gap-1"
                >
                  <span className="text-[11px]">🇦🇲</span>
                  <span className="hidden sm:inline text-[11px]">Trad</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Immediate Deep Explanation Card on Answer */}
      {!isExamMode && isAnswered && showExplanation && (
        <div className={`mt-6 rounded-xl p-5 sm:p-6 border transition-all animate-fadeIn ${
          isCorrect ? 'bg-emerald-50/80 border-emerald-200' : 'bg-slate-50 border-rose-200'
        }`}>
          {/* Status Message */}
          <div className="flex items-center gap-2 mb-3">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 text-base">¡Correcto!</h4>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <h4 className="font-semibold text-rose-900 text-base">¡Vamos a entenderlo!</h4>
              </>
            )}
            <span className="text-xs text-slate-500 ml-auto hidden sm:inline">
              {getEncouragementMessage()}
            </span>
          </div>

          {/* Correct Answer Revelation if Incorrect */}
          {!isCorrect && (
            <div className="mb-4 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-1">
                Respuesta correcta:
              </span>
              <p className="text-slate-900 font-semibold text-sm sm:text-base">
                {shuffledOptions.find(o => o.id === question.correctOptionId)?.textEs}
              </p>
            </div>
          )}

          {/* Bilingual Explanations */}
          <div className="space-y-3 mb-4 text-sm sm:text-base leading-relaxed">
            <div>
              <span className="font-medium text-slate-900 block mb-0.5">Explicación:</span>
              <p className="text-slate-700">{question.explanationEs}</p>
            </div>
            {allowTranslations && (
              <div className="bg-amber-50/90 p-3 rounded-lg border border-amber-200/80 text-amber-950 font-armenian text-sm">
                <span className="font-bold block text-xs text-amber-800 uppercase tracking-wide mb-0.5">
                  🇦🇲 Բացատրություն (Հայերեն):
                </span>
                <p>{question.explanationHy}</p>
              </div>
            )}
          </div>

          {/* Short Rule: RECUERDA */}
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 mb-4 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>RECUERDA / ՀԻՇԻ՛Ր:</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              {question.rememberRuleEs}
            </p>
            {allowTranslations && (
              <p className="text-xs sm:text-sm font-armenian text-slate-600 mt-1">
                {question.rememberRuleHy}
              </p>
            )}
          </div>

          {/* Additional Follow-up Example */}
          <div className="bg-white/80 p-3 rounded-lg border border-slate-200 mb-5 text-xs sm:text-sm">
            <span className="font-semibold text-slate-600 block mb-1">Otro ejemplo para fijar la idea:</span>
            <p className="text-slate-800 italic">"{question.followUpExample.es}"</p>
            {allowTranslations && (
              <p className="text-slate-600 font-armenian mt-0.5">«{question.followUpExample.hy}»</p>
            )}
          </div>

          {/* Action buttons: Next / Retry */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            {!isCorrect && onRetrySimilar && (
              <button
                type="button"
                onClick={onRetrySimilar}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-rose-700 bg-white border border-rose-300 rounded-lg hover:bg-rose-50 transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <RotateCcw className="w-4 h-4" />
                Practicar otra vez
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="px-5 py-2 text-xs sm:text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
