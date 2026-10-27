import React, { useState } from 'react';
import {
  GAME_FIGURES_QUESTIONS,
  GAME_DEFINITIONS_DATA,
  GAME_ERROR_ITEMS,
  GAME_TEXT_TYPES_QUESTIONS,
  GameDefinitionItem,
  GameErrorItem
} from './interactiveGames.ts';
import { QuestionCard } from './QuestionCard.tsx';
import { Question } from './types.ts';
import { shuffleArray, recordAnswer } from './storage.ts';
import { Gamepad2, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Brain, ShieldAlert, Award } from 'lucide-react';

interface GamesViewProps {
  onBackToHome: () => void;
}

export const GamesView: React.FC<GamesViewProps> = ({ onBackToHome }) => {
  const [selectedGame, setSelectedGame] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [memoryStage, setMemoryStage] = useState<'memorize' | 'quiz'>('memorize');

  // Game 2: definition game questions
  const defQuestions: Question[] = React.useMemo(() => {
    return GAME_DEFINITIONS_DATA.map((item, idx) => {
      const isTermToDef = idx % 2 === 0;
      if (isTermToDef) {
        const opts = [
          { id: 'corr', textEs: item.correctDefEs, textHy: item.correctDefHy },
          ...item.wrongDefs.map((w, wIdx) => ({ id: `w_${wIdx}`, textEs: w.es, textHy: w.hy }))
        ];
        return {
          id: `gdef_${item.id}`,
          topicId: 'tema6',
          difficulty: 'medio' as const,
          questionEs: `¿Cuál es la definición correcta de "${item.termEs.toUpperCase()}"?`,
          questionHy: `Ո՞րն է «${item.termHy}» հասկացության ճիշտ սահմանումը:`,
          options: opts,
          correctOptionId: 'corr',
          explanationEs: `La definición exacta de ${item.termEs} es: "${item.correctDefEs}".`,
          explanationHy: `«${item.termHy}»-ի ճշգրիտ սահմանումն է՝ «${item.correctDefHy}»:`,
          rememberRuleEs: `${item.termEs}: aprende la definición en ambos sentidos.`,
          rememberRuleHy: `${item.termHy}. սովորեք սահմանումը երկու ուղղություններով:`,
          followUpExample: { es: `${item.termEs} clave en el examen.`, hy: `${item.termHy} կարևոր է քննությանը:` }
        };
      } else {
        const wrongTerms = GAME_DEFINITIONS_DATA.filter(d => d.id !== item.id).slice(0, 3);
        const opts = [
          { id: 'corr', textEs: item.termEs, textHy: item.termHy },
          ...wrongTerms.map((w, wIdx) => ({ id: `w_${wIdx}`, textEs: w.termEs, textHy: w.termHy }))
        ];
        return {
          id: `gdef_rev_${item.id}`,
          topicId: 'tema6',
          difficulty: 'medio' as const,
          questionEs: `¿Qué término corresponde a: "${item.correctDefEs}"?`,
          questionHy: `Ո՞ր տերմինն է համապատասխանում՝ «${item.correctDefHy}» սահմանմանը:`,
          options: opts,
          correctOptionId: 'corr',
          explanationEs: `Esa definición describe exactamente a ${item.termEs}.`,
          explanationHy: `Այդ սահմանումը ճշգրտորեն նկարագրում է «${item.termHy}»-ը:`,
          rememberRuleEs: `Asocia la definición a la palabra ${item.termEs}.`,
          rememberRuleHy: `Կապեք սահմանումը «${item.termHy}» բառի հետ:`,
          followUpExample: { es: item.termEs, hy: item.termHy }
        };
      }
    });
  }, []);

  // Game 3: find the error questions
  const errorQuestions: Question[] = React.useMemo(() => {
    return GAME_ERROR_ITEMS.map((item) => {
      const opts = [
        { id: 'corr', textEs: item.correctCorrectionEs, textHy: item.correctCorrectionHy },
        ...item.wrongOptions.map((w, wIdx) => ({ id: `w_${wIdx}`, textEs: w.es, textHy: w.hy }))
      ];
      return {
        id: `gerr_${item.id}`,
        topicId: 'tema6',
        difficulty: 'dificil' as const,
        questionEs: `Afirmación incorrecta: ${item.statementEs}\n\n¿Qué afirmación corrige correctamente el error?`,
        questionHy: `Սխալ պնդում. ${item.statementHy}\n\nՈ՞ր պնդումն է ճշգրտորեն ուղղում այս սխալը:`,
        options: opts,
        correctOptionId: 'corr',
        explanationEs: item.explanationEs,
        explanationHy: item.explanationHy,
        rememberRuleEs: 'Atención a los detalles falsos en las preguntas trampa.',
        rememberRuleHy: 'Ուշադրություն դարձրեք կեղծ մանրուքներին թակարդ-հարցերում:',
        followUpExample: { es: item.correctCorrectionEs, hy: item.correctCorrectionHy }
      };
    });
  }, []);

  const handleGameSelect = (gameId: 1 | 2 | 3 | 4 | 5) => {
    setSelectedGame(gameId);
    setActiveIdx(0);
    setScore(0);
    setMemoryStage('memorize');
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);
  };

  const getActiveQuestionList = (): Question[] => {
    if (selectedGame === 1) return GAME_FIGURES_QUESTIONS;
    if (selectedGame === 2) return defQuestions;
    if (selectedGame === 3) return errorQuestions;
    if (selectedGame === 4) return GAME_TEXT_TYPES_QUESTIONS;
    return GAME_FIGURES_QUESTIONS; // Game 5 uses memory flow
  };

  const currentQuestions = getActiveQuestionList();
  const currentQ: Question | undefined = currentQuestions[activeIdx];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-300 uppercase mb-2">
          <Gamepad2 className="w-4 h-4" />
          <span>Juegos Educativos de Lengua</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Gimnasio Mental — 1.º de ESO
        </h1>
        <p className="text-purple-100 text-sm sm:text-base max-w-2xl">
          Aprender jugando es la forma más rápida de consolidar conceptos en la memoria a largo plazo.
          Elige uno de los 5 juegos para entrenar tu agilidad mental.
        </p>
      </div>

      {/* 5 Game Cards Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <button
          onClick={() => handleGameSelect(1)}
          className={`p-3 rounded-xl border text-left transition-all ${
            selectedGame === 1
              ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className="text-base block mb-1">🎭</span>
          <div className="text-xs font-bold leading-tight">1. Descubre la Figura</div>
        </button>

        <button
          onClick={() => handleGameSelect(2)}
          className={`p-3 rounded-xl border text-left transition-all ${
            selectedGame === 2
              ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className="text-base block mb-1">📖</span>
          <div className="text-xs font-bold leading-tight">2. Elige la Definición</div>
        </button>

        <button
          onClick={() => handleGameSelect(3)}
          className={`p-3 rounded-xl border text-left transition-all ${
            selectedGame === 3
              ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className="text-base block mb-1">🔍</span>
          <div className="text-xs font-bold leading-tight">3. Encuentra el Error</div>
        </button>

        <button
          onClick={() => handleGameSelect(4)}
          className={`p-3 rounded-xl border text-left transition-all ${
            selectedGame === 4
              ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className="text-base block mb-1">📜</span>
          <div className="text-xs font-bold leading-tight">4. ¿Qué Tipo de Texto?</div>
        </button>

        <button
          onClick={() => handleGameSelect(5)}
          className={`p-3 rounded-xl border text-left transition-all col-span-2 sm:col-span-1 ${
            selectedGame === 5
              ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span className="text-base block mb-1">🧠</span>
          <div className="text-xs font-bold leading-tight">5. ¿Te Acuerdas?</div>
        </button>
      </div>

      {/* GAME 5: SPECIAL SPATIAL MEMORY RECALL */}
      {selectedGame === 5 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-6 shadow-xs">
          {memoryStage === 'memorize' ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-700">
                <Brain className="w-4 h-4" />
                <span>Fase 1: Memoriza estas 3 definiciones durante 1 minuto</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
                  <span className="text-xs font-bold text-purple-900 block mb-1 uppercase">1. Hipérbaton</span>
                  <p className="text-xs text-slate-800 font-medium">Alteración del orden lógico y habitual de las palabras en la oración.</p>
                  <p className="text-[11px] font-armenian text-purple-900 mt-1">Բառերի սովորական շարադասության խախտումը:</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
                  <span className="text-xs font-bold text-purple-900 block mb-1 uppercase">2. Epanadiplosis</span>
                  <p className="text-xs text-slate-800 font-medium">Comenzar y terminar el mismo verso con la misma palabra exacta.</p>
                  <p className="text-[11px] font-armenian text-purple-900 mt-1">Նույն տողը նույն բառով սկսելն ու ավարտելը:</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
                  <span className="text-xs font-bold text-purple-900 block mb-1 uppercase">3. Asíndeton</span>
                  <p className="text-xs text-slate-800 font-medium">Omisión de conjunciones ("y", "e", "ni") para dar rapidez.</p>
                  <p className="text-[11px] font-armenian text-purple-900 mt-1">Շաղկապների բացթողումը՝ արագություն տալու համար:</p>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setMemoryStage('quiz')}
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs"
                >
                  ¡Ya me las sé! Ocultar definiciones y poner a prueba
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-700 uppercase">
                  Fase 2: Comprobación de memoria inmediata
                </span>
                <button
                  onClick={() => setMemoryStage('memorize')}
                  className="text-xs text-slate-500 hover:text-purple-700 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Volver a ver
                </button>
              </div>

              {currentQ && (
                <QuestionCard
                  key={currentQ.id}
                  question={currentQ}
                  onAnswer={handleAnswer}
                  onNext={() => {
                    if (activeIdx < currentQuestions.length - 1) setActiveIdx(prev => prev + 1);
                    else setActiveIdx(0);
                  }}
                  allowTranslations={true}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        /* STANDARD GAME QUESTION DISPLAY */
        currentQ && (
          <div className="space-y-5">
            {selectedGame === 4 && (
              <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 sm:p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                  <span className="text-lg">📜</span>
                  <span>Guía Rápida para Reconocer el Tipo de Texto / Տեքստի տեսակները ճանաչելու ուղեցույց</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-amber-200/80">
                    <span className="font-bold text-purple-900 block mb-0.5">1. Romance (Ռոմանս)</span>
                    <p className="text-slate-700">Poema en versos <strong>octosílabos (8)</strong> con rima <strong>asonante</strong> en los pares.</p>
                    <p className="text-[11px] font-armenian text-purple-800 mt-1">8 վանկանի տողեր, զույգ տողերի ասոնանս հանգով:</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-amber-200/80">
                    <span className="font-bold text-indigo-900 block mb-0.5">2. Leyenda (Ավանդազրույց)</span>
                    <p className="text-slate-700"><strong>Lugar real</strong> (Soria, Teruel, Toledo) + <strong>misterio o fantasmas</strong>.</p>
                    <p className="text-[11px] font-armenian text-indigo-800 mt-1">Իրական վայր + առեղծվածային կամ գերբնական տարրեր:</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-amber-200/80">
                    <span className="font-bold text-blue-900 block mb-0.5">3. Mito (Առասպել)</span>
                    <p className="text-slate-700"><strong>Dioses</strong> (Zeus, Hades) + <strong>origen del cosmos</strong> o naturaleza.</p>
                    <p className="text-[11px] font-armenian text-blue-800 mt-1">Աստվածներ + աշխարհի ու բնության երևույթների ծագում:</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-amber-200/80">
                    <span className="font-bold text-emerald-900 block mb-0.5">4. Cuento (Հեքիաթ)</span>
                    <p className="text-slate-700">Narración breve en prosa + <strong>Inicio, Nudo y Desenlace</strong>.</p>
                    <p className="text-[11px] font-armenian text-emerald-800 mt-1">Կարճ արձակ պատմություն + քիչ կերպարներ + 3 մաս:</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between bg-slate-100 p-3 rounded-xl">
              <span className="text-xs font-bold text-slate-700">
                Pregunta {activeIdx + 1} de {currentQuestions.length}
              </span>
              <span className="text-xs font-semibold text-purple-800">
                Puntuación: {score} aciertos
              </span>
            </div>

            <QuestionCard
              key={currentQ.id}
              question={currentQ}
              onAnswer={handleAnswer}
              onNext={() => {
                if (activeIdx < currentQuestions.length - 1) setActiveIdx(prev => prev + 1);
                else setActiveIdx(0);
              }}
              allowTranslations={true}
            />
          </div>
        )
      )}
    </div>
  );
};
