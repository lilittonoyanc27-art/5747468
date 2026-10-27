import React, { useState } from 'react';
import { READING_TEXTS } from './readingTexts.ts';
import { ReadingText, Question } from './types.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { SentenceTranslator } from './SentenceTranslator.tsx';
import { loadProgress, saveProgress, recordAnswer } from './storage.ts';
import { BookOpen, HelpCircle, CheckCircle2, ChevronRight, ArrowLeft, Volume2, Sparkles, Award } from 'lucide-react';

interface ReadingViewProps {
  onBackToHome: () => void;
}

export const ReadingView: React.FC<ReadingViewProps> = ({ onBackToHome }) => {
  const [selectedTextId, setSelectedTextId] = useState<string>(READING_TEXTS[0].id);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [showQuestions, setShowQuestions] = useState<boolean>(false);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const currentText: ReadingText = READING_TEXTS.find(t => t.id === selectedTextId) || READING_TEXTS[0];
  const currentQuestion: Question | undefined = currentText.questions[activeQuestionIdx];

  const handleSelectText = (id: string) => {
    setSelectedTextId(id);
    setActiveQuestionIdx(0);
    setShowQuestions(false);
    setAnsweredCount(0);
    setCorrectCount(0);
  };

  const handleAnswerQuestion = (isCorrect: boolean) => {
    if (!currentQuestion) return;
    recordAnswer(isCorrect, currentQuestion.id, currentQuestion.topicId, false);
    setAnsweredCount(prev => prev + 1);
    if (isCorrect) setCorrectCount(prev => prev + 1);

    // If finished all questions of this text, save completion
    if (activeQuestionIdx === currentText.questions.length - 1) {
      const progress = loadProgress();
      if (!progress.completedReadingIds.includes(currentText.id)) {
        progress.completedReadingIds.push(currentText.id);
        saveProgress(progress);
      }
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestionIdx < currentText.questions.length - 1) {
      setActiveQuestionIdx(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Lectura y Análisis de Textos</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Comprensión y Análisis Literario — 1.º ESO
        </h1>
        <p className="text-emerald-100 text-sm sm:text-base max-w-2xl">
          Lee el texto con calma. Toca cualquier oración para ver su traducción al armenio.
          Luego responde a las 10 preguntas tipo examen para evaluar tu comprensión lectora, figuras y gramática.
        </p>
      </div>

      {/* Text Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {READING_TEXTS.map((t) => {
          const isActive = t.id === selectedTextId;
          return (
            <button
              key={t.id}
              onClick={() => handleSelectText(t.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                isActive
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>📖 {t.titleEs}</span>
              <span className="text-[11px] opacity-80 uppercase tracking-wide">({t.genre})</span>
            </button>
          );
        })}
      </div>

      {/* Main Text Presentation & Interactive Reader */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Género: {currentText.genre}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500 font-medium">
                {currentText.wordCount} palabras
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {currentText.titleEs}
            </h2>
            <p className="text-xs sm:text-sm font-armenian text-slate-500 mt-0.5">
              {currentText.titleHy}
            </p>
          </div>

          <button
            onClick={() => setShowQuestions(!showQuestions)}
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 self-start sm:self-center shadow-xs shrink-0"
          >
            <span>{showQuestions ? 'Ocultar Preguntas' : 'Ir a las 10 Preguntas de Examen'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${showQuestions ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Tip for the student */}
        <div className="mb-6 p-3 bg-amber-50 rounded-lg border border-amber-200/70 text-xs sm:text-sm text-amber-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Consejo para el alumno:</strong> Haz clic en cualquier frase en español para desplegar su traducción al armenio.
          </span>
        </div>

        {/* The Text Body (sentence by sentence interactive translations) */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg leading-loose text-slate-800 space-y-3 font-normal">
          {currentText.sentences.map((sent, idx) => (
            <SentenceTranslator
              key={idx}
              sentenceEs={sent.es}
              sentenceHy={sent.hy}
              asParagraph={true}
            />
          ))}
        </div>
      </div>

      {/* The 10 Examination Questions Section */}
      {showQuestions && (
        <div className="space-y-6 pt-4 border-t border-slate-200 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100 p-4 rounded-xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-700" />
                <span>Análisis del Texto — Preguntas 1 a 10</span>
              </h3>
              <p className="text-xs text-slate-500">
                Pregunta {activeQuestionIdx + 1} de {currentText.questions.length} · Aciertos: {correctCount}/{answeredCount}
              </p>
            </div>

            {/* Quick Question Jump Circles */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {currentText.questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuestionIdx(i)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    i === activeQuestionIdx
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-500/40'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {currentQuestion && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswerQuestion}
              onNext={handleNextQuestion}
              allowTranslations={true}
            />
          )}

          {answeredCount === currentText.questions.length && (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
              <Award className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-emerald-900">
                ¡Texto completado con éxito!
              </h4>
              <p className="text-sm text-emerald-800">
                Has obtenido <strong className="text-emerald-950 font-extrabold">{correctCount} de 10</strong> aciertos.
                Tus resultados han quedado guardados en tu progreso personal.
              </p>
              <button
                onClick={() => {
                  const nextTextIdx = (READING_TEXTS.findIndex(t => t.id === currentText.id) + 1) % READING_TEXTS.length;
                  handleSelectText(READING_TEXTS[nextTextIdx].id);
                }}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                Pasar al siguiente texto
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
