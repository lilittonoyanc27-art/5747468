import React, { useState } from 'react';
import { loadProgress, resetAllProgress, ALL_BADGES, LEVEL_DEFINITIONS } from './storage.ts';
import { Award, Zap, Target, BookOpen, AlertCircle, RotateCcw, ShieldCheck, Flame, CheckCircle2, Trophy, Trash2 } from 'lucide-react';

interface ProgressViewProps {
  onBackToHome: () => void;
  onRefresh: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({ onBackToHome, onRefresh }) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const progress = loadProgress();

  const currentLevelDef = LEVEL_DEFINITIONS.find(d => d.level === progress.level) || LEVEL_DEFINITIONS[0];
  const nextLevelDef = LEVEL_DEFINITIONS.find(d => d.level === progress.level + 1);

  const xpCurrentLevel = currentLevelDef.minXp;
  const xpNextLevel = nextLevelDef ? nextLevelDef.minXp : progress.xp;
  const xpProgressPercent = nextLevelDef
    ? Math.min(100, Math.max(0, Math.round(((progress.xp - xpCurrentLevel) / (xpNextLevel - xpCurrentLevel)) * 100)))
    : 100;

  const accuracyPercent = progress.questionsAnswered > 0
    ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100)
    : 0;

  const handleReset = () => {
    resetAllProgress();
    setShowResetConfirm(false);
    onRefresh();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
          <Trophy className="w-4 h-4" />
          <span>Panel de Estadísticas y Logros</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Mi Progreso de Estudio
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
          Toda tu preparación queda registrada en tu dispositivo. Cuanto más practiques y repases tus errores,
          mayor será tu nivel y más cerca estarás del 10 en tu examen de Lengua.
        </p>
      </div>

      {/* Level & XP Progress Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Nivel Actual
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
              {currentLevelDef.titleEs}
            </h2>
            <p className="text-xs sm:text-sm font-armenian text-slate-500">
              {currentLevelDef.titleHy}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-blue-900 font-bold text-base shrink-0 self-start sm:self-center">
            <SparkleIcon />
            <span>{progress.xp} XP acumulados</span>
          </div>
        </div>

        {/* Progress Bar to Next Level */}
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
            <span>Progreso hacia {nextLevelDef ? nextLevelDef.titleEs : '¡Máximo Nivel!'}</span>
            <span className="font-bold text-blue-800">{xpProgressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${xpProgressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-slate-500 font-semibold block mb-1">Respondidas</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {progress.questionsAnswered}
          </div>
          <span className="text-[11px] text-slate-400">Preguntas en total</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-emerald-700 font-semibold block mb-1">Aciertos</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
            {progress.correctAnswers}
          </div>
          <span className="text-[11px] text-slate-400">Respuestas correctas</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-blue-700 font-semibold block mb-1">Eficacia</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
            {accuracyPercent}%
          </div>
          <span className="text-[11px] text-slate-400">Porcentaje de éxito</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-amber-700 font-semibold block mb-1">Racha Actual</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 flex items-center gap-1">
            <Flame className="w-6 h-6 text-amber-500" />
            <span>{progress.streak}</span>
          </div>
          <span className="text-[11px] text-slate-400">Aciertos seguidos</span>
        </div>
      </div>

      {/* Badges and Achievements */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-600" />
          <span>Insignias y Logros Desbloqueados</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = progress.unlockedBadgeIds.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/70 border-amber-300 text-slate-900'
                    : 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <span className="text-2xl shrink-0">{badge.icon}</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {badge.titleEs}
                  </h4>
                  <p className="text-[11px] font-armenian text-slate-600 mb-1">
                    {badge.titleHy}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {badge.descEs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam Simulation History */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <span>Historial de Simulacros de Examen</span>
        </h3>

        {progress.examHistory.length === 0 ? (
          <p className="text-xs sm:text-sm text-slate-500 py-3">
            Todavía no has realizado ningún simulacro de examen. Ve a la sección "Simulacro de Examen" para ponerte a prueba.
          </p>
        ) : (
          <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
            {progress.examHistory.map((ex, i) => (
              <div key={i} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-slate-900 block">
                    Simulacro {ex.mode.toUpperCase()} ({ex.totalQuestions} preguntas)
                  </span>
                  <span className="text-slate-400 text-xs">Fecha: {ex.date}</span>
                </div>
                <div className="text-right">
                  <span className={`text-base font-extrabold ${ex.score10 >= 5 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {ex.score10} / 10
                  </span>
                  <span className="text-slate-500 text-xs block">
                    {ex.correctCount} aciertos
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset Progress Section */}
      <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
        <span className="text-xs text-slate-400">
          Preparado para el Examen · Lengua 1.º ESO
        </span>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="text-xs font-semibold text-rose-600 hover:text-rose-800 flex items-center gap-1.5 p-2 rounded-lg hover:bg-rose-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Reiniciar Progreso</span>
        </button>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 text-center">
              ¿Seguro que deseas reiniciar tu progreso?
            </h4>
            <p className="text-xs text-slate-600 text-center">
              Se restablecerán tus puntos de XP, nivel, historial de exámenes y preguntas falladas. Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2 text-xs font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 shadow-xs"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SparkleIcon = () => (
  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2l1.6 4.9L16.5 8.5l-4.9 1.6L10 15l-1.6-4.9L3.5 8.5l4.9-1.6L10 2z" />
  </svg>
);
