import React, { useState } from 'react';
import { Heart, Sparkles, Check, BookmarkCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationChime, playSoftPop } from '../utils/audio';

const DOA_LIST_DARI_MALIK = [
  {
    id: 1,
    category: 'Doa Kesehatan & Umur Berkah',
    icon: '🌸',
    prayer: 'Semoga Allah SWT senantiasa melimpahkan kesehatan sempurna untuk raga dan pikiranmu, memberikan umur yang panjang dan penuh keberkahan, serta menjauhkanmu dari rasa lelah yang berat.',
    accent: 'bg-rose-50 border-rose-200 text-rose-800',
  },
  {
    id: 2,
    category: 'Doa Kebahagiaan & Ketenangan Hati',
    icon: '💖',
    prayer: 'Semoga hatimu selalu dipeluk rasa damai. Jika ada hari yang berat, semoga Tuhan segera menggantinya dengan berlipat kebahagiaan dan tawa yang tulus.',
    accent: 'bg-pink-50 border-pink-200 text-pink-800',
  },
  {
    id: 3,
    category: 'Doa Kelancaran Cita-Cita & Impian',
    icon: '🌟',
    prayer: 'Semoga setiap ikhtiar, urusan pendidikan, dan masa depan yang sedang Meta perjuangkan di usia 20 tahun ini dibukakan jalan kemudahan dan diantarkan pada kesuksesan terindah.',
    accent: 'bg-amber-50 border-amber-200 text-amber-800',
  },
  {
    id: 4,
    category: 'Doa Perlindungan & Keberkahan Hidup',
    icon: '🤍',
    prayer: 'Ke mana pun langkah kakimu membawamu, semoga Meta senantiasa berada dalam lindungan-Nya, dijauhkan dari marabahaya, dan selalu dikelilingi kebaikan.',
    accent: 'bg-purple-50 border-purple-200 text-purple-800',
  },
  {
    id: 5,
    category: 'Doa Senyuman Abadi',
    icon: '🌷',
    prayer: 'Semoga senyuman manismu tidak pernah pudar oleh apa pun, karena senyum tulusmu adalah hal paling berharga dan penyejuk hati bagi Malik.',
    accent: 'bg-rose-50 border-rose-200 text-rose-800',
  },
];

export default function WishJar() {
  const [aminCounts, setAminCounts] = useState(() => {
    try {
      const saved = localStorage.getItem('meta_doa_amin_count');
      return saved ? parseInt(saved, 10) : 20;
    } catch (e) {
      return 20;
    }
  });

  const [hasAmiined, setHasAmiined] = useState(false);

  const handleAamiin = () => {
    playCelebrationChime();
    const updated = aminCounts + 1;
    setAminCounts(updated);
    setHasAmiined(true);
    try {
      localStorage.setItem('meta_doa_amin_count', updated.toString());
    } catch (e) {}

    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#f472b6', '#fb7185', '#ec4899', '#fde047'],
    });

    setTimeout(() => setHasAmiined(false), 3000);
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
            Doa Tulus Dari Malik
          </span>
          <h3 className="text-base font-bold text-slate-800 font-serif-title">
            Untaian Doa Khusus Untuk Usia 20 Meta 🤲✨
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
        </div>
      </div>

      {/* Quote Banner Malik */}
      <div className="p-4 rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-left shadow-sm space-y-1.5 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-100">
            Catatan Hati Malik
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
        </div>
        <p className="text-xs sm:text-sm italic font-serif-title leading-relaxed">
          "Di setiap sujud dan harapanku, namamu — Meta Mutiara Qolbi — selalu memiliki tempat terindah. Selamat ulang tahun ke-20, mutiaraku."
        </p>
        <p className="text-[11px] text-rose-100 font-medium pt-1 text-right">
          — Dari Malik dengan tulus 💖
        </p>
      </div>

      {/* List of Prayers from Malik */}
      <div className="space-y-3 text-left">
        {DOA_LIST_DARI_MALIK.map((item, idx) => (
          <div
            key={item.id}
            className={`p-4 rounded-2xl border bg-white border-rose-100/90 shadow-xs hover:border-rose-200 transition-colors`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-xs font-bold text-slate-800">
                  {item.category}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                Doa #{idx + 1}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans pl-1">
              "{item.prayer}"
            </p>
          </div>
        ))}
      </div>

      {/* Action Button: Mengaminkan Doa Malik */}
      <div className="p-4 rounded-3xl bg-white border border-rose-200/90 shadow-sm text-center space-y-2">
        <p className="text-xs text-slate-600 font-medium">
          Doa-doa ini telah diaminkan sebanyak <strong className="text-rose-600 font-bold">{aminCounts} kali</strong>
        </p>
        <button
          onClick={handleAamiin}
          className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs shadow-md shadow-rose-300/40 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>Aamiin Ya Rabbal Alamin 🤲✨</span>
        </button>

        {hasAmiined && (
          <p className="text-xs text-emerald-600 font-semibold animate-fadeIn pt-1">
            ✨ Aamiin! Semoga Allah mengabulkan seluruh doa Malik untuk Meta! ✨
          </p>
        )}
      </div>
    </div>
  );
}
