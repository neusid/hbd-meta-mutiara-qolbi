import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Flame, Heart, RotateCcw } from 'lucide-react';
import { playCelebrationChime, playSoftPop } from '../utils/audio';

export default function BirthdayCake({ onCandleBlown }) {
  const [isBlown, setIsBlown] = useState(false);
  const [wishRevealed, setWishRevealed] = useState(false);

  const handleBlowCandle = () => {
    if (isBlown) return;
    setIsBlown(true);
    setWishRevealed(true);
    playCelebrationChime();

    // Trigger full screen confetti burst
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f472b6', '#fb7185', '#fda4af', '#fef08a']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#ec4899', '#f43f5e', '#a855f7', '#fbbf24']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#f472b6', '#fbcfe8', '#fecdd3', '#e0e7ff']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#fda4af', '#e879f9', '#f472b6']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#ffffff', '#f472b6', '#fbbf24']
    });

    if (onCandleBlown) onCandleBlown();
  };

  const handleResetCandle = () => {
    playSoftPop();
    setIsBlown(false);
    setWishRevealed(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Cake Container */}
      <div className="relative w-64 h-64 flex flex-col items-center justify-end select-none">
        
        {/* Number 20 Candle Section */}
        <div className="absolute top-4 z-20 flex items-center justify-center gap-3">
          {/* Candle 2 */}
          <div className="relative flex flex-col items-center cursor-pointer" onClick={handleBlowCandle}>
            {/* Flame */}
            {!isBlown ? (
              <div className="relative -mb-1 animate-flame">
                <div className="w-5 h-8 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full shadow-[0_0_15px_#f59e0b]"></div>
                <div className="absolute inset-0 w-2.5 h-5 mx-auto mt-2 bg-white/80 rounded-full blur-[1px]"></div>
              </div>
            ) : (
              <div className="relative -mb-1 h-8 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-smoke"></div>
              </div>
            )}
            {/* Candle Body '2' */}
            <div className="w-9 h-12 bg-gradient-to-b from-rose-200 to-rose-400 rounded-xl flex items-center justify-center shadow-md border-2 border-white text-rose-900 font-extrabold text-xl font-serif-title">
              2
            </div>
            {/* Stick */}
            <div className="w-1.5 h-3 bg-amber-100 rounded-b"></div>
          </div>

          {/* Candle 0 */}
          <div className="relative flex flex-col items-center cursor-pointer" onClick={handleBlowCandle}>
            {/* Flame */}
            {!isBlown ? (
              <div className="relative -mb-1 animate-flame" style={{ animationDelay: '0.2s' }}>
                <div className="w-5 h-8 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full shadow-[0_0_15px_#f59e0b]"></div>
                <div className="absolute inset-0 w-2.5 h-5 mx-auto mt-2 bg-white/80 rounded-full blur-[1px]"></div>
              </div>
            ) : (
              <div className="relative -mb-1 h-8 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-smoke" style={{ animationDelay: '0.15s' }}></div>
              </div>
            )}
            {/* Candle Body '0' */}
            <div className="w-9 h-12 bg-gradient-to-b from-rose-200 to-rose-400 rounded-xl flex items-center justify-center shadow-md border-2 border-white text-rose-900 font-extrabold text-xl font-serif-title">
              0
            </div>
            {/* Stick */}
            <div className="w-1.5 h-3 bg-amber-100 rounded-b"></div>
          </div>
        </div>

        {/* Top Tier Cake */}
        <div className="relative w-36 h-14 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 rounded-t-3xl shadow-sm border-t-2 border-white/80 flex items-center justify-center overflow-hidden">
          {/* Cream drips */}
          <div className="absolute top-0 inset-x-0 h-4 bg-white/95 rounded-b-2xl shadow-sm flex justify-around px-2">
            <span className="w-3 h-3 bg-white rounded-full -mt-0.5"></span>
            <span className="w-4 h-4 bg-white rounded-full -mt-0.5"></span>
            <span className="w-3 h-3 bg-white rounded-full -mt-0.5"></span>
            <span className="w-4 h-3.5 bg-white rounded-full -mt-0.5"></span>
          </div>
          {/* Pearl accents */}
          <div className="flex gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-white shadow-sm animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-rose-100 shadow-sm"></span>
            <span className="w-2 h-2 rounded-full bg-white shadow-sm animate-pulse"></span>
          </div>
        </div>

        {/* Bottom Tier Cake */}
        <div className="relative w-48 h-18 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 rounded-t-2xl shadow-md border-t-2 border-white/70 flex items-center justify-center overflow-hidden">
          {/* White icing wave */}
          <div className="absolute top-0 inset-x-0 h-4 bg-white/90 rounded-b-xl flex justify-between px-3">
            <span className="w-3.5 h-3.5 bg-white rounded-full"></span>
            <span className="w-3.5 h-4 bg-white rounded-full"></span>
            <span className="w-3.5 h-3.5 bg-white rounded-full"></span>
            <span className="w-3.5 h-4 bg-white rounded-full"></span>
            <span className="w-3.5 h-3.5 bg-white rounded-full"></span>
          </div>

          {/* Strawberry / Pearl decorations */}
          <div className="flex gap-3 mt-3 items-center">
            <span className="text-sm">🍓</span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-100 shadow-sm border border-white"></span>
            <span className="text-sm">🌸</span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-100 shadow-sm border border-white"></span>
            <span className="text-sm">🍓</span>
          </div>
        </div>

        {/* Cake Tray / Plate */}
        <div className="w-56 h-3 bg-gradient-to-r from-amber-100 via-white to-amber-100 rounded-full shadow-lg border border-amber-200/60 -mb-0.5"></div>
      </div>

      {/* Interactive Controls */}
      <div className="mt-4 flex flex-col items-center gap-2">
        {!isBlown ? (
          <button
            onClick={handleBlowCandle}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-rose-300/60 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-200 animate-bounce" />
            <span>Tiup Lilin Usia 20! 🎂</span>
            <Sparkles className="w-4 h-4 text-pink-200" />
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2 animate-fadeIn">
            <button
              onClick={handleResetCandle}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 border border-rose-200 text-rose-600 font-medium text-xs shadow-sm hover:bg-rose-50 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Nyalakan Lilin Kembali</span>
            </button>
          </div>
        )}

        <p className="text-xs text-rose-500/80 font-medium tracking-wide">
          {!isBlown ? 'Ketuk tombol atau lilin untuk meniup harapan ✨' : '✨ Lilin telah ditiup, doamu berlayar ke langit! ✨'}
        </p>
      </div>

      {/* Wish Pop-up Alert when Blown */}
      {wishRevealed && (
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-white border border-rose-200/80 shadow-md max-w-sm text-center animate-fadeIn transition-all">
          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-bold text-rose-900 font-serif-title">
            Make A Wish Come True! 🌟
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Selamat bertambah usia yang ke-20, <strong className="text-rose-700">Meta Mutiara Qolbi</strong>! Semoga setiap cita-cita, langkah masa depan, dan harapan terbaikmu senantiasa dimudahkan dan dikabulkan.
          </p>
        </div>
      )}
    </div>
  );
}
