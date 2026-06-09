import React, { useState, useMemo } from 'react';
import { GRAMMAR_DATA } from './data';
import { BookOpen, AlertCircle, Sparkles, HelpCircle, CheckCircle2, Search, ArrowRight, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TheorySectionProps {
  selectedSectionId: number;
  setSelectedSectionId: (id: number) => void;
}

export default function TheorySection({ selectedSectionId, setSelectedSectionId }: TheorySectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Find the selected section
  const activeSection = useMemo(() => {
    return GRAMMAR_DATA.find((s) => s.id === selectedSectionId) || GRAMMAR_DATA[0];
  }, [selectedSectionId]);

  // Handle global search across pronouns and Armenian description
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return GRAMMAR_DATA.filter((s) => {
      const matchTitle = s.title.toLowerCase().includes(query) || (s.titleEs && s.titleEs.toLowerCase().includes(query));
      const matchIntro = s.introduction?.toLowerCase().includes(query);
      const matchRows = s.tableRows?.some((row) => row.some((cell) => cell.toLowerCase().includes(query)));
      const matchExamples = s.examples?.some((ex) => ex.es.toLowerCase().includes(query) || ex.hy.toLowerCase().includes(query));
      return matchTitle || matchIntro || matchRows || matchExamples;
    });
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* LEFT COLUMN: Lesson List & Search */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/85 p-4">
          <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">
            Որոնում դերանուններում
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Մուտքագրեք (օր. lo, mí, ես)..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm transition-colors outline-none focus:border-yellow-500 focus:bg-white focus:ring-1 focus:ring-yellow-400"
            />
          </div>
          {searchQuery && (
            <div className="mt-2 text-xs text-slate-500 flex justify-between items-center">
              <span>Գտնվել է՝ {searchResults.length} թեմա</span>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-yellow-600 hover:underline font-bold cursor-pointer"
              >
                Մաքրել
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Lesson List */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/85 overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50 px-4 py-3.5 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Բոլոր թեմաները (1-16)
            </span>
            <BookOpen className="h-4 w-4 text-slate-450" />
          </div>

          <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
            {/* If there's a search query, show filtered. Otherwise show all */}
            {(searchQuery ? searchResults : GRAMMAR_DATA).map((section) => {
              const isActive = section.id === selectedSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setSelectedSectionId(section.id);
                    if (searchQuery) setSearchQuery(''); // reset search to see full category
                  }}
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-yellow-500/10 border-r-4 border-yellow-500' 
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full text-sm font-mono font-bold ${
                    isActive 
                      ? 'bg-yellow-500 text-slate-900' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {section.id}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`text-sm font-bold leading-tight ${isActive ? 'text-slate-900' : 'text-slate-750'}`}>
                      {section.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {section.titleEs}
                    </p>
                  </div>
                </button>
              );
            })}

            {searchQuery && searchResults.length === 0 && (
              <div className="p-8 text-center">
                <AlertCircle className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-500">Ոչինչ չի գտնվել</p>
                <p className="text-[10px] text-slate-400 mt-1">Փորձեք այլ բառ</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Theory Content Viewer */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.15 }}
            className="bg-white rounded-3xl shadow-xs border border-slate-200/85 p-6 sm:p-8"
          >
            {/* Header section badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/10 px-3 py-1.5 text-sm font-bold text-yellow-700">
                <Sparkles className="h-3.5 w-3.5 text-yellow-550" />
                Թեմա {activeSection.id}
              </span>
              <span className="text-sm font-mono text-slate-400">/ 16 Ընդհանուր</span>
            </div>

            {/* Main Title Section */}
            <div className="border-b border-slate-100 pb-5 mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-850 tracking-tight flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-red-500 rounded-full shrink-0" />
                {activeSection.title}
              </h2>
              {activeSection.titleEs && (
                <p className="font-mono text-base sm:text-lg font-bold text-yellow-600 mt-1.5 tracking-wide pl-4">
                  {activeSection.titleEs}
                </p>
              )}
            </div>

            {/* Intro text */}
            {activeSection.introduction && (
              <div className="bg-slate-50 border-l-4 border-slate-400 p-5 mb-6 rounded-r-xl">
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                  {activeSection.introduction}
                </p>
              </div>
            )}

            {/* Description or instruction */}
            {activeSection.description && (
              <p className="text-slate-650 text-sm sm:text-base mb-6 leading-relaxed">
                {activeSection.description}
              </p>
            )}

            {/* Main Grammar / Pronoun Table */}
            {activeSection.tableRows && activeSection.tableRows.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-slate-150 mb-8 shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80">
                      {activeSection.tableHeaders?.map((header, index) => (
                        <th key={index} className="px-5 py-3 text-sm font-bold text-slate-500 uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {activeSection.tableRows.map((row, index) => (
                      <tr 
                        key={index} 
                        className="hover:bg-slate-50/50 transition-colors duration-100"
                      >
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-5 py-3.5 text-sm sm:text-base">
                            {cellIdx === 0 ? (
                              <span className="font-mono font-bold text-red-600 bg-red-50 rounded-md px-2.5 py-1 border border-red-100/50">
                                {cell}
                              </span>
                            ) : (
                              <span className="text-slate-800 font-semibold">{cell}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Subsection Details (if exist, e.g. for conjugate examples) */}
            {activeSection.subsections && activeSection.subsections.map((subsec, subIdx) => (
              <div key={subIdx} className="border border-slate-100 rounded-2xl p-5 mb-8 bg-slate-50/30">
                <h4 className="text-sm font-bold text-slate-750 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  {subsec.title}
                </h4>
                {subsec.description && (
                  <p className="text-slate-500 text-xs sm:text-sm mb-3 leading-relaxed">{subsec.description}</p>
                )}
                {subsec.examples && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subsec.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="bg-white rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                        <span className="font-mono text-sm sm:text-base font-bold text-red-600">{ex.es}</span>
                        <span className="text-xs sm:text-sm text-slate-400 mt-1">{ex.hy}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Examples block */}
            {activeSection.examples && activeSection.examples.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <HelpCircle className="h-4.5 w-4.5 text-slate-450" />
                  Կիրառության օրինակներ (Ejemplos)
                </h3>
                <div className="space-y-3">
                  {activeSection.examples.map((ex, index) => (
                    <div 
                      key={index} 
                      className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4.5 rounded-xl border border-slate-100 bg-white hover:border-yellow-200/60 hover:bg-yellow-50/10 transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5.5 w-5.5 text-yellow-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-mono text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {ex.es}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            {ex.hy}
                          </p>
                        </div>
                      </div>
                      
                      {/* Arrow helper decorator */}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block text-yellow-500 pr-2">
                        <ArrowRight className="h-4.5 w-4.5" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips / Notes footer section */}
            {activeSection.tips && activeSection.tips.length > 0 && (
              <div className="rounded-2xl bg-yellow-50/40 border border-yellow-105 p-5 mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-800 flex items-center gap-1.5 mb-2.5">
                  <Lightbulb className="h-4.5 w-4.5 text-yellow-500" />
                  Շատ կարևոր է հիշել
                </h4>
                <div className="space-y-2.5">
                  {activeSection.tips.map((tip, index) => (
                    <p 
                      key={index} 
                      className="text-sm text-slate-700 leading-relaxed font-medium"
                    >
                      {tip}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  );
}
