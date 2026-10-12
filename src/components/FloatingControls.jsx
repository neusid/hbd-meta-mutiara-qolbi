import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Share2, Check, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toggleMusicBoxMelody, playCelebrationChime, playSoftPop } from '../utils/audio';

export default function FloatingControls({ onShareNotice }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggleMusic = () => {
    const newState = toggleMusicBoxMelody((active) => {
      setIsPlaying(active);
    });
    setIsPlaying(newState);
  };

  const handleBurstConfetti = () => {
    playCelebrationChime();
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.85 },
      colors: ['#f472b6', '#fb7185', '#ec4899', '#fde047', '#a855f7'],
    });
  };

  const handleShare = async () => {
    playSoftPop();
    const shareData = {
      title: 'Happy 20th Birthday Meta Mutiara Qolbi! ✨',
      text: 'Selamat ulang tahun ke-20 untuk Meta Mutiara Qolbi! 🎂 Buka kartu ucapan spesial untukmu di sini:',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (onShareNotice) onShareNotice();
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex items-center justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-xl shadow-rose-300/30 pointer-events-auto">
        {/* Music Player Button */}
        <button
          onClick={handleToggleMusic}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            isPlaying
              ? 'bg-rose-500 text-white shadow-sm'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
          }`}
          title={isPlaying ? 'Jeda Musik Box' : 'Putar Musik Box Ulang Tahun'}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>Musik On</span>
              {/* Animated mini equalizer */}
              <span className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-0.5 h-3 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-0.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Musik</span>
            </>
          )}
        </button>

        {/* Confetti Cannon Button */}
        <button
          onClick={handleBurstConfetti}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition-all cursor-pointer active:scale-95"
          title="Letupkan Kembang Api & Konfeti"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Kembang Api 🎉</span>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer active:scale-95"
          title="Salin Tautan Ucapan"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Bagikan</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
