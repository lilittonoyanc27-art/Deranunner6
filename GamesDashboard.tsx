import React, { useState, useEffect } from 'react';
import { GAMES_LIST } from './data';
import { GameInfo } from './types';
import GameMatching from './GameMatching';
import GameQuizEngine from './GameQuizEngine';
import { Gamepad2, Award, ArrowLeft, Trophy, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface GamesDashboardProps {
  addStreakPoints: (points: number) => void;
  activeGameId: string | null;
  setActiveGameId: (id: string | null) => void;
}

export default function GamesDashboard({ addStreakPoints, activeGameId, setActiveGameId }: GamesDashboardProps) {
  const [highScores, setHighScores] = useState<Record<string, number>>({});
  const [completedGames, setCompletedGames] = useState<string[]>([]);

  // Load scores and achievements from local storage on mount
  useEffect(() => {
    const savedScores = localStorage.getItem('pronombres_high_scores');
    const savedCompleted = localStorage.getItem('pronombres_completed_games');
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }
    if (savedCompleted) {
      setCompletedGames(JSON.parse(savedCompleted));
    }
  }, [activeGameId]);

  const activeGame = GAMES_LIST.find((g) => g.id === activeGameId) || null;

  const handleGameWin = (points: number) => {
    if (!activeGameId) return;

    // Update global streak/score
    addStreakPoints(points);

    // Save game specific highscore
    const prevHS = highScores[activeGameId] || 0;
    const newHS = Math.max(prevHS, points);
    const updatedScores = { ...highScores, [activeGameId]: newHS };
    setHighScores(updatedScores);
    localStorage.setItem('pronombres_high_scores', JSON.stringify(updatedScores));

    // Mark as completed
    if (!completedGames.includes(activeGameId)) {
      const updatedCompleted = [...completedGames, activeGameId];
      setCompletedGames(updatedCompleted);
      localStorage.setItem('pronombres_completed_games', JSON.stringify(updatedCompleted));
    }
  };

  const handleGameLoss = () => {
    // Loss callback, can handle if needed
  };

  const handleGoBack = () => {
    setActiveGameId(null);
  };

  const totalPoints = (Object.values(highScores) as number[]).reduce((a, b) => a + b, 0);
  const completedPercentage = Math.round((completedGames.length / GAMES_LIST.length) * 100);

  return (
    <div className="flex flex-col gap-8">
      
      {/* If playing a game, show matching module or quiz engine */}
      {activeGame ? (
        <div className="bg-white rounded-3xl shadow-xs border border-slate-200/85 p-6 sm:p-8">
          {/* Active game header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 rounded-xl border border-slate-200 hover:border-yellow-200 px-4 py-2 text-xs font-bold text-slate-600 hover:text-yellow-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Հետ գնալ խաղացանկ
            </button>

            <div className="sm:text-right flex items-center sm:items-end gap-3 sm:flex-col">
              <span className="w-1.5 h-6 bg-red-500 rounded-full shrink-0 sm:hidden" />
              <div>
                <span className="block text-[10px] font-mono font-bold text-yellow-550 uppercase tracking-widest leading-none">
                  {activeGame.subtitle}
                </span>
                <h2 className="font-display font-black text-slate-800 text-base sm:text-lg leading-snug mt-0.5">
                  {activeGame.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Render the selected game */}
          {activeGame.id === 'pronoun-match' ? (
            <GameMatching onWin={handleGameWin} onLoss={handleGameLoss} />
          ) : (
            <GameQuizEngine
              gameId={activeGame.id}
              gameTitle={activeGame.title}
              onWin={handleGameWin}
              onLoss={handleGameLoss}
            />
          )}
        </div>
      ) : (
        /* If not in-game, render dashboard hub */
        <>
          {/* Static dashboard panel showing summary statistic badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 flex items-center gap-4 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600 shrink-0">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Ընդհանուր Միավորներ
                </span>
                <span className="font-mono font-black text-slate-800 text-lg">
                  {totalPoints} ✨
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 flex items-center gap-4 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/60 text-emerald-600 shrink-0">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Յուրացում (%)
                </span>
                <span className="font-mono font-black text-slate-800 text-lg">
                  {completedPercentage}%
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 flex items-center gap-4 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-650 shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Նվաճումներ (Badges)
                </span>
                <span className="font-mono font-bold text-slate-800 text-xs">
                  {completedGames.length >= 6 ? '🏆 Դերանունների Տիրակալ' : `${completedGames.length} / 6 ավարտված`}
                </span>
              </div>
            </div>
          </div>

          {/* Heading intro text */}
          <div className="mt-2 text-center max-w-lg mx-auto">
            <Gamepad2 className="h-8 w-8 text-yellow-500 mx-auto mb-2 animate-bounce" />
            <h2 className="font-display text-xl sm:text-2xl font-black text-slate-850 tracking-tight">
              Ինտերակտիվ Խաղախցիկ
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1.5">
              Ամրապնդե՛ք ձեր ստացած տեսական գիտելիքները իսպաներեն դերանունների մասին հետևյալ 6 յուրօրինակ խաղ-մոդուլների միջոցով։
            </p>
          </div>

          {/* Games list container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES_LIST.map((game) => {
              const gameHS = highScores[game.id] || 0;
              const isCompleted = completedGames.includes(game.id);

              return (
                <motion.div
                  key={game.id}
                  whileHover={{ y: -3 }}
                  className={`relative flex flex-col justify-between bg-white rounded-2xl border p-5 transition-all duration-200 group ${
                    isCompleted 
                      ? 'border-emerald-200 shadow-sm shadow-emerald-50/10' 
                      : 'border-slate-200 hover:border-yellow-200/80 shadow-xs hover:shadow-sm'
                  }`}
                >
                  <div>
                    {/* Badge header */}
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        game.difficulty === 'Հեշտ' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : game.difficulty === 'Միջին'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {game.difficulty}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-[9px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle className="h-3 w-3" /> Անցած
                        </span>
                      )}
                    </div>

                    {/* Game title and details */}
                    <span className="block text-[9px] font-mono font-bold text-yellow-600 uppercase tracking-widest">
                      {game.subtitle}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug mt-0.5 group-hover:text-yellow-600 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal mt-2">
                      {game.description}
                    </p>
                  </div>

                  {/* High score + play CTA footer bar */}
                  <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-bold text-slate-450 uppercase tracking-widest mb-0.5 leading-none">
                        Ռեկորդ (Record)
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-700">
                        {gameHS ? `${gameHS} 🌟` : '—'}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveGameId(game.id)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      Խաղալ
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      )}

    </div>
  );
}
