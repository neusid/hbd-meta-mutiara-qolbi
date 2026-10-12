import React from 'react';
import { Sparkles, Heart, Award, Gem, Compass, Sun } from 'lucide-react';

export default function MilestoneJourney() {
  const milestones = [
    {
      num: '20',
      unit: 'Tahun',
      label: 'Dua Dekade Kehidupan',
      icon: Award,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
    },
    {
      num: '240',
      unit: 'Bulan',
      label: 'Tumbuh Penuh Cinta',
      icon: Gem,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      num: '7.305+',
      unit: 'Hari',
      label: 'Menyinari Sekitar',
      icon: Sun,
      color: 'from-amber-500 to-rose-400',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    {
      num: '∞',
      unit: 'Berkah',
      label: 'Doa Terbaik Selamanya',
      icon: Heart,
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-rose-600',
    },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
            Milestone 2006 — 2026
          </span>
          <h3 className="text-base font-bold text-slate-800 font-serif-title">
            Dua Puluh Tahun Menyinari Semesta ✨
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* 4-Quadrant Symmetrical Metric Cards */}
      <div className="grid grid-cols-2 gap-3">
        {milestones.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-rose-100/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-8 h-8 rounded-xl ${item.bgColor} ${item.textColor} flex items-center justify-center`}>
                  <IconComponent className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {item.unit}
                </span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800 font-sans tracking-tight">
                  {item.num}
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Name Meaning Philosophy Card */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-pink-50 border border-rose-200/80 shadow-sm text-left space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-sm">
            <Gem className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900">
            Filosofi Indah: Meta Mutiara Qolbi
          </h4>
        </div>

        <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-rose-200 text-rose-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              M
            </span>
            <p>
              <strong className="text-slate-800">META:</strong> Simbol transformasi yang luar biasa — sosok yang berani berkembang, adaptif, dan selalu melampaui setiap ekspektasi.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-pink-200 text-pink-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              M
            </span>
            <p>
              <strong className="text-slate-800">MUTIARA:</strong> Permata yang berkilau alami karena ketabahan dan keanggunannya, berharga serta dicintai banyak orang.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-rose-200 text-rose-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              Q
            </span>
            <p>
              <strong className="text-slate-800">QOLBI:</strong> Berasal dari bahasa cinta dan kedalaman sanubari — hati yang tulus, lembut, dan selalu dirindukan kehadirannya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
