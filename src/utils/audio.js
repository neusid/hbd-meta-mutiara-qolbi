// Web Audio API Music Box & Sound FX for Meta's Birthday
let audioCtx = null;
let bgmInterval = null;
let isPlayingBgm = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play single chime note with pleasant music-box decay
export function playNote(freq, duration = 0.8, delay = 0, gainLevel = 0.15) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const startTime = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Sine with mild warm harmonic
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, startTime);

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainLevel, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.1);
}

// Celebration sparkling chime (pentatonic arpeggio)
export function playCelebrationChime() {
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
  notes.forEach((freq, idx) => {
    playNote(freq, 1.2, idx * 0.09, 0.2);
  });
}

// Soft click feedback
export function playSoftPop() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.09);
}

// Happy Birthday melody notes in C Major
const HBD_MELODY = [
  { f: 261.63, d: 0.35, pause: 0.4 },  // C4
  { f: 261.63, d: 0.25, pause: 0.3 },  // C4
  { f: 293.66, d: 0.6, pause: 0.7 },   // D4
  { f: 261.63, d: 0.6, pause: 0.7 },   // C4
  { f: 349.23, d: 0.6, pause: 0.7 },   // F4
  { f: 329.63, d: 1.1, pause: 1.2 },   // E4

  { f: 261.63, d: 0.35, pause: 0.4 },  // C4
  { f: 261.63, d: 0.25, pause: 0.3 },  // C4
  { f: 293.66, d: 0.6, pause: 0.7 },   // D4
  { f: 261.63, d: 0.6, pause: 0.7 },   // C4
  { f: 392.00, d: 0.6, pause: 0.7 },   // G4
  { f: 349.23, d: 1.1, pause: 1.2 },   // F4

  { f: 261.63, d: 0.35, pause: 0.4 },  // C4
  { f: 261.63, d: 0.25, pause: 0.3 },  // C4
  { f: 523.25, d: 0.7, pause: 0.75 },  // C5
  { f: 440.00, d: 0.6, pause: 0.7 },   // A4
  { f: 349.23, d: 0.6, pause: 0.7 },   // F4
  { f: 329.63, d: 0.6, pause: 0.7 },   // E4
  { f: 293.66, d: 0.9, pause: 1.0 },   // D4

  { f: 466.16, d: 0.35, pause: 0.4 },  // Bb4
  { f: 466.16, d: 0.25, pause: 0.3 },  // Bb4
  { f: 440.00, d: 0.6, pause: 0.7 },   // A4
  { f: 349.23, d: 0.6, pause: 0.7 },   // F4
  { f: 392.00, d: 0.6, pause: 0.7 },   // G4
  { f: 349.23, d: 1.4, pause: 1.6 }    // F4
];

export function toggleMusicBoxMelody(onStateChange) {
  if (isPlayingBgm) {
    stopMusicBoxMelody();
    if (onStateChange) onStateChange(false);
    return false;
  } else {
    startMusicBoxMelody();
    if (onStateChange) onStateChange(true);
    return true;
  }
}

export function startMusicBoxMelody() {
  const ctx = getAudioContext();
  if (!ctx) return;
  isPlayingBgm = true;

  const playSequence = () => {
    if (!isPlayingBgm) return;
    let accumulatedTime = 0;
    HBD_MELODY.forEach((note) => {
      setTimeout(() => {
        if (isPlayingBgm) {
          playNote(note.f, note.d, 0, 0.12);
        }
      }, accumulatedTime * 1000);
      accumulatedTime += note.pause * 0.95;
    });

    // Schedule next loop
    bgmInterval = setTimeout(() => {
      if (isPlayingBgm) {
        playSequence();
      }
    }, (accumulatedTime + 2.5) * 1000);
  };

  playSequence();
}

export function stopMusicBoxMelody() {
  isPlayingBgm = false;
  if (bgmInterval) {
    clearTimeout(bgmInterval);
    bgmInterval = null;
  }
}
