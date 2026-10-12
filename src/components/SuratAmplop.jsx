import React, { useState } from 'react';
import { Mail, Heart, Sparkles, X, Check } from 'lucide-react';
import { playSoftPop, playCelebrationChime } from '../utils/audio';

export default function SuratAmplop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    if (!isOpen) {
      playCelebrationChime();
    } else {
      playSoftPop();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Closed Envelope Teaser */}
      {!isOpen ? (
        <div 
          onClick={toggleEnvelope}
          className="w-full max-w-sm p-5 rounded-3xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-white border border-rose-200/90 shadow-lg shadow-rose-200/40 cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
        >
          {/* Decorative Sparkle Background */}
          <div className="absolute top-2 right-2 text-rose-300 opacity-60">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <div className="flex items-center gap-4">
            {/* Wax Seal Icon */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/30 group-hover:rotate-6 transition-transform">
              <Mail className="w-7 h-7 text-white" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
                <Heart className="w-3 h-3 text-rose-700 fill-rose-700" />
              </div>
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-rose-200/60 text-rose-800 text-[10px] font-bold uppercase tracking-wider">
                  Surat Pribadi
                </span>
                <span className="text-[11px] text-rose-500 font-medium">Khusus untuk Meta</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mt-1 font-serif-title">
                Sebuah Surat Dari Lubuk Hati 💌
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Ketuk di sini untuk membuka amplop & membaca pesan...
              </p>
            </div>
          </div>

          {/* Bottom pulse bar */}
          <div className="mt-3 pt-3 border-t border-rose-100 flex items-center justify-between text-xs text-rose-600 font-semibold">
            <span>Buka Surat Ulang Tahun</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ) : (
        /* Open Letter Full View */
        <div className="w-full max-w-sm rounded-3xl bg-white/95 border border-rose-200 shadow-2xl p-6 relative animate-fadeIn transition-all">
          {/* Close / Fold Button */}
          <button
            onClick={toggleEnvelope}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup surat"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Letter Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              13 Oktober 2026 • 20 Tahun Penuh Makna
            </span>
          </div>

          <h3 className="text-xl font-bold text-rose-950 font-serif-title leading-snug">
            Untuk Sang Mutiara Hati,<br />
            <span className="text-rose-600">Meta Mutiara Qolbi ✨</span>
          </h3>

          <div className="w-12 h-0.5 bg-gradient-to-r from-rose-500 to-pink-300 my-3"></div>

          {/* Letter Body */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans text-left">
            <p>
              <span className="font-handwriting text-2xl text-rose-600 font-bold mr-1">Halo Meta,</span>
              Selamat menginjak usia yang ke-20 tahun!
            </p>

            <p>
              Dua puluh tahun yang lalu, pada tanggal <strong className="text-rose-800">13 Oktober 2006</strong>, semesta menyambut lahirnya seseorang yang kelak tumbuh dengan nama yang begitu anggun dan berharga: <em>Mutiara Qolbi</em> — mutiara yang menghuni relung hati.
            </p>

            <p>
              Mutiara di lautan tidak tercipta dalam semalam. Ia ditempa oleh waktu, butiran demi butiran pasir yang diselimuti kelembutan, hingga akhirnya memancarkan kilau murni yang tak ternilai harganya. Begitu pula perjalanan hidupmu hingga hari ini: setiap senyuman, tawa, bahkan lelah yang pernah kau lalui telah membentukmu menjadi sosok perempuan yang kuat, memesona, dan berharga.
            </p>

            <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-100 italic text-rose-900 font-serif-title text-xs leading-normal">
              "Semoga di usia ke-20 ini, langkah kakimu selalu dipenuhi kemudahan, hatimu senantiasa dipeluk ketenangan, air matamu selalu berganti senyum kemenangan, dan setiap doamu didekap hangat oleh ridho Tuhan."
            </div>

            <p>
              Terima kasih telah hadir dan menebarkan kehangatan di dunia ini. Jangan pernah merasa sendiri, karena kebaikan yang selalu kamu tabur akan selalu kembali kepadamu dalam bentuk berkah yang berlipat ganda.
            </p>

            <p className="pt-2 font-medium text-slate-800">
              Selamat ulang tahun, Meta Mutiara Qolbi. Tetaplah menjadi mutiara yang bersinar dengan caramu sendiri! 🤍✨
            </p>
          </div>

          {/* Signoff */}
          <div className="mt-5 pt-3 border-t border-rose-100 flex items-center justify-between text-xs text-rose-700">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="font-semibold">Dengan Doa Tulus & Sayang</span>
            </div>
            <button
              onClick={toggleEnvelope}
              className="text-slate-400 hover:text-rose-600 text-[11px] underline cursor-pointer"
            >
              Lipat Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
