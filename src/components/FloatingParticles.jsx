import React, { useMemo } from 'react';

export default function FloatingParticles() {
  const particles = useMemo(() => {
    const symbols = ['🌸', '✨', '💖', '🤍', '🎂', '🌷'];
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${(i * 7.5 + (i % 3) * 5) % 94}%`,
      duration: `${14 + (i % 6) * 3}s`,
      delay: `${(i * 1.3) % 9}s`,
      size: `${14 + (i % 4) * 4}px`,
      opacity: 0.25 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 select-none animate-float-particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
