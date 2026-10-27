import React, { useState } from 'react';
import { loadProgress } from './storage.ts';
import { UserProgress } from './types.ts';
import { TheoryView } from './TheoryView.tsx';
import { PracticeView } from './PracticeView.tsx';
import { ConfusionView } from './ConfusionView.tsx';
import { ReadingView } from './ReadingView.tsx';
import { GamesView } from './GamesView.tsx';
import { SmartReviewView } from './SmartReviewView.tsx';
import { ExamSimulatorView } from './ExamSimulatorView.tsx';
import { ExamTomorrowView } from './ExamTomorrowView.tsx';
import { ProgressView } from './ProgressView.tsx';
import {
  BookOpen,
  Brain,
  Target,
  FileText,
  Zap,
  Gamepad2,
  RotateCcw,
  ClipboardCheck,
  Flame,
  BarChart3,
  Languages,
  ArrowRight,
  Sparkles,
  Trophy,
  Compass
} from 'lucide-react';

export type ActiveTab =
  | 'home'
  | 'teoria'
  | 'practica'
  | 'confusion'
  | 'lectura'
  | 'juegos'
  | 'repaso'
  | 'simulacro'
  | 'manana'
  | 'progreso';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [practiceTopicId, setPracticeTopicId] = useState<string | undefined>(undefined);
  const [progressState, setProgressState] = useState<UserProgress>(loadProgress());

  const refreshProgress = () => {
    setProgressState(loadProgress());
  };

  const handleNavigate = (tab: ActiveTab, topicId?: string) => {
    setPracticeTopicId(topicId);
    setActiveTab(tab);
    refreshProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Bar with Top Bar Contract (Single-line wordmark, nav links, status) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title wordmark */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 text-left shrink-0 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center font-black text-lg shadow-xs">
              ¡P!
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                ¡PREPARADO PARA EL EXAMEN!
              </span>
              <span className="text-[11px] font-medium text-slate-500 block leading-none">
                Lengua Castellana y Literatura — 1.º ESO
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <button
              onClick={() => handleNavigate('teoria')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'teoria' ? 'text-blue-700 font-bold' : ''
              }`}
            >
              Teoría
            </button>
            <button
              onClick={() => handleNavigate('practica')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'practica' ? 'text-blue-700 font-bold' : ''
              }`}
            >
              Práctica
            </button>
            <button
              onClick={() => handleNavigate('confusion')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'confusion' ? 'text-amber-700 font-bold' : ''
              }`}
            >
              No lo Confundas
            </button>
            <button
              onClick={() => handleNavigate('lectura')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'lectura' ? 'text-emerald-700 font-bold' : ''
              }`}
            >
              Lectura y Textos
            </button>
            <button
              onClick={() => handleNavigate('juegos')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'juegos' ? 'text-purple-700 font-bold' : ''
              }`}
            >
              Juegos
            </button>
            <button
              onClick={() => handleNavigate('simulacro')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'simulacro' ? 'text-blue-700 font-bold' : ''
              }`}
            >
              Simulacro
            </button>
          </nav>

          {/* Zone 3: Level Badge & Quick Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavigate('progreso')}
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold text-slate-800"
              title="Ver mis estadísticas y nivel"
            >
              <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="hidden sm:inline">{progressState.levelTitle.split('—')[0]}</span>
              <span className="text-blue-700 font-bold">({progressState.xp} XP)</span>
            </button>

            <button
              onClick={() => handleNavigate('manana')}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Examen Mañana</span>
              <span className="sm:hidden">Mañana</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'home' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Preparación Total para 1.º de ESO (7.º Grado)</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                  Domina Lengua y Literatura para el Examen
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Aprende a diferenciar todos los conceptos de la libreta escolar, analiza textos poéticos y narrativos,
                  y practica con cientos de preguntas reales con explicaciones claras en español y armenio (հայերեն).
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleNavigate('teoria')}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Comenzar con Teoría</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNavigate('simulacro')}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-sm transition-all backdrop-blur-xs"
                  >
                    Hacer Simulacro de Examen
                  </button>
                </div>
              </div>

              {/* Decorative Subtle Language Pill */}
              <div className="hidden lg:block absolute -right-6 -bottom-6 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            </div>

            {/* Armenian Support Feature Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🇦🇲</span>
                <div>
                  <span className="font-bold text-amber-900 block">
                    Հայերեն թարգմանություն և բացատրություն
                  </span>
                  <p className="text-amber-800">
                    Հավելվածի բոլոր նախադասությունները, կանոնները, հարցերն ու սխալների բացատրությունները թարգմանված են հայերեն: Սեղմիր ցանկացած տողի վրա:
                  </p>
                </div>
              </div>
              <div className="text-xs font-semibold px-3 py-1 bg-amber-200/70 text-amber-900 rounded-lg shrink-0 self-start sm:self-center">
                100% Ինտերակտիվ
              </div>
            </div>

            {/* THE 10 BIG ESSENTIAL SECTION CARDS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Secciones de Entrenamiento
                </h2>
                <span className="text-xs text-slate-500 font-medium">10 módulos interactivos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. APRENDER TEORÍA */}
                <button
                  onClick={() => handleNavigate('teoria')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      📚 APRENDER TEORÍA
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Los 7 temas explicados con el método: Entender → Recordar → Reconocer → Practicar.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 mt-4">
                    <span>Estudiar conceptos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 2. PRACTICAR Y RECORDAR */}
                <button
                  onClick={() => handleNavigate('practica')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      🧠 PRACTICAR Y RECORDAR
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Entrenamiento continuo por niveles: Fácil 🟢, Medio 🟡 y Difícil 🔴.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 mt-4">
                    <span>Practicar preguntas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 3. ELIGE LA RESPUESTA CORRECTA */}
                <button
                  onClick={() => handleNavigate('juegos')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      🎯 ELIGE LA RESPUESTA CORRECTA
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Identifica figuras literarias y definiciones entre 4 opciones con explicaciones completas.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-purple-700 flex items-center gap-1 mt-4">
                    <span>Jugar ahora</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 4. LECTURA Y ANÁLISIS */}
                <button
                  onClick={() => handleNavigate('lectura')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      📖 LECTURA Y ANÁLISIS
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Romances, leyendas y textos con traducción frase a frase y 10 preguntas por lectura.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-teal-700 flex items-center gap-1 mt-4">
                    <span>Leer y analizar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 5. NO LO CONFUNDAS */}
                <button
                  onClick={() => handleNavigate('confusion')}
                  className="bg-white p-5 rounded-2xl border-2 border-amber-300 hover:border-amber-500 hover:shadow-md transition-all text-left group flex flex-col justify-between bg-amber-50/20"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
                      ⚡ NO LO CONFUNDAS
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Anáfora vs Epanadiplosis, Asíndeton vs Polisíndeton, Mito vs Leyenda, Culta vs Popular.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-amber-800 flex items-center gap-1 mt-4">
                    <span>Evitar trampas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 6. JUEGOS DE LENGUA */}
                <button
                  onClick={() => handleNavigate('juegos')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Gamepad2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      🎮 JUEGOS DE LENGUA
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      5 juegos de memoria, detección de errores y clasificación de géneros literarios.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-indigo-700 flex items-center gap-1 mt-4">
                    <span>Entrar a los juegos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 7. REPASAR MIS ERRORES */}
                <button
                  onClick={() => handleNavigate('repaso')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                      🔁 REPASAR MIS ERRORES
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Repetición inteligente de preguntas falladas hasta dominarlas por completo.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-rose-700 flex items-center gap-1 mt-4">
                    <span>{progressState.missedQuestionIds.length} pendientes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 8. SIMULACRO DE EXAMEN */}
                <button
                  onClick={() => handleNavigate('simulacro')}
                  className="bg-white p-5 rounded-2xl border-2 border-blue-600 hover:shadow-md transition-all text-left group flex flex-col justify-between bg-blue-50/20"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <ClipboardCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                      📝 SIMULACRO DE EXAMEN
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Examen con cronómetro (20, 40 o 60 preguntas) y nota oficial sobre 10 puntos.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-800 flex items-center gap-1 mt-4">
                    <span>Hacer examen real</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 9. ¡TENGO EXAMEN MAÑANA! */}
                <button
                  onClick={() => handleNavigate('manana')}
                  className="bg-white p-5 rounded-2xl border-2 border-rose-500 hover:shadow-md transition-all text-left group flex flex-col justify-between bg-rose-50/20"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-rose-950 group-hover:text-rose-700 transition-colors">
                      ⏰ ¡TENGO EXAMEN MAÑANA!
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Plan intensivo de 30, 45 o 60 minutos con el resumen más directo y urgente.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-rose-700 flex items-center gap-1 mt-4">
                    <span>Sprint de emergencia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* 10. MI PROGRESO */}
                <button
                  onClick={() => handleNavigate('progreso')}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      📊 MI PROGRESO
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Estadísticas de aciertos, puntos XP, nivel actual e insignias obtenidas.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1 mt-4">
                    <span>Ver estadísticas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVE SECTION VIEWS */}
        {activeTab === 'teoria' && (
          <TheoryView
            onGoToPractice={(topicId) => handleNavigate('practica', topicId)}
            onGoToExam={() => handleNavigate('simulacro')}
          />
        )}

        {activeTab === 'practica' && (
          <PracticeView
            initialTopicId={practiceTopicId}
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {activeTab === 'confusion' && (
          <ConfusionView onBackToHome={() => handleNavigate('home')} />
        )}

        {activeTab === 'lectura' && (
          <ReadingView onBackToHome={() => handleNavigate('home')} />
        )}

        {activeTab === 'juegos' && (
          <GamesView onBackToHome={() => handleNavigate('home')} />
        )}

        {activeTab === 'repaso' && (
          <SmartReviewView
            onBackToHome={() => handleNavigate('home')}
            onGoToPractice={() => handleNavigate('practica')}
          />
        )}

        {activeTab === 'simulacro' && (
          <ExamSimulatorView onBackToHome={() => handleNavigate('home')} />
        )}

        {activeTab === 'manana' && (
          <ExamTomorrowView onBackToHome={() => handleNavigate('home')} />
        )}

        {activeTab === 'progreso' && (
          <ProgressView
            onBackToHome={() => handleNavigate('home')}
            onRefresh={refreshProgress}
          />
        )}
      </main>

      {/* Footer without clutter or fake engines */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>¡Preparado para el Examen! · Lengua Castellana y Literatura 1.º de ESO</span>
          <span className="text-slate-400">Կրթական ինտերակտիվ համակարգ հայերեն և իսպաներեն բացատրություններով</span>
        </div>
      </footer>
    </div>
  );
}
