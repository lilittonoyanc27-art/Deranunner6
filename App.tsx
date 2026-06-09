import React, { useState, useEffect } from 'react';
import TheorySection from './TheorySection';
import GamesDashboard from './GamesDashboard';
import { GRAMMAR_DATA, GAMES_LIST } from './data';
import { 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Heart, 
  Globe2, 
  Menu, 
  X, 
  Gamepad2, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'games'>('theory');
  const [selectedSectionId, setSelectedSectionId] = useState<number>(1);
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [streakPoints, setStreakPoints] = useState<number>(0);
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Sync scores and completed states
  useEffect(() => {
    const savedGeneralStreak = localStorage.getItem('pronombres_general_streak_score');
    if (savedGeneralStreak) {
      setStreakPoints(parseInt(savedGeneralStreak, 10));
    }
    const savedCompleted = localStorage.getItem('pronombres_completed_games');
    if (savedCompleted) {
      setCompletedGames(JSON.parse(savedCompleted));
    }

    // Custom event listener for when games get completed
    const handleStorageChange = () => {
      const updatedStreak = localStorage.getItem('pronombres_general_streak_score');
      if (updatedStreak) setStreakPoints(parseInt(updatedStreak, 10));
      const updatedCompleted = localStorage.getItem('pronombres_completed_games');
      if (updatedCompleted) setCompletedGames(JSON.parse(updatedCompleted));
    };

    window.addEventListener('storage', handleStorageChange);
    // Poll localstorage slightly to guarantee instant response in same-page navigation
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Update streak points
  const handleAddStreakPoints = (points: number) => {
    setStreakPoints((prev) => {
      const updated = prev + points;
      localStorage.setItem('pronombres_general_streak_score', updated.toString());
      return updated;
    });
    // Trigger immediate refresh of badges
    const savedCompleted = localStorage.getItem('pronombres_completed_games');
    if (savedCompleted) {
      setCompletedGames(JSON.parse(savedCompleted));
    }
  };

  const handleLessonSelect = (id: number) => {
    setSelectedSectionId(id);
    setActiveTab('theory');
    setIsMobileSidebarOpen(false);
  };

  const handleGameSelect = (id: string) => {
    setActiveGameId(id);
    setActiveTab('games');
    setIsMobileSidebarOpen(false);
  };

  const progressPercent = Math.round((completedGames.length / GAMES_LIST.length) * 105); // dynamic scaling indicator
  const displayProgressPercent = Math.min(progressPercent || 15, 100);

  // Sidebar content component to reuse in desktop and mobile drawer
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-slate-900 text-white select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="text-3xl animate-spin-slow">🇪🇸</span>
          <div>
            <h1 className="text-xl font-black tracking-tight text-yellow-400 font-display">
              Aprende Español
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
              Իսպաներենի Դասընթաց
            </p>
          </div>
        </div>
      </div>

      {/* Nav Link Areas */}
      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-800">
        
        {/* Theory Section */}
        <div>
          <div className="px-3 mb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-widest block">
              Տեսություն
            </span>
            <span className="text-xs text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
              16 Դաս
            </span>
          </div>

          <div className="space-y-0.5">
            {GRAMMAR_DATA.map((lesson) => {
              const isActive = activeTab === 'theory' && selectedSectionId === lesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonSelect(lesson.id)}
                  className={`w-full text-left rounded-lg transition-all text-sm flex items-center justify-between py-2 px-3 border-l-4 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/80 text-yellow-400 border-yellow-400 font-bold'
                      : 'border-transparent text-slate-350 hover:bg-slate-800/40 hover:text-white'
                  }`}
                >
                  <span className="truncate pr-2">
                    {lesson.id}. {lesson.title}
                  </span>
                  {isActive && <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full animate-ping shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Games Section */}
        <div>
          <div className="px-3 mb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-yellow-400 tracking-widest block">
              6 ԻՆՏԵՐԱԿՏԻՎ ԽԱՂԵՐ
            </span>
            <span className="text-xs text-yellow-500 font-mono bg-yellow-400/10 px-2 py-0.5 rounded">
              Play
            </span>
          </div>

          <div className="space-y-0.5">
            {GAMES_LIST.map((game, idx) => {
              const isPlayingThis = activeTab === 'games' && activeGameId === game.id;
              const isCompleted = completedGames.includes(game.id);
              return (
                <button
                  key={game.id}
                  onClick={() => handleGameSelect(game.id)}
                  className={`w-full text-left rounded-lg transition-all text-sm flex items-center justify-between py-2.5 px-3 border-l-4 cursor-pointer ${
                    isPlayingThis
                      ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400 font-bold'
                      : 'border-transparent text-slate-350 hover:bg-slate-800/40 hover:text-yellow-400/90'
                  }`}
                >
                  <span className="truncate pr-1">
                    {idx + 1}. {game.title.replace(/^\d+\.\s*/, '')}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    isPlayingThis && <span className="h-1.5 w-1.5 bg-yellow-400 rounded-full shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </nav>

      {/* Progress & Stats Footer */}
      <div className="p-5 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 shrink-0 text-yellow-400">
            <Trophy className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-bold text-slate-300">Իմ առաջընթացը</p>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
              <span>{completedGames.length} / 6 Խաղ</span>
              <span className="font-mono text-yellow-400 font-bold">{streakPoints} ✨</span>
            </div>
            
            {/* ProgressBar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${displayProgressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen flex bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* 1. DESKTOP SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex-col flex-shrink-0 shadow-2xl hidden lg:flex h-full">
        <SidebarContent />
      </aside>

      {/* 2. MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            {/* Menu container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-72 max-w-[85vw] h-full flex flex-col z-10 shadow-2xl"
            >
              <SidebarContent />
              {/* Close button inside drawer absolute */}
              <button 
                onClick={() => setIsMobileSidebarOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 p-1 bg-slate-800 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. MAIN CONTAINER STAGE */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Sleek Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-4 sm:px-6 md:px-8 flex-shrink-0 shadow-xs relative z-40">
          
          <div className="flex items-center gap-3">
            {/* Hamburger toggle on mobile */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
            >
              <Menu className="h-5.5 w-5.5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-2xl">🇪🇸</span>
              <h2 className="font-bold text-slate-750 text-base sm:text-lg tracking-tight font-display">
                {activeTab === 'theory' 
                  ? `Դաս ${selectedSectionId}. ${GRAMMAR_DATA[selectedSectionId - 1]?.title || 'Տեսություն'}` 
                  : `Խաղային Մարտահրավեր`
                }
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            {/* Quick action buttons / tab selectors */}
            <div className="flex rounded-lg bg-slate-100 p-1">
              <button
                onClick={() => setActiveTab('theory')}
                className={`py-2 px-3.5 rounded text-sm font-bold cursor-pointer transition-all ${
                  activeTab === 'theory' 
                    ? 'bg-white text-slate-800 shadow-xs' 
                    : 'text-slate-550 hover:text-slate-850'
                }`}
              >
                Տեսություն
              </button>
              <button
                onClick={() => setActiveTab('games')}
                className={`py-2 px-3.5 rounded text-sm font-bold cursor-pointer transition-all ${
                  activeTab === 'games' 
                    ? 'bg-white text-slate-800 shadow-xs' 
                    : 'text-slate-550 hover:text-slate-850'
                }`}
              >
                Խաղախցիկ
              </button>
            </div>

            {/* Score pill */}
            <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-101 rounded-lg px-2.5 py-1 text-slate-800">
              <Award className="h-4 w-4 text-amber-500" />
              <span className="font-mono font-bold text-xs sm:text-sm">
                {streakPoints} ✨
              </span>
            </div>
          </div>

        </header>

        {/* Dynamic Display Area (Scrollable pane) */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6 max-w-7xl w-full mx-auto">
          
          {/* Subtitle / Path bar block */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-4">
            <div>
              <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest bg-yellow-100/50 px-2.5 py-1 rounded-md">
                {activeTab === 'theory' ? 'Իսպաներենի Քերականություն' : 'Գիտելիքի Ստուգում'}
              </span>
              <h3 className="font-display font-extrabold text-slate-800 text-xl sm:text-2xl mt-1.5">
                {activeTab === 'theory' 
                  ? GRAMMAR_DATA[selectedSectionId - 1]?.titleEs || 'Pronombres'
                  : 'Զարգացրե՛ք Ձեր Հմտությունները խաղալով'
                }
              </h3>
            </div>
            
            {activeTab === 'theory' && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleLessonSelect(Math.max(1, selectedSectionId - 1))}
                  className="px-3.5 py-2 bg-white hover:bg-slate-50 rounded-lg text-sm font-bold border border-slate-200/80 cursor-pointer disabled:opacity-40"
                  disabled={selectedSectionId === 1}
                >
                  Նախորդը
                </button>
                <button
                  onClick={() => handleLessonSelect(Math.min(16, selectedSectionId + 1))}
                  className="px-3.5 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg text-sm font-bold border border-yellow-400/80 cursor-pointer disabled:opacity-40"
                  disabled={selectedSectionId === 16}
                >
                  Հաջորդը
                </button>
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab === 'theory' ? `t-${selectedSectionId}` : `g-${activeGameId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="pb-20"
            >
              {activeTab === 'theory' ? (
                <TheorySection 
                  selectedSectionId={selectedSectionId} 
                  setSelectedSectionId={setSelectedSectionId} 
                />
              ) : (
                <GamesDashboard 
                  addStreakPoints={handleAddStreakPoints}
                  activeGameId={activeGameId}
                  setActiveGameId={setActiveGameId}
                />
              )}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Sleek footer */}
        <footer className="h-10 bg-slate-900 border-t border-slate-800 px-6 sm:px-8 flex items-center justify-between text-[10px] text-slate-400 flex-shrink-0 select-none">
          <div>© {new Date().getFullYear()} Spanish Learning Hub — Sleek System</div>
          <div className="flex items-center gap-1">
            <span>Բոլոր դերանունները մեկ հավելվածում</span>
            <Heart className="h-2.5 w-2.5 text-rose-500 fill-rose-500" />
          </div>
        </footer>

      </div>

    </div>
  );
}
