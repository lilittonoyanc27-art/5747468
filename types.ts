export type Difficulty = 'facil' | 'medio' | 'dificil';

export type TextGenre = 'romance' | 'leyenda' | 'mito' | 'cuento' | 'poema' | 'prosa';

export interface SentencePair {
  es: string;
  hy: string;
}

export interface OptionItem {
  id: string;
  textEs: string;
  textHy: string;
}

export interface Question {
  id: string;
  topicId: string;
  subtopic?: string;
  difficulty: Difficulty;
  questionEs: string;
  questionHy: string;
  options: OptionItem[];
  correctOptionId: string;
  explanationEs: string;
  explanationHy: string;
  rememberRuleEs: string;
  rememberRuleHy: string;
  followUpExample: SentencePair;
  similarQuestionId?: string;
}

export interface TheoryConcept {
  id: string;
  name: string;
  nameHy: string;
  stageEntender: {
    es: string;
    hy: string;
  };
  stageRecordar: {
    keys: { es: string; hy: string }[];
  };
  stageReconocer: {
    textEs: string;
    highlightEs: string;
    explanationEs: string;
    textHy: string;
    highlightHy: string;
    explanationHy: string;
  };
  examplesSimple: SentencePair[];
  examplesComplex: SentencePair[];
  metaStructures?: {
    type: string;
    descriptionEs: string;
    descriptionHy: string;
    exampleEs: string;
    exampleHy: string;
    realTerm: string;
    imagTerm: string;
  }[];
}

export interface ComparativeTableRow {
  aspect: string;
  aspectHy: string;
  popular: string;
  popularHy: string;
  culta: string;
  cultaHy: string;
}

export interface TheoryTopic {
  id: string;
  number: number;
  title: string;
  titleHy: string;
  subtitle: string;
  subtitleHy: string;
  summaryEs: string;
  summaryHy: string;
  concepts: TheoryConcept[];
  comparativeTable?: ComparativeTableRow[];
}

export interface ReadingText {
  id: string;
  titleEs: string;
  titleHy: string;
  genre: TextGenre;
  wordCount: number;
  sentences: SentencePair[];
  questions: Question[];
}

export interface ConfusionItem {
  id: string;
  title: string;
  titleHy: string;
  termA: {
    name: string;
    nameHy: string;
    defEs: string;
    defHy: string;
    keys: string[];
    keysHy: string[];
    example: SentencePair;
  };
  termB: {
    name: string;
    nameHy: string;
    defEs: string;
    defHy: string;
    keys: string[];
    keysHy: string[];
    example: SentencePair;
  };
  keyDifferenceEs: string;
  keyDifferenceHy: string;
  questions: Question[];
}

export interface ExamResult {
  id: string;
  date: string;
  mode: 'corto' | 'normal' | 'completo';
  totalQuestions: number;
  correctCount: number;
  score10: number;
  timeSeconds: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  missedQuestions: {
    question: Question;
    chosenOptionId: string;
  }[];
}

export interface Badge {
  id: string;
  titleEs: string;
  titleHy: string;
  descEs: string;
  descHy: string;
  icon: string;
  unlockedAt?: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  levelTitle: string;
  questionsAnswered: number;
  correctAnswers: number;
  mistakes: number;
  streak: number;
  lastStudyDate: string;
  masteredTopics: string[];
  weakTopics: string[];
  missedQuestionIds: string[];
  completedReadingIds: string[];
  examHistory: ExamResult[];
  unlockedBadgeIds: string[];
}
