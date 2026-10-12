import React, { useState } from 'react';
import { Gift, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationChime, playSoftPop } from '../utils/audio';

const SECRET_WISHES_FROM_MALIK = [
  {
    id: 1,
    badge: 'Pesan 01 • Dari Malik',
    title: 'Rasa Syukur & Apresiasi',
    hiddenIcon: '💎',
    revealedTitle: 'Kamu Begitu Berharga Bagi Malik 🌟',
    revealedMessage: 'Kehadiranmu selalu membawa ketenangan dan warna yang indah. Terima kasih sudah tumbuh menjadi perempuan yang sekuat karang namun selembut mutiara. Aku sangat bersyukur memilikimu dalam hidupku.',
    accent: 'border-pink-300 text-pink-600 bg-pink-50',
  },
  {
    id: 2,
    badge: 'Pesan 02 • Dari Malik',
    title: 'Dukungan Tanpa Syarat',
    hiddenIcon: '🛡️',
    revealedTitle: 'Malik Selalu Ada Untukmu 🌸',
    revealedMessage: 'Kapan pun kamu merasa lelah, ragu, atau butuh tempat bersandar, ingatlah bahwa kamu tidak pernah sendiri. Malik akan selalu siap mendengarkan, mendukung, dan berdiri di sisimu dalam kondisi apa pun.',
    accent: 'border-rose-300 text-rose-600 bg-rose-50',
  },
  {
    id: 3,
    badge: 'Pesan 03 • Dari Malik',
    title: 'Doa Senyuman Abadi',
    hiddenIcon: '✨',
    revealedTitle: 'Semoga Senyummu Selalu Mekar 🤍',
    revealedMessage: 'Doaku di setiap hari: semoga Allah SWT menjaga senyuman manis di wajahmu, menjauhkan segala keresahan di hatimu, dan menggantikan setiap lelahmu dengan rezeki dan kebahagiaan yang melimpah.',
    accent: 'border-purple-300 text-purple-600 bg-purple-50',
  },
  {
    id: 4,
    badge: 'Pesan 04 • Dari Malik',
    title: 'Mahkota Usia 20 Tahun',
    hiddenIcon: '👑',
    revealedTitle: 'Langkah Baru Menuju Masa Depan 🎂',
    revealedMessage: 'Usia 20 adalah babak baru yang penuh peluang emas. Kejar semua mimpimu dengan penuh keyakinan, Meta. Apa pun cita-cita yang kamu tuju, Malik yakin kamu pasti mampu meraihnya dengan gemilang!',
    accent: 'border-amber-300 text-amber-600 bg-amber-50',
  },
];

export default function SecretCards() {
  const [openedCards, setOpenedCards] = useState({});

  const handleCardClick = (id) => {
    if (openedCards[id]) {
      playSoftPop();
      return;
    }

    playCelebrationChime();
    setOpenedCards((prev) => ({ ...prev, [id]: true }));

    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#f472b6', '#fb7185', '#fde047'],
    });
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between px-1">
        <div className="text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
            Khusus Untuk Meta
          </span>
          <h3 className="text-base font-bold text-slate-800 font-serif-title">
            4 Pesan Rahasia Dari Malik 🎁
          </h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">
          {Object.keys(openedCards).length}/4 Terbuka
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SECRET_WISHES_FROM_MALIK.map((card) => {
          const isOpened = openedCards[card.id];

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden select-none ${
                isOpened
                  ? 'bg-white border-rose-200 shadow-md ring-2 ring-rose-200/50'
                  : 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/70 shadow-sm hover:scale-[1.02] active:scale-95'
              }`}
            >
              {!isOpened ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-rose-200 flex items-center justify-center text-xl shadow-sm">
                      {card.hiddenIcon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                        {card.badge}
                      </span>
                      <h4 className="text-xs font-bold text-slate-700 mt-0.5">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs text-rose-500 font-bold bg-white/80 px-2.5 py-1 rounded-full border border-rose-200 shadow-xs">
                    Buka ✨
                  </span>
                </div>
              ) : (
                <div className="animate-fadeIn space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                      {card.badge} • Terbuka
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 font-serif-title pt-1">
                    {card.revealedTitle}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                    {card.revealedMessage}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
