import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from './data';
import { QuizQuestion } from './types';
import { HelpCircle, CheckCircle2, XCircle, Award, ArrowRight, BookOpen, RotateCcw, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GameQuizEngineProps {
  gameId: string;
  gameTitle: string;
  onWin: (points: number) => void;
  onLoss: () => void;
}

export default function GameQuizEngine({ gameId, gameTitle, onWin, onLoss }: GameQuizEngineProps) {
  const quizPool = QUIZ_QUESTIONS[gameId] || [];
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]); // track correct/incorrect for footer indicators

  // Shuffle or initialize questions
  useEffect(() => {
    // Pick 5 random questions from pool or all if less than 5
    const shuffled = [...quizPool].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 6)); // 6 questions per game
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
  }, [gameId]);

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
        <AlertTriangle className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
        <p className="text-slate-600 font-medium font-sans">Հնարավոր չէ բեռնել այս խաղի հարցերը։</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    const correct = currentQuestion.correctAnswer === option;
    setSelectedOption(option);
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 15 + streak * 5); // bonus for streak
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setHistory((prev) => [...prev, true]);
    } else {
      setStreak(0);
      setHistory((prev) => [...prev, false]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      // Game Over, calculate total points to award
      const finalAwardPoints = score + (maxStreak * 10);
      onWin(finalAwardPoints);
    }
  };

  const handleRestart = () => {
    const shuffled = [...quizPool].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 6)); // load 6 fresh ones
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
  };

  const isCompleted = currentIndex >= questions.length || (isAnswered && currentIndex + 1 === questions.length && selectedOption);

  return (
    <div className="flex flex-col gap-6">
      
      {/* Quiz Header Info */}
      <div className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-150 p-4 rounded-2xl">
        <div>
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
            Հարց
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-1.5 px-3">
          {questions.map((_, idx) => {
            let dotColor = "bg-slate-200";
            if (idx === currentIndex) dotColor = "bg-yellow-500 ring-2 ring-yellow-200 scale-110";
            else if (history[idx] === true) dotColor = "bg-emerald-500";
            else if (history[idx] === false) dotColor = "bg-rose-500";

            return (
              <span 
                key={idx} 
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${dotColor}`}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Շարք (Streak)
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-yellow-600 flex items-center justify-end gap-1">
              🔥 {streak}
            </span>
          </div>

          <div className="text-right">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Միավորներ
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-800">
              {score}
            </span>
          </div>
        </div>
      </div>

      {/* Main Question Card Area */}
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-5 py-2"
          >
            {/* Question instruction details */}
            <span className="text-sm uppercase font-bold tracking-wider text-slate-450 font-mono">
              {currentQuestion.instruction}
            </span>

            {/* Armenian target source phrase or helper */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5.5 mb-1 text-center">
              <span className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                իսպաներեն թարգմանեք
              </span>
              <p className="text-base sm:text-lg font-bold font-sans text-slate-850">
                {currentQuestion.prompt}
              </p>
            </div>

            {/* Answer Options list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options?.map((option, idx) => {
                const isCurrentSelected = selectedOption === option;
                const isCorrectOption = currentQuestion.correctAnswer === option;
                
                let optionStyle = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50";
                let optionBadge = null;

                if (isAnswered) {
                  if (isCorrectOption) {
                    optionStyle = "border-emerald-500 bg-emerald-50/55 text-emerald-950 ring-2 ring-emerald-250";
                    optionBadge = <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0" />;
                  } else if (isCurrentSelected) {
                    optionStyle = "border-rose-300 bg-rose-50/55 text-rose-950 ring-2 ring-rose-200";
                    optionBadge = <XCircle className="h-4.5 w-4.5 text-rose-500 shrink-0" />;
                  } else {
                    optionStyle = "border-slate-100 bg-white opacity-40";
                  }
                }

                return (
                  <motion.button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(option)}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between gap-3 px-5.5 py-4 rounded-xl border text-left font-sans text-sm sm:text-base font-bold transition-all cursor-pointer ${optionStyle}`}
                  >
                    <span className="font-mono tracking-wide text-slate-900">
                      {option}
                    </span>
                    {optionBadge}
                  </motion.button>
                );
              })}
            </div>

            {/* Lesson / Explanation Block shown after answering */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl p-5 border shadow-xs ${
                  isCorrect 
                    ? 'bg-emerald-50/45 border-emerald-100' 
                    : 'bg-rose-50/40 border-rose-100'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <BookOpen className={`h-5.5 w-5.5 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wider ${isCorrect ? 'text-emerald-850' : 'text-rose-850'}`}>
                      {isCorrect ? 'Ճիշտ պատասխան! 🎉' : 'Պատասխանը սխալ է 🤔'}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-705 font-medium leading-relaxed mt-1.5">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>

                {/* Continue/Next trigger */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold bg-slate-800 text-white hover:bg-slate-900 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <span>
                      {currentIndex + 1 === questions.length ? 'Ավարտել խաղը' : 'Հաջորդ հարցը'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* Finished Slide screen state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-100 p-7 rounded-3xl text-center shadow-xs"
          >
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-3.5 animate-bounce" />
            <h3 className="font-display text-lg sm:text-xl font-black text-slate-850">
              Խաղն ավարտվեց: 🏆
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto mt-2 leading-relaxed">
              Դուք հաջողությամբ պատասխանեցիք իսպաներեն դերանունների բոլոր հարցերին և վաստակեցիք <strong>+{score + maxStreak * 10}</strong> միավոր (ներառյալ շարունակականության բոնուսը)։
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto my-6 border-y border-slate-200/60 py-4">
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Լավագույն շարք</span>
                <span className="text-sm font-bold text-slate-800">🔥 {maxStreak}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Միավորներ</span>
                <span className="text-sm font-bold text-slate-800">✨ {score}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-xs"
              >
                <RotateCcw className="h-4 w-4" />
                Նորից Խաղալ
              </button>
              <button
                onClick={() => onWin(score + maxStreak * 10)}
                className="px-5 py-2.5 rounded-xl bg-yellow-405 text-slate-900 bg-yellow-400 hover:bg-yellow-500 font-bold text-xs transition-all cursor-pointer border border-yellow-400 shadow-xs"
              >
                Պահպանել Միավորները
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
