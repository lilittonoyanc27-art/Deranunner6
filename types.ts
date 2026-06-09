export interface Example {
  es: string;
  hy: string;
  note?: string;
}

export interface GrammarItem {
  es: string;
  hy: string;
}

export interface GrammarSection {
  id: number;
  title: string;
  titleEs: string;
  introduction?: string;
  description: string;
  tableHeaders?: string[];
  tableRows?: string[][];
  examples?: Example[];
  grammarItems?: GrammarItem[];
  tips?: string[];
  subsections?: {
    title: string;
    description: string;
    examples?: Example[];
  }[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'drag-drop' | 'fill-gap' | 'matching';
  instruction: string;
  prompt: string;
  originalPhrase?: string; // e.g. Armenian text
  options?: string[]; // for MCQs
  correctAnswer: any; // string, array or object
  explanation: string;
}

export interface GameInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: 'Հեշտ' | 'Միջին' | 'Դժվար';
}

export interface ScoreState {
  currentStreak: number;
  bestStreak: number;
  solvedCount: number;
  wrongCount: number;
}
