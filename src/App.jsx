import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Crown, Check, Volume2, VolumeX } from 'lucide-react';
import BirthdayCake from './components/BirthdayCake';
import FloatingParticles from './components/FloatingParticles';
import { toggleMusicBoxMelody, playCelebrationChime } from './utils/audio';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);

  const handleToggleMusic = () => {
    const newState = toggleMusicBoxMelody((active) => {
      setIsPlayingMusic(active);
    });
    setIsPlayingMusic(newState);
  };

  const handleCandleBlown = () => {
    setCandleBlown(true);
    playCelebrationChime();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#ec4899', '#fde047', '#a855f7'],
    });
  };

  return (
    <div className="min-h-screen bg-slate-900/90 sm:bg-slate-950 flex justify-center items-start sm:py-8 selection:bg-rose-200 selection:text-rose-900 relative overflow-x-hidden">
      
      {/* Background Ambience on Desktop */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Petals / Sparkles */}
      <FloatingParticles />

      {/* Mobile Frame Container */}
      <main className="w-full max-w-md min-h-screen sm:min-h-[900px] bg-gradient-to-b from-rose-50 via-white to-pink-50/70 sm:rounded-3xl sm:shadow-2xl sm:border border-rose-200/70 relative flex flex-col pt-5 pb-12 px-5 space-y-6 z-10 text-center">
        
        {/* Top Header Bar */}
        <header className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/90 border border-rose-200 text-rose-800 text-[11px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span>13 • 10 • 2006</span>
          </div>

          {/* Music Box Toggle Button */}
          <button
            onClick={handleToggleMusic}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              isPlayingMusic
                ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                : 'bg-white/90 text-rose-700 border-rose-200 hover:bg-rose-50'
            }`}
            title={isPlayingMusic ? 'Jeda Musik' : 'Putar Musik Box'}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>Musik Aktif</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Putar Musik</span>
              </>
            )}
          </button>
        </header>

        {/* Title & Pearl Avatar Header */}
        <section className="space-y-3 pt-1">
          <div className="relative inline-block mx-auto">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-400 via-pink-300 to-amber-200 p-1 shadow-lg shadow-rose-300/40 animate-pearl-pulse">
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center border-2 border-white">
                <span className="text-xl font-serif-title font-extrabold text-rose-600 tracking-tight">
                  MMQ
                </span>
                <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase">
                  Mutiara
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
              <Crown className="w-3.5 h-3.5 text-amber-200" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-rose-500">
              Selamat Ulang Tahun Ke-20
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title tracking-tight leading-tight">
              Meta Mutiara Qolbi <span className="shimmer-text">✨</span>
            </h1>
          </div>
        </section>

        {/* Interactive Birthday Cake Animation */}
        <section className="p-5 rounded-3xl bg-white border border-rose-200/80 shadow-md">
          <BirthdayCake onCandleBlown={handleCandleBlown} />
        </section>

        {/* Paragraf Ucapan & Doa Tulus Dari Malik */}
        <section className="p-6 rounded-3xl bg-white border border-rose-200/80 shadow-md text-left space-y-4 relative">
          <div className="flex items-center justify-between border-b border-rose-100 pb-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <h2 className="text-sm font-bold text-slate-800 font-serif-title">
                Ucapan & Doa Dari Malik
              </h2>
            </div>
            <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
              13 Oktober 2026
            </span>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            <p>
              <span className="font-handwriting text-2xl text-rose-600 font-bold mr-1">Halo Meta,</span>
              selamat ulang tahun yang ke-20 ya.
            </p>

            <p>
              Tepat di tanggal <strong className="text-rose-800">13 Oktober 2006</strong>, dua puluh tahun yang lalu, kamu hadir ke dunia ini membawa nama yang begitu indah: <em>Meta Mutiara Qolbi</em>. Dan bagiku, kamu benar-benar cerminan dari namamu — sebuah mutiara hati yang berharga, berhati tulus, dan selalu membawa ketenangan bagi siapa pun yang ada di dekatmu.
            </p>

            <p>
              Terima kasih sudah bertahan, bertumbuh, dan menjadi sosok perempuan yang sekuat dan sebaik sekarang. Aku tahu perjalanan hidup dan setiap proses menuju usia 20 tidak selalu mudah, tapi kamu selalu mampu melewatinya dengan senyuman dan ketabahanmu yang luar biasa. Aku sangat bangga padamu, Meta.
            </p>

            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200/80 italic text-rose-900 font-serif-title text-xs leading-relaxed">
              "Di usiamu yang genap 20 tahun ini, doaku untukmu selalu tulus: semoga Allah senantiasa melimpahkan kesehatan untukmu, melapangkan jalanmu dalam meraih setiap impian dan cita-cita, menjauhkanmu dari segala kesedihan, serta selalu memeluk hatimu dengan kedamaian dan kebahagiaan yang melimpah."
            </div>

            <p>
              Semoga senyuman manismu tidak pernah pudar oleh apa pun, dan semoga setiap langkahmu ke depan selalu dipenuhi berkah, kemudahan, dan perlindungan dari Tuhan.
            </p>

            <p className="font-medium text-slate-800 pt-1">
              Selamat ulang tahun ke-20, Meta Mutiara Qolbi. Tetaplah bersinar dengan caramu sendiri.
            </p>
          </div>

          {/* Tanda Tangan Malik */}
          <div className="pt-4 border-t border-rose-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-medium">
              Dengan segenap doa tulus,
            </span>
            <span className="font-handwriting text-2xl font-bold text-rose-700">
              — Malik 💖
            </span>
          </div>
        </section>

        {/* Footer Sederhana & Elegan */}
        <footer className="pt-2 text-center space-y-1">
          <p className="text-[11px] text-slate-400 font-medium">
            Spesial dari Malik untuk Meta Mutiara Qolbi
          </p>
          <p className="text-[10px] text-rose-400 font-semibold tracking-wider uppercase">
            13 • 10 • 2006 — 13 • 10 • 2026
          </p>
        </footer>

      </main>

    </div>
  );
}
