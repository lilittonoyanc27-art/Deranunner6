import React, { useState, useEffect, useMemo } from 'react';
import { PRONOUN_MATCH_CARDS } from './data';
import { RefreshCw, CheckCircle2, AlertCircle, Award, ArrowRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface GameMatchingProps {
  onWin: (points: number) => void;
  onLoss: () => void;
}

interface CardItem {
  id: string;
  word: string;
  lang: 'es' | 'hy';
  pairId: number; // to identify which matches with which
}

export default function GameMatching({ onWin, onLoss }: GameMatchingProps) {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selected, setSelected] = useState<CardItem[]>([]);
  const [completedPairs, setCompletedPairs] = useState<number[]>([]);
  const [wrongSelections, setWrongSelections] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  // Initialize game cards (draw 6 random pairs from the database)
  const initializeGame = () => {
    // Shuffle and pick 6 pairs
    const shuffledPairs = [...PRONOUN_MATCH_CARDS].sort(() => 0.5 - Math.random());
    const selectedPairs = shuffledPairs.slice(0, 6);

    const cardList: CardItem[] = [];
    selectedPairs.forEach((pair, idx) => {
      cardList.push({
        id: `es-${idx}`,
        word: pair.es,
        lang: 'es',
        pairId: idx
      });
      cardList.push({
        id: `hy-${idx}`,
        word: pair.hy,
        lang: 'hy',
        pairId: idx
      });
    });

    // Shuffle those 12 cards
    setCards(cardList.sort(() => 0.5 - Math.random()));
    setSelected([]);
    setCompletedPairs([]);
    setWrongSelections([]);
    setScore(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card: CardItem) => {
    // Ignore clicked if already matched
    if (completedPairs.includes(card.pairId)) return;
    
    // Ignore if already selected
    if (selected.some((s) => s.id === card.id)) return;

    // Reset wrong highlight immediately on new guess
    if (wrongSelections.length > 0) {
      setWrongSelections([]);
    }

    const newSelected = [...selected, card];
    
    // Limits selection to 2, must be of different languages (one ES, one HY)
    if (selected.length === 1) {
      const first = selected[0];
      setMoves((m) => m + 1);

      if (first.pairId === card.pairId && first.lang !== card.lang) {
        // MATCH!
        setCompletedPairs((prev) => [...prev, card.pairId]);
        setScore((s) => s + 20);
        setSelected([]);
        
        // If all matched (6 pairs matched)
        if (completedPairs.length + 1 === 6) {
          onWin(100);
        }
      } else {
        // MISMATCH!
        setSelected(newSelected);
        setWrongSelections([first.id, card.id]);
        
        // Auto-deselect after 1 second
        setTimeout(() => {
          setSelected([]);
          setWrongSelections([]);
        }, 1000);
      }
    } else {
      setSelected([card]);
    }
  };

  const activeMatchesCount = completedPairs.length;
  const isGameFinished = activeMatchesCount === 6;

  return (
    <div className="flex flex-col gap-6">
      
      {/* HUD Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <Award className="h-5.5 w-5.5 text-yellow-500 animate-bounce" />
          <div>
            <span className="block text-xs font-bold text-slate-450 uppercase tracking-widest leading-none">
              Գումարային Միավոր
            </span>
            <span className="font-mono font-bold text-slate-850 text-base sm:text-lg">
              +{score} միավոր
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-xs font-bold text-slate-450 uppercase tracking-widest leading-none">
              Քայլեր
            </span>
            <span className="font-mono font-bold text-slate-800 text-sm">
              {moves}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-xs font-bold text-slate-455 uppercase tracking-widest leading-none">
              Ավարտված է
            </span>
            <span className="font-mono font-bold text-yellow-600 text-sm">
              {activeMatchesCount}/6 զույգ
            </span>
          </div>
        </div>

        <button
          onClick={initializeGame}
          className="flex items-center gap-1.5 rounded-xl bg-white border border-slate-250 hover:border-yellow-500 hover:text-yellow-600 px-4 py-2 text-xs sm:text-sm font-bold text-slate-655 transition-colors cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Վերագործարկել
        </button>
      </div>

      {/* Goal Instruction */}
      <div className="bg-yellow-50 text-slate-800 border border-yellow-101 p-4.5 rounded-xl flex items-start gap-2.5">
        <HelpCircle className="h-5.5 w-5.5 text-yellow-505 shrink-0 mt-0.5" />
        <p className="text-sm sm:text-base text-slate-705 font-medium leading-relaxed">
          <strong>Ինչպե՞ս խաղալ՝</strong> Կտտացրեք իսպաներեն դերանունին, ապա դրա հայերեն թարգմանությանը (կամ հակառակը)։ Զույգը ճիշտ գտնելուց հետո քարտերը կմարվեն։ Գտեք բոլոր 6 զույգերը հաղթելու համար։
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-2">
        {cards.map((card) => {
          const isSelected = selected.some((s) => s.id === card.id);
          const isMatched = completedPairs.includes(card.pairId);
          const isWrong = wrongSelections.includes(card.id);

          return (
            <motion.button
              key={card.id}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: isMatched ? 1 : 1.02 }}
              onClick={() => handleCardClick(card)}
              disabled={isMatched}
              className={`relative h-26 sm:h-30 rounded-2xl border text-center flex flex-col items-center justify-center p-3.5 transition-all duration-200 cursor-pointer ${
                isMatched
                  ? 'bg-slate-50 border-slate-200 opacity-40 shadow-none'
                  : isWrong
                  ? 'bg-rose-50 border-rose-300 ring-2 ring-rose-200 text-rose-800'
                  : isSelected
                  ? 'bg-yellow-50 border-yellow-400 ring-2 ring-yellow-250 text-yellow-950'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 text-slate-800 hover:shadow-xs'
              }`}
            >
              {/* Language Marker badge */}
              {!isMatched && (
                <span className={`absolute top-2 right-2 text-[10px] sm:text-xs font-mono leading-none px-1.5 py-0.5 rounded-md ${
                  card.lang === 'es' ? 'bg-red-50 text-red-700 font-bold' : 'bg-slate-100 text-slate-600'
                }`}>
                  {card.lang.toUpperCase()}
                </span>
              )}

              {/* Word display */}
              <span className={`font-display font-black leading-tight ${
                card.lang === 'es' ? 'text-base sm:text-lg text-red-650' : 'text-sm sm:text-base text-slate-755'
              }`}>
                {card.word}
              </span>

              {isMatched && (
                <CheckCircle2 className="h-4 w-4 text-emerald-500 absolute bottom-2 right-2" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Win Modal Card inside block */}
      {isGameFinished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-emerald-50 border border-emerald-150 p-6.5 rounded-3xl mt-4 text-center shadow-xs"
        >
          <Award className="h-11 w-11 text-emerald-600 mx-auto mb-3 animate-bounce" />
          <h3 className="font-display text-xl font-bold text-emerald-950">Գերազանց աշխատանք: 🏆</h3>
          <p className="text-sm sm:text-base text-emerald-850 mt-1.5 max-w-sm mx-auto">
            Դուք հաջողությամբ գտաք բոլոր իսպաներեն դերանունների զույգերը {moves} քայլով և վաստակեցիք 100 միավոր։
          </p>
        </motion.div>
      )}

    </div>
  );
}
