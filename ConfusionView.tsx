import React, { useState } from 'react';
import { CONFUSION_PAIRS } from './confusionPairs.ts';
import { ConfusionItem, Question } from './types.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { recordAnswer } from './storage.ts';
import { Zap, ArrowRight, CheckCircle2, AlertCircle, Sparkles, BookOpen } from 'lucide-react';

interface ConfusionViewProps {
  onBackToHome: () => void;
}

export const ConfusionView: React.FC<ConfusionViewProps> = ({ onBackToHome }) => {
  const [selectedPairId, setSelectedPairId] = useState<string>(CONFUSION_PAIRS[0].id);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [drillScore, setDrillScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  const currentPair: ConfusionItem = CONFUSION_PAIRS.find(p => p.id === selectedPairId) || CONFUSION_PAIRS[0];
  const currentQuestion: Question | undefined = currentPair.questions[activeQuestionIdx];

  const handlePairChange = (id: string) => {
    setSelectedPairId(id);
    setActiveQuestionIdx(0);
    setDrillScore({ correct: 0, total: 0 });
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!currentQuestion) return;
    recordAnswer(isCorrect, currentQuestion.id, currentQuestion.topicId, false);
    setDrillScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (activeQuestionIdx < currentPair.questions.length - 1) {
      setActiveQuestionIdx(prev => prev + 1);
    } else {
      setActiveQuestionIdx(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-orange-800 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-200 uppercase mb-2">
          <Zap className="w-4 h-4" />
          <span>Especial Trampas de Examen</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          ¡No lo Confundas! — Batallas de Conceptos
        </h1>
        <p className="text-amber-100 text-sm sm:text-base max-w-2xl">
          El 80% de los fallos en 1.º de ESO ocurren por confundir términos parecidos.
          Aquí aprenderás a distinguir cada pareja cara a cara para no caer en la trampa.
        </p>
      </div>

      {/* Pair Switcher Tabs */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-max p-1 bg-slate-100 rounded-xl border border-slate-200">
          {CONFUSION_PAIRS.map((pair) => {
            const isActive = pair.id === selectedPairId;
            return (
              <button
                key={pair.id}
                onClick={() => handlePairChange(pair.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                <span>⚡ {pair.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side Dual Card: TERM A vs TERM B */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
            Comparativa Frente a Frente
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            {currentPair.title}
          </h2>
          <p className="text-xs sm:text-sm font-armenian text-slate-500 mt-0.5">
            {currentPair.titleHy}
          </p>
        </div>

        {/* The 2 Opposing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          <div className="p-5 rounded-xl border-2 border-blue-200 bg-blue-50/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-blue-900">
                  {currentPair.termA.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                  Opción 1
                </span>
              </div>
              <p className="text-xs font-armenian text-blue-700 mb-3">
                {currentPair.termA.nameHy}
              </p>
              <p className="text-sm text-slate-800 font-medium mb-2 leading-relaxed">
                {currentPair.termA.defEs}
              </p>
              <p className="text-xs font-armenian text-slate-600 bg-white/80 p-2 rounded border border-blue-100">
                🇦🇲 {currentPair.termA.defHy}
              </p>

              <div className="mt-4 pt-3 border-t border-blue-100 space-y-1.5">
                <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wide block">
                  3 Claves para reconocerlo:
                </span>
                {currentPair.termA.keys.map((k, idx) => (
                  <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">✓</span>
                    <div>
                      <span>{k}</span>
                      <span className="block text-[11px] font-armenian text-slate-500">
                        {currentPair.termA.keysHy[idx]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-blue-200 text-xs">
              <span className="font-bold text-blue-900 block mb-1">Ejemplo modelo:</span>
              <p className="font-semibold text-slate-800 italic">"{currentPair.termA.example.es}"</p>
              <p className="font-armenian text-slate-600 text-[11px] mt-0.5">«{currentPair.termA.example.hy}»</p>
            </div>
          </div>

          {/* Card B */}
          <div className="p-5 rounded-xl border-2 border-orange-200 bg-orange-50/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-orange-900">
                  {currentPair.termB.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-semibold">
                  Opción 2
                </span>
              </div>
              <p className="text-xs font-armenian text-orange-700 mb-3">
                {currentPair.termB.nameHy}
              </p>
              <p className="text-sm text-slate-800 font-medium mb-2 leading-relaxed">
                {currentPair.termB.defEs}
              </p>
              <p className="text-xs font-armenian text-slate-600 bg-white/80 p-2 rounded border border-orange-100">
                🇦🇲 {currentPair.termB.defHy}
              </p>

              <div className="mt-4 pt-3 border-t border-orange-100 space-y-1.5">
                <span className="text-[11px] font-bold text-orange-800 uppercase tracking-wide block">
                  3 Claves para reconocerlo:
                </span>
                {currentPair.termB.keys.map((k, idx) => (
                  <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">✓</span>
                    <div>
                      <span>{k}</span>
                      <span className="block text-[11px] font-armenian text-slate-500">
                        {currentPair.termB.keysHy[idx]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-orange-200 text-xs">
              <span className="font-bold text-orange-900 block mb-1">Ejemplo modelo:</span>
              <p className="font-semibold text-slate-800 italic">"{currentPair.termB.example.es}"</p>
              <p className="font-armenian text-slate-600 text-[11px] mt-0.5">«{currentPair.termB.example.hy}»</p>
            </div>
          </div>
        </div>

        {/* The Decisive Golden Difference Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>LA DIFERENCIA DE ORO (Truco para el Examen):</span>
          </div>
          <p className="text-base font-bold text-amber-950 mb-1">
            {currentPair.keyDifferenceEs}
          </p>
          <p className="text-xs sm:text-sm font-armenian text-amber-900 font-medium">
            🇦🇲 {currentPair.keyDifferenceHy}
          </p>
        </div>
      </div>

      {/* Interactive Drill Practice Questions for this Pair */}
      {currentQuestion && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>🎯 Entrenamiento: ¿Sabes cuál es en este ejemplo?</span>
            </h3>
            <span className="text-xs text-slate-500">
              Pregunta {activeQuestionIdx + 1} de {currentPair.questions.length}
            </span>
          </div>

          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            allowTranslations={true}
          />
        </div>
      )}
    </div>
  );
};
