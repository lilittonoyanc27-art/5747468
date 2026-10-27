import React, { useState } from 'react';
import { THEORY_TOPICS, NOTEBOOK_VOCABULARY } from './theoryData.ts';
import { TheoryTopic, TheoryConcept } from './types.ts';
import { SentenceTranslator } from './SentenceTranslator.tsx';
import { BookOpen, Check, ArrowRight, Lightbulb, Compass, Award, Layers, Sparkles, BookMarked, Volume2 } from 'lucide-react';


interface TheoryViewProps {
  onGoToPractice: (topicId: string) => void;
  onGoToExam: () => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onGoToPractice, onGoToExam }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(THEORY_TOPICS[0].id);
  const [activeConceptIndex, setActiveConceptIndex] = useState<number>(0);
  const [learningStage, setLearningStage] = useState<'entender' | 'recordar' | 'reconocer' | 'ejemplos' | 'tabla'>('entender');

  const currentTopic = THEORY_TOPICS.find(t => t.id === selectedTopicId) || THEORY_TOPICS[0];
  const currentConcept: TheoryConcept | undefined = currentTopic.concepts[activeConceptIndex] || currentTopic.concepts[0];

  const handleTopicChange = (topicId: string) => {
    setSelectedTopicId(topicId);
    setActiveConceptIndex(0);
    setLearningStage('entender');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Aprender Teoría Paso a Paso</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Teoría de Lengua y Literatura — 1.º ESO
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
          El método de aprendizaje más eficaz: <span className="text-white font-medium">Entender → Recordar → Reconocer → Practicar</span>.
          Toca cualquier frase en español para ver su traducción exacta al armenio.
        </p>
      </div>

      {/* Horizontal Topic Selector Tabs */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-max p-1 bg-slate-100/90 rounded-xl border border-slate-200">
          {THEORY_TOPICS.map((topic) => {
            const isActive = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => handleTopicChange(topic.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-semibold border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {topic.number}
                </span>
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Title & Overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Tema {currentTopic.number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              {currentTopic.title}
            </h2>
            <p className="text-xs sm:text-sm font-armenian text-slate-500 mt-0.5">
              {currentTopic.titleHy}
            </p>
          </div>
          <button
            onClick={() => onGoToPractice(currentTopic.id)}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shrink-0 self-start sm:self-center shadow-xs"
          >
            <span>Ir a Práctica de este Tema</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Topic Summary with SentenceTranslator */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 mb-6 text-sm sm:text-base leading-relaxed">
          <div className="text-slate-800">
            <SentenceTranslator
              sentenceEs={currentTopic.summaryEs}
              sentenceHy={currentTopic.summaryHy}
            />
          </div>
        </div>

        {/* Concept Selector Pills if multiple concepts */}
        {currentTopic.concepts.length > 1 && (
          <div className="mb-6">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Conceptos del Tema:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentTopic.concepts.map((concept, idx) => {
                const isCurrent = idx === activeConceptIndex;
                return (
                  <button
                    key={concept.id}
                    onClick={() => {
                      setActiveConceptIndex(idx);
                      setLearningStage('entender');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {concept.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 5-Step Stage Controller (ENTENDER -> RECORDAR -> RECONOCER -> EJEMPLOS -> TABLA) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setLearningStage('entender')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              learningStage === 'entender' ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>1. Entender</span>
          </button>
          <button
            onClick={() => setLearningStage('recordar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              learningStage === 'recordar' ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>2. Recordar</span>
          </button>
          <button
            onClick={() => setLearningStage('reconocer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              learningStage === 'reconocer' ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>3. Reconocer</span>
          </button>
          <button
            onClick={() => setLearningStage('ejemplos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              learningStage === 'ejemplos' ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>4. Ejemplos (10)</span>
          </button>
          {currentTopic.comparativeTable && (
            <button
              onClick={() => setLearningStage('tabla')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                learningStage === 'tabla' ? 'bg-white text-blue-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>5. Tabla Comparativa</span>
            </button>
          )}
        </div>

        {/* STAGE CONTENT RENDERING */}
        {currentConcept && (
          <div className="bg-slate-50/60 rounded-xl p-5 sm:p-6 border border-slate-200">
            {/* STAGE 1: ENTENDER */}
            {learningStage === 'entender' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <Compass className="w-4 h-4" />
                  <span>Paso 1: Entender la regla con palabras sencillas</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentConcept.name}
                </h3>
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-2xs">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      En español:
                    </span>
                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                      <SentenceTranslator
                        sentenceEs={currentConcept.stageEntender.es}
                        sentenceHy={currentConcept.stageEntender.hy}
                      />
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setLearningStage('recordar')}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Siguiente: 3 Claves para Recordar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 2: RECORDAR */}
            {learningStage === 'recordar' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Lightbulb className="w-4 h-4" />
                  <span>Paso 2: Tres claves esenciales para no olvidar en el examen</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Claves de {currentConcept.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentConcept.stageRecordar.keys.map((key, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center mb-2">
                          #{i + 1}
                        </div>
                        <p className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                          {key.es}
                        </p>
                        <p className="text-xs sm:text-sm font-armenian text-amber-950 font-medium">
                          {key.hy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => setLearningStage('entender')}
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50"
                  >
                    Volver a Entender
                  </button>
                  <button
                    onClick={() => setLearningStage('reconocer')}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Siguiente: Reconocer en un Ejemplo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 3: RECONOCER */}
            {learningStage === 'reconocer' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <Check className="w-4 h-4" />
                  <span>Paso 3: Reconocer la clave en el texto</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Cómo identificarlo en una pregunta de examen
                </h3>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                    <span className="text-xs font-semibold text-emerald-900 block mb-1">Texto analizado:</span>
                    <p className="text-base font-semibold text-slate-900 italic">
                      "{currentConcept.stageReconocer.textEs}"
                    </p>
                    <p className="text-xs sm:text-sm font-armenian text-emerald-950 mt-1">
                      «{currentConcept.stageReconocer.textHy}»
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500 block mb-1">
                      Elemento clave a buscar:
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-blue-800">
                      👉 {currentConcept.stageReconocer.highlightEs}
                    </p>
                    <p className="text-xs sm:text-sm font-armenian text-slate-700 mt-0.5">
                      👉 {currentConcept.stageReconocer.highlightHy}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500 block mb-1">
                      ¿Por qué se reconoce así?
                    </span>
                    <p className="text-sm sm:text-base text-slate-700">
                      {currentConcept.stageReconocer.explanationEs}
                    </p>
                    <p className="text-xs sm:text-sm font-armenian text-slate-600 mt-1">
                      {currentConcept.stageReconocer.explanationHy}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => setLearningStage('recordar')}
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50"
                  >
                    Volver a Recordar
                  </button>
                  <button
                    onClick={() => setLearningStage('ejemplos')}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Ver 10 Ejemplos Prácticos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 4: EJEMPLOS (5 simples + 5 complejos) */}
            {learningStage === 'ejemplos' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <Layers className="w-4 h-4" />
                  <span>Paso 4: Banco de Ejemplos para fijar la memoria</span>
                </div>

                {/* 5 Ejemplos Simples */}
                <div>
                  <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                    <span>🟢 5 Ejemplos Simples:</span>
                  </h4>
                  <div className="space-y-2">
                    {currentConcept.examplesSimple.map((ex, i) => (
                      <div key={i} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="text-sm sm:text-base text-slate-900 font-medium">
                          <SentenceTranslator sentenceEs={ex.es} sentenceHy={ex.hy} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5 Ejemplos Complejos */}
                <div>
                  <h4 className="text-sm font-bold text-rose-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                    <span>🔴 5 Ejemplos Literarios de Examen:</span>
                  </h4>
                  <div className="space-y-2">
                    {currentConcept.examplesComplex.map((ex, i) => (
                      <div key={i} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="text-sm sm:text-base text-slate-900 font-medium">
                          <SentenceTranslator sentenceEs={ex.es} sentenceHy={ex.hy} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metaphor Structures Special Card if applicable */}
                {currentConcept.metaStructures && (
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <h4 className="text-base font-bold text-blue-900 mb-3">
                      Las 3 Estructuras Básicas de la Metáfora
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentConcept.metaStructures.map((struct, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs space-y-2">
                          <span className="text-xs font-bold text-blue-700 block uppercase">
                            {struct.type}
                          </span>
                          <p className="text-xs text-slate-600">
                            {struct.descriptionEs}
                          </p>
                          <div className="p-2.5 bg-blue-50/70 rounded-lg text-xs font-semibold text-blue-950">
                            "{struct.exampleEs}"
                          </div>
                          <div className="text-[11px] text-slate-500 space-y-0.5 pt-1">
                            <div><strong className="text-slate-700">Término Real:</strong> {struct.realTerm}</div>
                            <div><strong className="text-slate-700">Término Imag:</strong> {struct.imagTerm}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => setLearningStage('reconocer')}
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50"
                  >
                    Volver a Reconocer
                  </button>
                  <button
                    onClick={() => onGoToPractice(currentTopic.id)}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <span>¡Listo para Practicar este Tema!</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE 5: TABLA COMPARATIVA */}
            {learningStage === 'tabla' && currentTopic.comparativeTable && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
                  <Award className="w-4 h-4" />
                  <span>Tabla Comparativa Esencial para el Examen</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                        <th className="p-3 font-semibold">Aspecto / Կողմ</th>
                        <th className="p-3 font-semibold text-blue-800">Literatura Popular</th>
                        <th className="p-3 font-semibold text-indigo-800">Literatura Culta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentTopic.comparativeTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3 font-semibold text-slate-900">
                            <div>{row.aspect}</div>
                            <div className="text-[11px] font-armenian text-slate-500 font-normal">{row.aspectHy}</div>
                          </td>
                          <td className="p-3 text-slate-800">
                            <div>{row.popular}</div>
                            <div className="text-[11px] font-armenian text-blue-900">{row.popularHy}</div>
                          </td>
                          <td className="p-3 text-slate-800">
                            <div>{row.culta}</div>
                            <div className="text-[11px] font-armenian text-indigo-900">{row.cultaHy}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => onGoToPractice(currentTopic.id)}
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Practicar Preguntas de Examen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SPECIAL NOTEBOOK VOCABULARY SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Vocabulario de la Libreta Escolar
              </h3>
              <p className="text-xs font-armenian text-slate-500">
                Դպրոցական տետրի կարևոր բառապաշարը և արտահայտությունները
              </p>
            </div>
          </div>
          <span className="text-xs bg-amber-50 text-amber-800 font-semibold px-2.5 py-1 rounded-full border border-amber-200/80">
            {NOTEBOOK_VOCABULARY.length} palabras clave
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {NOTEBOOK_VOCABULARY.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-amber-50/40 hover:border-amber-200 transition-all group"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-bold text-slate-900 text-sm group-hover:text-amber-900 transition-colors">
                  {item.es}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                      const u = new SpeechSynthesisUtterance(item.es);
                      u.lang = 'es-ES';
                      window.speechSynthesis.speak(u);
                    }
                  }}
                  className="text-slate-400 hover:text-amber-700 p-0.5 rounded transition-colors"
                  title="Escuchar pronunciación"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="text-xs font-armenian font-semibold text-blue-900 mt-0.5">
                {item.hy}
              </div>
              {item.contextEs && (
                <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600 italic">
                  <span>"{item.contextEs}"</span>
                  {item.contextHy && (
                    <span className="block not-italic font-armenian text-slate-500 mt-0.5">
                      «{item.contextHy}»
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

