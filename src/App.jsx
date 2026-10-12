import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Heart, 
  Crown, 
  Check, 
} from 'lucide-react';
import BirthdayCake from './components/BirthdayCake';
import SuratAmplop from './components/SuratAmplop';
import MilestoneJourney from './components/MilestoneJourney';
import SecretCards from './components/SecretCards';
import WishJar from './components/WishJar';
import FloatingControls from './components/FloatingControls';
import FloatingParticles from './components/FloatingParticles';
import { playCelebrationChime } from './utils/audio';

export default function App() {
  const [loveCount, setLoveCount] = useState(20);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  const handleSendLove = () => {
    playCelebrationChime();
    setLoveCount((prev) => prev + 1);

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#f43f5e', '#ec4899', '#fb7185'],
    });
  };

  const triggerSnackbar = (msg) => {
    setSnackbarText(msg);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3200);
  };

  return (
    <div className="min-h-screen bg-slate-900/90 sm:bg-slate-950 flex justify-center items-start sm:py-6 selection:bg-rose-200 selection:text-rose-900 relative overflow-x-hidden">
      
      {/* Background Ambience on Desktop */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Petals/Sparkles */}
      <FloatingParticles />

      {/* Top Floating Snackbar (Gojek / Neus Design Standard) */}
      {showSnackbar && (
        <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 animate-fadeIn pointer-events-none">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-xl shadow-emerald-900/40 border border-emerald-400/40 backdrop-blur-md pointer-events-auto">
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="text-xs font-semibold tracking-wide">
              {snackbarText}
            </span>
          </div>
        </div>
      )}

      {/* Mobile Frame Container */}
      <main className="w-full max-w-md min-h-screen sm:min-h-[920px] bg-gradient-to-b from-rose-50 via-white to-pink-50/60 sm:rounded-3xl sm:shadow-2xl sm:border border-rose-200/60 relative flex flex-col pb-28 pt-4 px-4 sm:px-5 space-y-6 z-10">
        
        {/* Top Status Capsule */}
        <header className="flex items-center justify-between pt-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 border border-rose-200/90 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-[11px] font-bold text-rose-800 tracking-wide">
              Spesial Dari Malik • 13 - 10 - 2006
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-rose-200 text-rose-600 text-[11px] font-bold shadow-xs">
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>Sweet 20th</span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center space-y-3 pt-2">
          {/* Pearl Avatar Emblem */}
          <div className="relative inline-block mx-auto">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-400 via-pink-300 to-amber-200 p-1 shadow-xl shadow-rose-300/50 animate-pearl-pulse">
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center border-2 border-white shadow-inner">
                <span className="text-2xl font-serif-title font-extrabold text-rose-600 tracking-tight">
                  MMQ
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                  Mutiara
                </span>
              </div>
            </div>
            {/* Sparkle badge */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-white flex items-center justify-center border-2 border-white shadow-md">
              <Sparkles className="w-4 h-4 text-amber-100" />
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
              Selamat Ulang Tahun Ke-20
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title tracking-tight leading-tight">
              Meta Mutiara Qolbi <span className="shimmer-text">✨</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed pt-1">
              Sebuah persembahan dan untaian doa tulus dari <strong className="text-rose-700">Malik</strong> untuk sang mutiara hati di hari paling bahagianya. 🌸
            </p>
          </div>
        </section>

        {/* Interactive Virtual Birthday Cake */}
        <section className="p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-white via-rose-50/50 to-white border border-rose-200/80 shadow-sm text-center">
          <BirthdayCake 
            onCandleBlown={() => triggerSnackbar('Lilin ditiup! Semoga semua doa Malik untuk Meta dikabulkan ✨')} 
          />
        </section>

        {/* Heartfelt Openable Envelope Letter From Malik */}
        <section className="w-full">
          <SuratAmplop />
        </section>

        {/* Milestone 20 Years Journey & Name Philosophy */}
        <section className="w-full">
          <MilestoneJourney />
        </section>

        {/* Secret Cards Reveal From Malik */}
        <section className="w-full">
          <SecretCards />
        </section>

        {/* Exclusive Prayers From Malik */}
        <section className="w-full">
          <WishJar />
        </section>

        {/* Love Shower Interactive Footer Card From Malik */}
        <section className="p-4 rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white text-center shadow-lg shadow-rose-300/50 space-y-3">
          <div className="w-10 h-10 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold font-serif-title">
              Detak Doa & Rasa Sayang Dari Malik 💖
            </h3>
            <p className="text-xs text-rose-100 mt-0.5">
              Sudah ada <strong className="text-white underline">{loveCount}</strong> tanda cinta & doa tulus yang dikirim Malik untuk Meta hari ini!
            </p>
          </div>
          <button
            onClick={handleSendLove}
            className="w-full py-2.5 px-4 rounded-2xl bg-white text-rose-600 font-bold text-xs shadow-md hover:bg-rose-50 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
            <span>Kirim Pelukan & Doa Dari Malik (+1 Cinta)</span>
          </button>
        </section>

        {/* Closing Footnote */}
        <footer className="text-center pt-2 pb-6 space-y-1">
          <p className="text-[11px] text-slate-400 font-medium">
            Dibuat dengan segenap cinta & doa khusus dari
          </p>
          <p className="text-xs font-bold text-rose-800 font-serif-title">
            Malik untuk Meta Mutiara Qolbi • 13 Oktober 2006
          </p>
          <p className="text-[10px] text-slate-400">
            Semoga harimu selalu bersinar dan penuh kebahagiaan ✨
          </p>
        </footer>

      </main>

      {/* Floating Bottom Action Bar */}
      <FloatingControls
        onShareNotice={() => triggerSnackbar('Tautan ucapan berhasil disalin! Kirimkan ke Meta 💌')}
      />

    </div>
  );
}
