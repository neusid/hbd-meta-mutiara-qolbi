import React, { useState } from 'react';
import { Mail, Heart, Sparkles, X } from 'lucide-react';
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
          className="w-full max-w-sm p-5 rounded-3xl bg-gradient-to-br from-rose-100/95 via-pink-50 to-white border border-rose-200/90 shadow-lg shadow-rose-200/40 cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
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
                <span className="px-2 py-0.5 rounded-full bg-rose-200/70 text-rose-900 text-[10px] font-bold uppercase tracking-wider">
                  Surat Pribadi
                </span>
                <span className="text-[11px] text-rose-600 font-semibold">Dari Malik untuk Meta</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mt-1 font-serif-title">
                Sebuah Surat Dari Lubuk Hatiku 💌
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Ketuk di sini untuk membaca isi pesanku untukmu...
              </p>
            </div>
          </div>

          {/* Bottom pulse bar */}
          <div className="mt-3 pt-3 border-t border-rose-100 flex items-center justify-between text-xs text-rose-600 font-semibold">
            <span>Buka Surat dari Malik</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ) : (
        /* Open Letter Full View */
        <div className="w-full max-w-sm rounded-3xl bg-white border border-rose-200 shadow-2xl p-6 relative animate-fadeIn transition-all text-left">
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
            Untuk Meta Mutiara Qolbi,<br />
            <span className="text-rose-600 font-handwriting text-2xl font-bold">Mutiara Terindah Dalam Hatiku ✨</span>
          </h3>

          <div className="w-12 h-0.5 bg-gradient-to-r from-rose-500 to-pink-300 my-3"></div>

          {/* Letter Body */}
          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            <p>
              <span className="font-handwriting text-2xl text-rose-600 font-bold mr-1">Hai Meta,</span>
              Selamat ulang tahun yang ke-20 ya.
            </p>

            <p>
              Dua puluh tahun yang lalu, tepat di tanggal <strong className="text-rose-800">13 Oktober 2006</strong>, kamu hadir ke dunia ini membawa nama yang begitu anggun: <em>Meta Mutiara Qolbi</em>. Dan bagiku, namamu bukan sekadar susunan kata yang indah, tapi cerminan nyata dari sosokmu — seorang perempuan yang berharga, berhati tulus, dan menenangkan hati siapa pun yang ada di dekatmu.
            </p>

            <p>
              Aku ingin kamu tahu betapa bersyukurnya aku bisa mengenalmu dan melihatmu tumbuh hingga sejauh ini. Perjalanan menuju usia 20 tentu tidak selalu mudah, tapi kamu selalu mampu melewatinya dengan ketabahan dan senyum manismu yang luar biasa. Aku sangat bangga padamu, Meta.
            </p>

            <div className="p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 italic text-rose-900 font-serif-title text-xs leading-relaxed">
              "Di usia ke-20 ini, doaku untukmu sederhana namun teramat dalam: semoga kamu selalu sehat, hatimu selalu dipeluk rasa damai dan bahagia, langkahmu dimudahkan dalam menggapai semua cita-cita, dan kamu tidak pernah merasa sendirian dalam menghadapi apa pun."
            </div>

            <p>
              Apapun impian yang sedang kamu perjuangkan saat ini, percayalah bahwa kamu punya kemampuan besar untuk mewujudkannya. Jangan pernah ragu pada nilaimu sendiri, karena bagiku, kamu selalu istimewa dan tak tergantikan.
            </p>

            <p className="font-medium text-slate-800">
              Selamat memasuki babak baru di usia 20 tahun, Meta. Tetaplah menjadi mutiara hatiku yang selalu bersinar lembut dan memesona. 🤍
            </p>
          </div>

          {/* Signoff Eksklusif dari Malik */}
          <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
            <div className="text-left">
              <p className="text-[11px] text-slate-500 font-medium">Dengan segenap rasa & doa tulus,</p>
              <p className="text-base font-bold text-rose-800 font-handwriting text-xl">
                Malik 💖
              </p>
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
