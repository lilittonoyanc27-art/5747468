import { UserProgress, ExamResult, Badge } from './types.ts';

const STORAGE_KEY = 'preparado_lengua_1eso_progress';

export const ALL_BADGES: Badge[] = [
  {
    id: 'first_10',
    titleEs: '10 Respuestas Correctas',
    titleHy: '10 ճիշտ պատասխան',
    descEs: 'Has respondido correctamente a 10 preguntas.',
    descHy: 'Ճիշտ եք պատասխանել 10 հարցի։',
    icon: '🎯',
  },
  {
    id: 'streak_20',
    titleEs: '20 Seguidas sin fallar',
    titleHy: '20 անընդմեջ ճիշտ',
    descEs: '¡Racha impecable de 20 aciertos consecutivos!',
    descHy: 'Հիանալի շարք՝ 20 անընդմեջ ճիշտ պատասխան առանց սխալվելու։',
    icon: '⚡',
  },
  {
    id: 'first_reading',
    titleEs: 'Primera Lectura Completada',
    titleHy: 'Առաջին ընթերցված տեքստ',
    descEs: 'Has analizado tu primer texto literario con éxito.',
    descHy: 'Հաջողությամբ վերլուծել եք Ձեր առաջին գրական տեքստը։',
    icon: '📖',
  },
  {
    id: 'master_5_topics',
    titleEs: '5 Temas Dominados',
    titleHy: '5 յուրացված թեմա',
    descEs: 'Has dominado más del 80% de 5 temas de la asignatura.',
    descHy: 'Յուրացրել եք առարկայի 5 թեմաների ավելի քան 80%-ը։',
    icon: '🏆',
  },
  {
    id: 'exam_passed',
    titleEs: 'Examen Aprobado',
    titleHy: 'Հանձնված քննություն',
    descEs: 'Has obtenido un 5 o más en un simulacro de examen.',
    descHy: 'Քննության մոդելավորման ժամանակ ստացել եք 5 կամ ավելի միավոր։',
    icon: '📝',
  },
  {
    id: 'exam_excellent',
    titleEs: 'Examen Excelente (Sobresaliente)',
    titleHy: 'Գերազանց քննություն (9+)',
    descEs: '¡Puntuación superior a 9/10 en el examen!',
    descHy: 'Քննության ժամանակ ստացել եք 9/10-ից բարձր գերազանց արդյունք։',
    icon: '🌟',
  },
];

export const LEVEL_DEFINITIONS = [
  { level: 1, minXp: 0, titleEs: 'Nivel 1 — Principiante', titleHy: 'Մակարդակ 1 — Սկսնակ' },
  { level: 2, minXp: 200, titleEs: 'Nivel 2 — Explorador', titleHy: 'Մակարդակ 2 — Հետազոտող' },
  { level: 3, minXp: 600, titleEs: 'Nivel 3 — Experto', titleHy: 'Մակարդակ 3 — Փորձագետ' },
  { level: 4, minXp: 1200, titleEs: 'Nivel 4 — Maestro de Lengua', titleHy: 'Մակարդակ 4 — Լեզվի Վարպետ' },
  { level: 5, minXp: 2000, titleEs: 'Nivel 5 — Preparado para el examen', titleHy: 'Մակարդակ 5 — Պատրաստ քննությանը' },
];

export const getInitialProgress = (): UserProgress => ({
  xp: 0,
  level: 1,
  levelTitle: 'Nivel 1 — Principiante',
  questionsAnswered: 0,
  correctAnswers: 0,
  mistakes: 0,
  streak: 0,
  lastStudyDate: new Date().toISOString().split('T')[0],
  masteredTopics: [],
  weakTopics: [],
  missedQuestionIds: [],
  completedReadingIds: [],
  examHistory: [],
  unlockedBadgeIds: [],
});

export const loadProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialProgress();
    const parsed = JSON.parse(raw);
    return { ...getInitialProgress(), ...parsed };
  } catch {
    return getInitialProgress();
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
};

export const calculateLevel = (xp: number) => {
  let current = LEVEL_DEFINITIONS[0];
  for (const def of LEVEL_DEFINITIONS) {
    if (xp >= def.minXp) {
      current = def;
    }
  }
  return current;
};

export const checkBadges = (progress: UserProgress): string[] => {
  const newBadgeIds: string[] = [...progress.unlockedBadgeIds];

  if (progress.correctAnswers >= 10 && !newBadgeIds.includes('first_10')) {
    newBadgeIds.push('first_10');
  }
  if (progress.streak >= 20 && !newBadgeIds.includes('streak_20')) {
    newBadgeIds.push('streak_20');
  }
  if (progress.completedReadingIds.length >= 1 && !newBadgeIds.includes('first_reading')) {
    newBadgeIds.push('first_reading');
  }
  if (progress.masteredTopics.length >= 5 && !newBadgeIds.includes('master_5_topics')) {
    newBadgeIds.push('master_5_topics');
  }
  if (progress.examHistory.some(e => e.score10 >= 5) && !newBadgeIds.includes('exam_passed')) {
    newBadgeIds.push('exam_passed');
  }
  if (progress.examHistory.some(e => e.score10 >= 9) && !newBadgeIds.includes('exam_excellent')) {
    newBadgeIds.push('exam_excellent');
  }

  return newBadgeIds;
};

export const recordAnswer = (
  isCorrect: boolean,
  questionId: string,
  topicId: string,
  isReview: boolean = false
): UserProgress => {
  const current = loadProgress();
  const xpGain = isCorrect ? (isReview ? 15 : 10) : 1;
  const newXp = current.xp + xpGain;
  const levelInfo = calculateLevel(newXp);
  const newStreak = isCorrect ? current.streak + 1 : 0;

  let missed = [...current.missedQuestionIds];
  if (!isCorrect) {
    if (!missed.includes(questionId)) {
      missed.push(questionId);
    }
  } else if (isReview) {
    missed = missed.filter(id => id !== questionId);
  }

  const updated: UserProgress = {
    ...current,
    xp: newXp,
    level: levelInfo.level,
    levelTitle: levelInfo.titleEs,
    questionsAnswered: current.questionsAnswered + 1,
    correctAnswers: current.correctAnswers + (isCorrect ? 1 : 0),
    mistakes: current.mistakes + (isCorrect ? 0 : 1),
    streak: newStreak,
    missedQuestionIds: missed,
    lastStudyDate: new Date().toISOString().split('T')[0],
  };

  updated.unlockedBadgeIds = checkBadges(updated);
  saveProgress(updated);
  return updated;
};

export const recordExamResult = (result: ExamResult): UserProgress => {
  const current = loadProgress();
  const xpEarned = Math.round(result.score10 * 15) + (result.score10 >= 5 ? 50 : 10);
  const newXp = current.xp + xpEarned;
  const levelInfo = calculateLevel(newXp);

  const missedIds = result.missedQuestions.map(m => m.question.id);
  const updatedMissed = Array.from(new Set([...current.missedQuestionIds, ...missedIds]));

  const updated: UserProgress = {
    ...current,
    xp: newXp,
    level: levelInfo.level,
    levelTitle: levelInfo.titleEs,
    examHistory: [result, ...current.examHistory].slice(0, 30),
    missedQuestionIds: updatedMissed,
  };

  updated.unlockedBadgeIds = checkBadges(updated);
  saveProgress(updated);
  return updated;
};

export const resetAllProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
