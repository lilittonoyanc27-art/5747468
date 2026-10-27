import React, { useState, useMemo } from 'react';
import { Question, Difficulty } from './types.ts';
import { QUESTION_BANK } from './questionBank.ts';
import { THEORY_TOPICS } from './theoryData.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { recordAnswer, shuffleArray } from './storage.ts';
import { Target, CheckCircle2, Flame, ArrowLeft, RefreshCw, AlertTriangle, BookOpen } from 'lucide-react';

interface PracticeViewProps {
  initialTopicId?: string;
  onBackToHome: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ initialTopicId, onBackToHome }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sessionCorrect, setSessionCorrect] = useState<number>(0);
  const [sessionMistakes, setSessionMistakes] = useState<number>(0);
  const [consecutiveTopicErrors, setConsecutiveTopicErrors] = useState<Record<string, number>>({});
  const [interventionTopicId, setInterventionTopicId] = useState<string | null>(null);

  // Filter and randomize questions
  const filteredQuestions: Question[] = useMemo(() => {
    let list = QUESTION_BANK;
    if (selectedTopicId !== 'all') {
      list = list.filter(q => q.topicId === selectedTopicId);
    }
    if (selectedDifficulty !== 'all') {
      list = list.filter(q => q.difficulty === selectedDifficulty);
    }
    return shuffleArray(list);
  }, [selectedTopicId, selectedDifficulty]);

  const currentQuestion: Question | undefined = filteredQuestions[currentIndex];

  const handleAnswer = (isCorrect: boolean, chosenOptionId: string) => {
    if (!currentQuestion) return;

    recordAnswer(isCorrect, currentQuestion.id, currentQuestion.topicId, false);

    if (isCorrect) {
      setSessionCorrect(prev => prev + 1);
      setConsecutiveTopicErrors(prev => ({
        ...prev,
        [currentQuestion.topicId]: 0,
      }));
    } else {
      setSessionMistakes(prev => prev + 1);
      const newErrCount = (consecutiveTopicErrors[currentQuestion.topicId] || 0) + 1;
      setConsecutiveTopicErrors(prev => ({
        ...prev,
        [currentQuestion.topicId]: newErrCount,
      }));

      // If failed 3 times in the same topic: trigger educational intervention!
      if (newErrCount >= 3) {
        setInterventionTopicId(currentQuestion.topicId);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed current pool, loop or reset
      setCurrentIndex(0);
    }
  };

  const interventionTopic = THEORY_TOPICS.find(t => t.id === interventionTopicId);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Top Bar with Filters & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            title="Volver al inicio"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Práctica Guiada por Temas</span>
            </h2>
            <p className="text-xs text-slate-500">
              Pregunta {currentIndex + 1} de {filteredQuestions.length || 1}
            </p>
          </div>
        </div>

        {/* Live Session Counters */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/80">
            <CheckCircle2 className="w-4 h-4" />
            <span>{sessionCorrect} Aciertos</span>
          </div>
          <div className="flex items-center gap-1.5 text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200/80">
            <span>{sessionMistakes} Errores</span>
          </div>
        </div>
      </div>

      {/* Filter Selectors (Topic & Difficulty) */}
      <div className="flex flex-wrap items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
            Seleccionar Tema:
          </label>
          <select
            value={selectedTopicId}
            onChange={(e) => {
              setSelectedTopicId(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los temas (banco mixto)</option>
            {THEORY_TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                Tema {t.number}: {t.title}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-[160px]">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
            Dificultad:
          </label>
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-300">
            <button
              onClick={() => { setSelectedDifficulty('all'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                selectedDifficulty === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => { setSelectedDifficulty('facil'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                selectedDifficulty === 'facil' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              🟢 Fácil
            </button>
            <button
              onClick={() => { setSelectedDifficulty('medio'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                selectedDifficulty === 'medio' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:text-amber-700'
              }`}
            >
              🟡 Medio
            </button>
            <button
              onClick={() => { setSelectedDifficulty('dificil'); setCurrentIndex(0); }}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                selectedDifficulty === 'dificil' ? 'bg-rose-600 text-white' : 'text-slate-600 hover:text-rose-700'
              }`}
            >
              🔴 Difícil
            </button>
          </div>
        </div>
      </div>

      {/* Special Pedagogical Intervention Card if 3 consecutive mistakes on a topic */}
      {interventionTopicId && interventionTopic && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 shadow-md animate-fadeIn space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>¡Pausa de aprendizaje! Has tenido 3 dudas seguidas en este tema.</span>
          </div>
          <p className="text-sm text-slate-700">
            No te preocupes: los errores son el camino para aprender. Vamos a repasar la idea central de forma ultra sencilla:
          </p>

          <div className="bg-white p-4 rounded-xl border border-amber-200">
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {interventionTopic.title} ({interventionTopic.titleHy})
            </h4>
            <p className="text-sm text-slate-800 font-medium mb-2">
              {interventionTopic.summaryEs}
            </p>
            <p className="text-xs sm:text-sm font-armenian text-amber-950 bg-amber-100/60 p-2 rounded border border-amber-200">
              🇦🇲 {interventionTopic.summaryHy}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setInterventionTopicId(null)}
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-xs"
            >
              ¡Entendido! Continuar entrenando
            </button>
          </div>
        </div>
      )}

      {/* Active Question Render */}
      {currentQuestion ? (
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onRetrySimilar={() => {
            // Pick a similar question of the same topic
            const sameTopic = filteredQuestions.filter(q => q.topicId === currentQuestion.topicId && q.id !== currentQuestion.id);
            if (sameTopic.length > 0) {
              const nextQ = sameTopic[Math.floor(Math.random() * sameTopic.length)];
              const targetIdx = filteredQuestions.findIndex(q => q.id === nextQ.id);
              if (targetIdx !== -1) setCurrentIndex(targetIdx);
            }
          }}
          allowTranslations={true}
          isExamMode={false}
        />
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
          <p className="text-slate-600 font-medium mb-3">
            No hay preguntas disponibles con los filtros seleccionados.
          </p>
          <button
            onClick={() => { setSelectedTopicId('all'); setSelectedDifficulty('all'); }}
            className="px-4 py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg hover:bg-blue-800"
          >
            Restablecer Filtros
          </button>
        </div>
      )}
    </div>
  );
};
