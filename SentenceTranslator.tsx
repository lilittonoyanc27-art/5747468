import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

interface SentenceTranslatorProps {
  sentenceEs: string;
  sentenceHy: string;
  className?: string;
  asParagraph?: boolean;
}

export const SentenceTranslator: React.FC<SentenceTranslatorProps> = ({
  sentenceEs,
  sentenceHy,
  className = '',
  asParagraph = false,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const speakSpanish = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(sentenceEs);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <span
      onClick={() => setShowTranslation(!showTranslation)}
      className={`group relative cursor-pointer inline-block w-full text-left transition-colors rounded p-1.5 -m-1.5 ${
        showTranslation
          ? 'bg-amber-50/90 text-slate-900 border-l-4 border-amber-500 pl-2.5'
          : 'hover:bg-amber-50/50 border-b border-dashed border-slate-300'
      } ${className} ${asParagraph ? 'block my-2' : ''}`}
      title="Haz clic para ver la traducción en armenio / Սեղմիր հայերեն թարգմանության համար"
    >
      <span className="flex items-start justify-between gap-2">
        <span className="whitespace-pre-line leading-relaxed font-normal">{sentenceEs}</span>
        <button
          onClick={speakSpanish}
          aria-label="Escuchar pronunciación"
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-amber-700 rounded self-start shrink-0"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </span>

      {showTranslation && (
        <span className="block mt-2 text-sm font-armenian font-medium text-amber-950 bg-amber-100/90 px-3 py-2 rounded-lg shadow-2xs border border-amber-200 animate-fadeIn whitespace-pre-line">
          <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1 select-none">
            🇦🇲 Թարգմանություն հայերեն:
          </span>
          {sentenceHy}
        </span>
      )}
    </span>
  );
};

