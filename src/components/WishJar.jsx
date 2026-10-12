import React, { useState, useEffect } from 'react';
import { Send, Heart, MessageSquareHeart, Sparkles, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationChime, playSoftPop } from '../utils/audio';

const DEFAULT_WISHES = [
  {
    id: 1,
    name: 'Tuan',
    time: 'Hari Ini',
    message: 'Barakallahu fii umrik Meta Mutiara Qolbi. Selamat ulang tahun ke-20! Semoga selalu sehat, bahagia, dimudahkan segala urusan dan cita-citanya. Tetaplah menjadi mutiara yang berkilau indah.',
    tag: 'Spesial 🌟',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    id: 2,
    name: 'Sahabat Sejati',
    time: 'Kemarin',
    message: 'Happy sweet 20th birthday Meta! Semoga makin sukses kuliah dan karirnya, selalu ceria, dan langgeng bahagianya!',
    tag: 'Doa Hangat 💖',
    tagColor: 'bg-pink-100 text-pink-700',
  },
  {
    id: 3,
    name: 'Keluarga Tercinta',
    time: 'Spesial',
    message: 'Selamat genap 20 tahun anak sholehah dan kebanggaan kami. Semoga panjang umur, murah rezeki, dan selalu dalam lindungan Allah SWT.',
    tag: 'Keluarga 🤍',
    tagColor: 'bg-purple-100 text-purple-700',
  },
];

export default function WishJar() {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('meta_hbd_wishes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // Fallback
    }
    return DEFAULT_WISHES;
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('meta_hbd_wishes', JSON.stringify(wishes));
    } catch (e) {
      // Ignore storage errors
    }
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim() || 'Teman Meta',
      time: 'Baru saja',
      message: message.trim(),
      tag: 'Doa Baru ✨',
      tagColor: 'bg-rose-100 text-rose-800',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);
    playCelebrationChime();

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f472b6', '#fb7185', '#ec4899'],
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
            Toples Harapan
          </span>
          <h3 className="text-base font-bold text-slate-800 font-serif-title">
            Kirimkan Doa & Doa Terkumpul 💌
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
          <MessageSquareHeart className="w-4 h-4" />
        </div>
      </div>

      {/* Input Form Card */}
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-3xl bg-white border border-rose-200/90 shadow-sm text-left space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Tulis Doa Untuk Meta
          </h4>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Nama Kamu
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Sahabat Meta, Tuan, dll..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Pesan & Doa Hangat
          </label>
          <textarea
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan harapan dan doa terbaikmu untuk usia ke-20 Meta..."
            required
            className="w-full p-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-rose-400 focus:bg-white transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-rose-300/40 hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Kirim Doa ke Toples Harapan ✨</span>
        </button>

        {submitted && (
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs text-center font-medium animate-fadeIn">
            ✨ Doamu telah terkirim dan tersimpan untuk Meta!
          </div>
        )}
      </form>

      {/* Wishes List */}
      <div className="space-y-2.5 text-left">
        {wishes.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:border-rose-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-400 to-pink-300 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                  {item.name ? item.name.charAt(0).toUpperCase() : 'M'}
                </div>
                <span className="text-xs font-bold text-slate-800">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans pl-8">
              "{item.message}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
