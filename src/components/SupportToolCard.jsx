import { useState, useRef } from 'react'
import { stressLevelData, bunCards, emotionPunchData } from '../data'

// ─── 呼吸練習 ──────────────────────────────────────────────────────────────
function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState('idle')
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(null)

  const phases = [
    { key: 'inhale', label: '吸氣', duration: 4, color: 'bg-sky-400' },
    { key: 'hold',   label: '停留', duration: 4, color: 'bg-amber-400' },
    { key: 'exhale', label: '吐氣', duration: 6, color: 'bg-green-400' },
  ]

  const startBreathing = () => {
    let phaseIdx = 0, cnt = 0, totalCycles = 0
    setPhase(phases[0].key)
    setCount(phases[0].duration)
    const tick = setInterval(() => {
      cnt++
      const cur = phases[phaseIdx]
      if (cnt >= cur.duration) {
        cnt = 0
        phaseIdx = (phaseIdx + 1) % phases.length
        if (phaseIdx === 0) totalCycles++
        if (totalCycles >= 3) { clearInterval(tick); setPhase('done'); return }
        setPhase(phases[phaseIdx].key)
        setCount(phases[phaseIdx].duration)
      } else {
        setCount(cur.duration - cnt)
      }
    }, 1000)
    setTimer(tick)
  }

  const stop = () => { if (timer) clearInterval(timer); setPhase('idle'); setCount(0) }
  const currentPhase = phases.find(p => p.key === phase)
  const circleSize = phase === 'inhale' ? 'scale-125' : phase === 'exhale' ? 'scale-75' : 'scale-100'

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2">1分鐘呼吸調節</h3>
        <p className="text-sub-text text-sm mb-6">3 個循環：4秒吸氣 → 4秒停留 → 6秒吐氣</p>
        <div className="flex items-center justify-center mb-8 h-36">
          {phase === 'idle' && (
            <div className="w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-4xl">🫁</span>
            </div>
          )}
          {phase === 'done' && (
            <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center flex-col">
              <span className="text-4xl">🌿</span>
              <span className="text-green-600 text-sm font-semibold mt-1">完成！</span>
            </div>
          )}
          {currentPhase && phase !== 'idle' && phase !== 'done' && (
            <div className={`w-28 h-28 rounded-full ${currentPhase.color} flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${circleSize} shadow-lg`}>
              <span className="text-white text-3xl font-black">{count}</span>
              <span className="text-white/90 text-sm font-semibold">{currentPhase.label}</span>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {phase === 'idle' && <button onClick={startBreathing} className="btn-primary flex-1">開始練習</button>}
          {phase === 'done' && <button onClick={() => { setPhase('idle'); setCount(0) }} className="btn-outline flex-1">再來一次</button>}
          {currentPhase && phase !== 'idle' && phase !== 'done' && <button onClick={stop} className="btn-outline flex-1">停止</button>}
          <button onClick={onClose} className="flex-1 py-2.5 px-6 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─── 情緒戳戳樂 ────────────────────────────────────────────────────────────
function EmotionPunch({ onClose }) {
  const [selected, setSelected] = useState(null)
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-1 text-center">今天的情緒戳戳樂</h3>
        <p className="text-sub-text text-sm mb-4 text-center">點選現在最接近你的心情</p>
        {selected ? (
          <div className="text-center py-4">
            <div className="text-6xl mb-3">{selected.emoji}</div>
            <div className="font-bold text-warm-text text-lg mb-3">{selected.name}</div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-4">
              <p className="text-warm-text text-sm leading-relaxed">{selected.message}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setSelected(null)} className="btn-outline flex-1 text-sm">換一個</button>
              <button onClick={onClose} className="btn-primary flex-1 text-sm">好的，謝謝</button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {emotionPunchData.map(e => (
                <button key={e.id} onClick={() => setSelected(e)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-amber-50 transition-colors">
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-xs text-sub-text">{e.name}</span>
                </button>
              ))}
            </div>
            <button onClick={onClose} className="w-full py-2 rounded-full border border-gray-200 text-sub-text text-sm hover:bg-gray-50">關閉</button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── 包子翻翻卡 ────────────────────────────────────────────────────────────
function BunFlipCard({ onClose }) {
  const [flipped, setFlipped] = useState(null)
  const pick = () => { const idx = Math.floor(Math.random() * bunCards.length); setFlipped(bunCards[idx]) }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2">包子舒壓翻翻卡</h3>
        <p className="text-sub-text text-sm mb-6">點「翻開」取得今天屬於你的療癒卡片</p>
        <div className="h-36 flex items-center justify-center mb-6">
          {flipped ? (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 w-full">
              <div className="text-5xl mb-3">{flipped.emoji}</div>
              <p className="text-warm-text text-sm leading-relaxed font-medium">{flipped.message}</p>
            </div>
          ) : (
            <div className="w-28 h-28 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-5xl">?</span>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button onClick={pick} className="btn-primary flex-1">{flipped ? '再翻一張' : '翻開'}</button>
          <button onClick={onClose} className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─── 10 組隨機承接語 ───────────────────────────────────────────────────────
const catchResponses = [
  {
    emoji: '🫂',
    title: '接住了',
    accent: 'from-teal-400 to-emerald-500',
    tagBg: 'bg-teal-50',
    tagBorder: 'border-teal-200',
    tagText: 'text-teal-700',
    message: '你願意說出來，就已經很勇敢了。\n這份重，不用再一個人扛。有人在這裡，接住你了。',
    note: '說出口的那一刻，就輕了一點點。',
  },
  {
    emoji: '🌊',
    title: '沖走了',
    accent: 'from-sky-400 to-blue-500',
    tagBg: 'bg-sky-50',
    tagBorder: 'border-sky-200',
    tagText: 'text-sky-700',
    message: '就像海浪沖走沙灘上的痕跡，\n那些讓你壓著喘不過氣的，現在可以隨浪漂走了。',
    note: '你值得有人為你承接這一切。',
  },
  {
    emoji: '🌸',
    title: '放下了',
    accent: 'from-pink-400 to-rose-400',
    tagBg: 'bg-pink-50',
    tagBorder: 'border-pink-200',
    tagText: 'text-pink-700',
    message: '能把壓著心口的話說出來，\n本身就需要很大的力氣。你做到了，真的很好。',
    note: '你的感受，一直都是真實的。',
  },
  {
    emoji: '🕊️',
    title: '飛走了',
    accent: 'from-violet-400 to-purple-500',
    tagBg: 'bg-violet-50',
    tagBorder: 'border-violet-200',
    tagText: 'text-violet-700',
    message: '讓它飛吧。\n那份重量不是你的錯，也不該由你一個人承擔。有人在這裡，一起接住它。',
    note: '釋放，是另一種照顧自己的方式。',
  },
  {
    emoji: '🌙',
    title: '卸下了',
    accent: 'from-indigo-400 to-blue-500',
    tagBg: 'bg-indigo-50',
    tagBorder: 'border-indigo-200',
    tagText: 'text-indigo-700',
    message: '你撐了很久。\n現在可以先放下來，哪怕只是這一刻，也讓自己輕一點。',
    note: '撐著，也需要勇氣。休息，更需要。',
  },
  {
    emoji: '🌿',
    title: '接住了',
    accent: 'from-green-400 to-teal-500',
    tagBg: 'bg-green-50',
    tagBorder: 'border-green-200',
    tagText: 'text-green-700',
    message: '壓力是真實的，你的疲憊也是真實的。\n不需要假裝沒事，這裡的每一個人都懂。',
    note: '感受到了，就是照顧自己的起點。',
  },
  {
    emoji: '☀️',
    title: '過去了',
    accent: 'from-amber-400 to-orange-400',
    tagBg: 'bg-amber-50',
    tagBorder: 'border-amber-200',
    tagText: 'text-amber-700',
    message: '不是每件事都要撐過去，\n有些重量，可以先放在這裡，讓陽光幫你曬一曬。',
    note: '你已經做得夠多了，今天先到這。',
  },
  {
    emoji: '💙',
    title: '有人在',
    accent: 'from-blue-400 to-sky-500',
    tagBg: 'bg-blue-50',
    tagBorder: 'border-blue-200',
    tagText: 'text-blue-700',
    message: '你不孤單。\n就算今天很難，就算你還是得繼續，\n也有人在旁邊，默默撐著你。',
    note: '被接住的感覺，你值得擁有。',
  },
  {
    emoji: '🍵',
    title: '好一點了',
    accent: 'from-lime-500 to-green-500',
    tagBg: 'bg-lime-50',
    tagBorder: 'border-lime-200',
    tagText: 'text-lime-700',
    message: '說出來，就是另一種呼吸。\n讓那份悶著的空氣流出去，現在深吸一口，慢慢來。',
    note: '你可以慢慢來，沒有人在催你。',
  },
  {
    emoji: '🌈',
    title: '鬆一點了',
    accent: 'from-fuchsia-400 to-pink-400',
    tagBg: 'bg-fuchsia-50',
    tagBorder: 'border-fuchsia-200',
    tagText: 'text-fuchsia-700',
    message: '壓力不會因為說出來就消失，\n但它會因為有人接住，而變得沒那麼重。\n你不是一個人扛著它。',
    note: '每一次說出口，都是一點點的釋放。',
  },
]

// ─── 把壓力丟出去（揉紙團 → 丟垃圾桶 → 3D 擁抱版）──────────────────────────
function ThrowStress({ onClose }) {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('input') // 'input' | 'crumple' | 'throw' | 'hug'
  const [response, setResponse] = useState(null)
  const throwCount = useRef(0)

  const handleStart = () => {
    if (!text.trim()) return
    let idx
    do { idx = Math.floor(Math.random() * catchResponses.length) } while (catchResponses[idx] === response)
    setResponse(catchResponses[idx])
    throwCount.current += 1
    setPhase('crumple')
    setTimeout(() => setPhase('throw'), 1100)
    setTimeout(() => setPhase('hug'), 2400)
  }

  const handleReset = () => {
    setText('')
    setPhase('input')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <style>{`
        /* ── 紙張揉成團 ── */
        @keyframes ts-crumple {
          0%   { transform: scale(1)    rotate(0deg);  border-radius: 12px; filter: brightness(1); }
          25%  { transform: scale(0.85) rotate(-7deg); border-radius: 22% 30% 28% 35%; }
          50%  { transform: scale(0.6)  rotate(10deg); border-radius: 42% 50% 38% 48%; filter: brightness(0.95); }
          75%  { transform: scale(0.42) rotate(-15deg);border-radius: 50%; }
          100% { transform: scale(0.34) rotate(18deg); border-radius: 50%; filter: brightness(0.92); }
        }
        /* ── 紙團從中央飛入垃圾桶 ── */
        @keyframes ts-fly-x { from { left: 50%; } to { left: 78%; } }
        @keyframes ts-fly-y {
          0%   { top: 38%; }
          50%  { top: 8%;  }
          100% { top: 62%; }
        }
        @keyframes ts-fly-spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(720deg); } }
        /* ── 垃圾桶蓋掀起 ── */
        @keyframes ts-lid {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          40%, 70% { transform: rotate(-32deg) translate(-3px, -4px); }
        }
        /* ── 落地震動 ── */
        @keyframes ts-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-2deg); }
          75% { transform: translateX(3px)  rotate(2deg); }
        }
        /* ── 3D 雙手擁抱 ── */
        @keyframes ts-left-hand {
          0%   { transform: translate3d(-180px, 30px, -400px) rotate(-40deg) scale(0.25); opacity: 0; }
          55%  { transform: translate3d(-50px,  5px,  0)      rotate(-12deg) scale(1.25); opacity: 1; }
          100% { transform: translate3d(-25px,  0,    120px)  rotate(0deg)   scale(1.55); opacity: 1; }
        }
        @keyframes ts-right-hand {
          0%   { transform: translate3d(180px,  30px, -400px) rotate(40deg)  scale(0.25); opacity: 0; }
          55%  { transform: translate3d(50px,   5px,  0)      rotate(12deg)  scale(1.25); opacity: 1; }
          100% { transform: translate3d(25px,   0,    120px)  rotate(0deg)   scale(1.55); opacity: 1; }
        }
        /* ── 中央被抱者 ── */
        @keyframes ts-hugged-in {
          0%   { transform: scale(0.6) translateY(15px); opacity: 0; }
          60%  { transform: scale(1.15) translateY(-3px); opacity: 1; }
          100% { transform: scale(1)   translateY(0); opacity: 1; }
        }
        /* ── 漂浮愛心 ── */
        @keyframes ts-heart {
          0%   { transform: translateY(0) scale(0.5);  opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: translateY(-70px) scale(1.2); opacity: 0; }
        }
        /* ── 結果區彈入 ── */
        @keyframes ts-pop {
          0%   { transform: scale(0.85) translateY(14px); opacity: 0; }
          60%  { transform: scale(1.03) translateY(-2px);  opacity: 1; }
          100% { transform: scale(1)    translateY(0);     opacity: 1; }
        }
        /* ── 通用淡入 ── */
        @keyframes ts-up { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        /* ── 暖光呼吸 ── */
        @keyframes ts-glow { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
      `}</style>

      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden relative">

        {/* ══ Banner ══ */}
        <div className={`relative overflow-hidden px-7 pt-7 pb-5 text-white text-center
          ${phase === 'hug' && response
            ? `bg-gradient-to-br ${response.accent}`
            : 'bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400'}`}
          style={{ transition: 'background 0.8s ease' }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />

          <div className="relative inline-flex items-center justify-center mb-2">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-inner">
              {phase === 'input'   && '✍️'}
              {phase === 'crumple' && '🤏'}
              {phase === 'throw'   && '🗑️'}
              {phase === 'hug'     && (response?.emoji ?? '🫂')}
            </div>
          </div>

          <h3 className="font-black text-xl tracking-tight">
            {phase === 'input'   && '把壓力寫下來'}
            {phase === 'crumple' && '揉成紙團…'}
            {phase === 'throw'   && '丟掉它！'}
            {phase === 'hug'     && (response?.title ?? '有人抱住你了')}
          </h3>
          <p className="text-white/80 text-xs mt-1.5 font-medium">
            {phase === 'input'   && '寫在紙上 → 揉成團 → 丟進垃圾桶'}
            {phase === 'crumple' && '把那份重量揉爛、揉碎'}
            {phase === 'throw'   && '咻──進垃圾桶吧！'}
            {phase === 'hug'     && (response?.note ?? '你不是一個人扛著它')}
          </p>
        </div>

        {/* ══ 內容區 ══ */}
        <div className="px-6 py-6">

          {/* ── 輸入階段 ── */}
          {phase === 'input' && (
            <div style={{ animation: 'ts-up 0.4s ease-out both' }}>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                把那個<span className="text-orange-500 font-semibold">讓你悶著的事</span>寫下來，
                等等揉成紙團丟進垃圾桶。
              </p>

              {/* 信紙風格 textarea */}
              <div className="relative mb-5">
                <div
                  className="rounded-xl shadow-inner overflow-hidden border border-amber-100"
                  style={{
                    background: '#fffbeb',
                    backgroundImage:
                      'repeating-linear-gradient(transparent, transparent 27px, rgba(251, 191, 36, 0.25) 27px, rgba(251, 191, 36, 0.25) 28px)',
                  }}
                >
                  <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="今天讓我最累的是……"
                    rows={5}
                    maxLength={120}
                    className="w-full bg-transparent border-none p-4 text-sm text-gray-700 resize-none outline-none placeholder:text-amber-300"
                    style={{ lineHeight: '28px', fontFamily: 'inherit' }}
                  />
                </div>
                <span className="absolute bottom-2 right-3 text-xs text-amber-400/70 select-none">
                  {text.length}/120
                </span>
              </div>

              <button
                onClick={handleStart}
                disabled={!text.trim()}
                className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-200
                  ${text.trim()
                    ? 'bg-gradient-to-r from-orange-400 to-rose-500 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95'
                    : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
              >
                {text.trim() ? '✊ 揉成紙團 → 丟掉' : '先寫點什麼吧…'}
              </button>

              <button onClick={onClose}
                className="w-full mt-3 py-2.5 text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
                先不用，關閉
              </button>
            </div>
          )}

          {/* ── 揉紙團階段 ── */}
          {phase === 'crumple' && (
            <div className="relative h-44 flex items-center justify-center select-none">
              <div
                className="px-4 py-3 overflow-hidden"
                style={{
                  width: 200,
                  height: 110,
                  background: '#fffbeb',
                  backgroundImage: 'repeating-linear-gradient(transparent, transparent 13px, rgba(251, 191, 36, 0.3) 13px, rgba(251, 191, 36, 0.3) 14px)',
                  animation: 'ts-crumple 1.1s cubic-bezier(0.5, 0, 0.7, 1) forwards',
                  transformOrigin: 'center',
                  borderRadius: 12,
                  boxShadow: '0 10px 24px rgba(180, 80, 30, 0.18), inset 0 0 0 1px rgba(251, 191, 36, 0.4)',
                }}
              >
                <p className="text-xs text-gray-700 leading-tight" style={{ maxHeight: 84, overflow: 'hidden' }}>
                  {text}
                </p>
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center text-orange-500/80 text-xs font-semibold">
                ✦ 揉它揉它揉它 ✦
              </p>
            </div>
          )}

          {/* ── 丟垃圾桶階段 ── */}
          {phase === 'throw' && (
            <div className="relative h-44 select-none">
              {/* 拋物線軌跡 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 176" style={{ pointerEvents: 'none' }}>
                <path d="M 150 80 Q 210 -10 252 110"
                  stroke="#fbbf24" strokeWidth="2" fill="none"
                  strokeDasharray="5,4" strokeLinecap="round" opacity="0.45" />
              </svg>

              {/* 垃圾桶 */}
              <div className="absolute right-3 bottom-3 select-none"
                style={{ animation: 'ts-shake 0.4s ease-in-out 1s' }}>
                <div className="text-5xl leading-none"
                  style={{ animation: 'ts-lid 0.8s ease-in-out 0.4s', transformOrigin: '50% 100%', display: 'inline-block' }}>
                  🗑️
                </div>
                <div className="text-xs text-gray-500 text-center font-medium mt-0.5">扔掉</div>
              </div>

              {/* 紙團 */}
              <div className="absolute"
                style={{
                  width: 46, height: 46,
                  left: '50%', top: '38%',
                  animation: 'ts-fly-x 1.1s cubic-bezier(0.4,0,0.2,1) forwards, ts-fly-y 1.1s cubic-bezier(0.33,0,0.67,1) forwards',
                }}>
                <div style={{ width: '100%', height: '100%', animation: 'ts-fly-spin 1.1s linear forwards' }}>
                  <div
                    style={{
                      width: '100%', height: '100%',
                      background: 'radial-gradient(circle at 30% 30%, #fffbeb 0%, #fde68a 55%, #c08a3e 100%)',
                      borderRadius: '52% 48% 55% 45% / 50% 55% 45% 50%',
                      boxShadow: 'inset -4px -4px 8px rgba(160, 100, 40, 0.45), inset 3px 3px 6px rgba(255, 251, 235, 0.6), 0 4px 10px rgba(0,0,0,0.2)',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>
              </div>

              <p className="absolute top-1 left-0 right-0 text-center text-orange-500 text-xs font-semibold tracking-wide">
                ✦ 咻── 飛進去！ ✦
              </p>
            </div>
          )}

          {/* ── 3D 擁抱階段 ── */}
          {phase === 'hug' && response && (
            <div style={{ animation: 'ts-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) both' }}>

              {/* 3D 擁抱舞台 */}
              <div
                className="relative h-48 mb-4 rounded-2xl overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse at center, #fff7ed 0%, #fed7aa 55%, #fbcfe8 100%)',
                  perspective: '700px',
                  transformStyle: 'preserve-3d',
                  boxShadow: 'inset 0 2px 12px rgba(251, 146, 60, 0.18)',
                }}
              >
                {/* 暖光呼吸圓 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 70%)',
                    animation: 'ts-glow 2.5s ease-in-out infinite',
                  }} />

                {/* 漂浮愛心 / 星星 */}
                {[
                  { x: '18%', b: '20%', d: '0.3s', e: '💗' },
                  { x: '78%', b: '15%', d: '0.6s', e: '✨' },
                  { x: '50%', b: '8%',  d: '0.9s', e: '💕' },
                  { x: '28%', b: '60%', d: '1.2s', e: '🌸' },
                  { x: '72%', b: '55%', d: '1.5s', e: '✨' },
                ].map((h, i) => (
                  <div key={i} className="absolute text-xl pointer-events-none"
                    style={{
                      left: h.x,
                      bottom: h.b,
                      animation: `ts-heart 2.5s ease-out ${h.d} infinite`,
                    }}>
                    {h.e}
                  </div>
                ))}

                {/* 中央被抱的人 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ animation: 'ts-hugged-in 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.7s both' }}>
                  <div className="text-5xl">😌</div>
                </div>

                {/* 左手（從畫面左外撲過來） */}
                <div className="absolute top-1/2 left-1/2"
                  style={{
                    fontSize: '60px',
                    marginTop: '-30px',
                    marginLeft: '-30px',
                    animation: 'ts-left-hand 1.3s cubic-bezier(0.34,1.56,0.64,1) 0.1s both',
                    filter: 'drop-shadow(3px 5px 8px rgba(190, 90, 40, 0.35))',
                    transformOrigin: 'center',
                  }}>
                  🫱
                </div>

                {/* 右手（從畫面右外撲過來） */}
                <div className="absolute top-1/2 left-1/2"
                  style={{
                    fontSize: '60px',
                    marginTop: '-30px',
                    marginLeft: '-30px',
                    animation: 'ts-right-hand 1.3s cubic-bezier(0.34,1.56,0.64,1) 0.1s both',
                    filter: 'drop-shadow(-3px 5px 8px rgba(190, 90, 40, 0.35))',
                    transformOrigin: 'center',
                  }}>
                  🫲
                </div>
              </div>

              {/* 安慰訊息卡 */}
              <div className={`${response.tagBg} border ${response.tagBorder} rounded-2xl p-5 mb-4`}>
                {response.message.split('\n').map((line, i) => (
                  <p key={i} className={`text-sm leading-relaxed font-medium ${response.tagText} ${i > 0 ? 'mt-1.5' : ''}`}>
                    {line}
                  </p>
                ))}
              </div>

              {/* 統計列 */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-gray-400 text-xs font-medium px-1">已丟出 {throwCount.current} 個重量</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              {/* 按鈕組 */}
              <div className="flex gap-2.5">
                <button onClick={handleReset}
                  className="flex-1 py-3 rounded-xl border-2 border-gray-100 text-gray-500 hover:bg-gray-50 text-sm font-semibold transition-all hover:border-gray-200">
                  再丟一個 💨
                </button>
                <button onClick={onClose}
                  className={`flex-1 py-3 rounded-xl text-white text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 active:scale-95
                    bg-gradient-to-r ${response.accent} shadow-orange-200`}>
                  好多了 🌿
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── 戳氣泡紓壓 ────────────────────────────────────────────────────────────
const BUBBLE_DEFAULTS = ['焦慮', '煩躁', '疲憊', '壓力', '緊張', '委屈', '不安', '煩悶', '擔心']
const BUBBLE_COLORS = [
  'bg-sky-200', 'bg-pink-200', 'bg-violet-200', 'bg-amber-200',
  'bg-teal-200', 'bg-rose-200', 'bg-purple-200', 'bg-green-200',
  'bg-orange-200', 'bg-blue-200', 'bg-fuchsia-200', 'bg-lime-200',
]
const BUBBLE_SIZES = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24']
const BUBBLE_MAX = 15

function BubblePop({ onClose }) {
  const [phase, setPhase] = useState('input') // 'input' | 'play' | 'done'
  const [inputText, setInputText] = useState(BUBBLE_DEFAULTS.join('\n'))
  const [bubbles, setBubbles] = useState([])

  const parsedWords = inputText
    .split('\n')
    .map(w => w.trim())
    .filter(w => w.length > 0)

  const startGame = () => {
    const words = parsedWords.slice(0, BUBBLE_MAX)
    if (words.length === 0) return
    const list = words.map((word, i) => ({
      id: i + 1,
      word,
      color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
      size: BUBBLE_SIZES[Math.floor(Math.random() * BUBBLE_SIZES.length)],
      delay: `${(Math.random() * 1.2).toFixed(2)}s`,
      popped: false,
      popping: false,
    }))
    setBubbles(list)
    setPhase('play')
  }

  const useDefaults = () => setInputText(BUBBLE_DEFAULTS.join('\n'))
  const clearAll = () => setInputText('')

  const pop = (id) => {
    setBubbles(prev => prev.map(b => b.id === id ? { ...b, popping: true } : b))
    setTimeout(() => {
      setBubbles(prev => {
        const next = prev.map(b => b.id === id ? { ...b, popped: true } : b)
        if (next.every(b => b.popped)) setPhase('done')
        return next
      })
    }, 300)
  }

  const backToInput = () => {
    setBubbles([])
    setPhase('input')
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-7 max-w-md w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2 text-center">戳氣泡紓壓</h3>

        {phase === 'input' && (
          <>
            <p className="text-sub-text text-sm mb-4 text-center">
              寫下想戳破的壓力詞或事情，<span className="text-blue-500 font-medium">一行一個</span>
            </p>
            <div className="relative mb-3">
              <textarea
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="例如：&#10;報告寫不完&#10;客訴電話&#10;睡眠不足"
                rows={7}
                className="w-full bg-blue-50/40 border-2 border-blue-100 focus:border-blue-300 rounded-2xl p-4 text-sm text-gray-700 resize-none outline-none transition-colors leading-relaxed placeholder:text-gray-300"
              />
              <span className="absolute bottom-3 right-4 text-xs text-gray-400 select-none bg-white/70 px-2 py-0.5 rounded-full">
                {parsedWords.length} / {BUBBLE_MAX} 顆
              </span>
            </div>

            <div className="flex items-center justify-between mb-4 text-xs">
              <button
                onClick={useDefaults}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                ✨ 填入預設詞彙
              </button>
              <button
                onClick={clearAll}
                className="text-gray-400 hover:text-gray-600 font-medium"
              >
                清空
              </button>
            </div>

            {parsedWords.length > BUBBLE_MAX && (
              <p className="text-xs text-amber-600 mb-3 text-center">
                超過 {BUBBLE_MAX} 個，只會取前 {BUBBLE_MAX} 個變成氣泡
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium"
              >
                關閉
              </button>
              <button
                onClick={startGame}
                disabled={parsedWords.length === 0}
                className={`flex-1 py-2.5 px-4 rounded-full text-white text-sm font-semibold transition-all
                  ${parsedWords.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-400 to-sky-500 shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
              >
                {parsedWords.length === 0 ? '先寫點什麼' : '開始戳氣泡 →'}
              </button>
            </div>
          </>
        )}

        {phase === 'play' && (
          <>
            <p className="text-sub-text text-sm mb-2 text-center">點擊氣泡，把壓力一顆一顆戳破！</p>
            <div className="flex justify-center mb-4 text-xs text-gray-400">
              剩 {bubbles.filter(b => !b.popped).length} / {bubbles.length}
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center min-h-48">
              {bubbles.map(b => !b.popped && (
                <button
                  key={b.id}
                  onClick={() => pop(b.id)}
                  style={{ animationDelay: b.delay }}
                  className={`${b.size} ${b.color} rounded-full flex items-center justify-center font-bold text-gray-700 shadow-md cursor-pointer transition-all duration-300 px-2
                    ${b.popping ? 'scale-0 opacity-0' : 'animate-bounce scale-100 opacity-100'}`}
                >
                  <span
                    className="text-center leading-tight break-all"
                    style={{ fontSize: b.word.length > 5 ? '11px' : b.word.length > 3 ? '13px' : '15px' }}
                  >
                    {b.word}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={backToInput}
              className="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600 font-medium"
            >
              ← 重新編輯氣泡內容
            </button>
          </>
        )}

        {phase === 'done' && (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-warm-text font-bold text-lg mb-1">你把所有壓力都戳破了！</p>
            <p className="text-sub-text text-sm mb-6">輕多了吧？</p>
            <div className="flex gap-3">
              <button onClick={backToInput} className="btn-outline flex-1">再來一輪</button>
              <button onClick={onClose} className="btn-primary flex-1">關閉</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── 種花朵遊戲（草皮花圃版）──────────────────────────────────────────────
const FLOWER_TYPES = ['🌷', '🌸', '🌻', '🌺', '🌼']
const NEAR_RADIUS = 28           // 點擊判定為「同一棵」的半徑（px）
const MAX_STAGE = 2              // 0:🌱 → 1:🌿 → 2:盛開
const MAX_PLANTS = 40            // 上限避免太擁擠

function GrowFlower({ onClose }) {
  const [plants, setPlants] = useState([])
  const [hint, setHint] = useState(null) // { id, type } — 短暫的「+水」浮字
  const idRef = useRef(0)

  const handleGardenClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // 找最接近、且尚未盛開的植物
    let nearestIdx = -1
    let minDist = Infinity
    plants.forEach((p, i) => {
      if (p.stage >= MAX_STAGE) return
      const dist = Math.hypot(p.x - x, p.y - y)
      if (dist < NEAR_RADIUS && dist < minDist) {
        minDist = dist
        nearestIdx = i
      }
    })

    if (nearestIdx >= 0) {
      // 灌溉現有植物
      const target = plants[nearestIdx]
      setPlants(prev => prev.map((p, i) => i === nearestIdx ? { ...p, stage: Math.min(p.stage + 1, MAX_STAGE) } : p))
      flashHint(target.id, 'water')
    } else if (plants.length < MAX_PLANTS) {
      // 種一棵新的
      idRef.current += 1
      const newPlant = {
        id: idRef.current,
        x, y,
        stage: 0,
        flower: FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)],
      }
      setPlants(prev => [...prev, newPlant])
      flashHint(newPlant.id, 'plant')
    }
  }

  const flashHint = (id, type) => {
    setHint({ id, type, key: Date.now() })
    setTimeout(() => setHint(null), 700)
  }

  const reset = () => {
    setPlants([])
    setHint(null)
  }

  const getEmoji = (p) => {
    if (p.stage === 0) return '🌱'
    if (p.stage === 1) return '🌿'
    return p.flower
  }

  const bloomed = plants.filter(p => p.stage === MAX_STAGE).length
  const growing = plants.length - bloomed

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <style>{`
        @keyframes gf-pop { 0%{transform:translate(-50%,-50%) scale(0)} 60%{transform:translate(-50%,-50%) scale(1.25)} 100%{transform:translate(-50%,-50%) scale(1)} }
        @keyframes gf-bloom { 0%{transform:translate(-50%,-50%) scale(0.6) rotate(-12deg)} 60%{transform:translate(-50%,-50%) scale(1.3) rotate(8deg)} 100%{transform:translate(-50%,-50%) scale(1) rotate(0deg)} }
        @keyframes gf-drop { 0%{transform:translate(-50%,0) scale(0.4);opacity:0} 30%{opacity:1} 100%{transform:translate(-50%,-26px) scale(1);opacity:0} }
      `}</style>

      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-1 text-center">種花朵遊戲</h3>
        <p className="text-sub-text text-xs sm:text-sm mb-4 text-center">
          點草皮種花 → 點同一處灌溉 → <span className="text-rose-500 font-semibold">三下</span>就會盛開
        </p>

        {/* 草皮花圃 */}
        <div
          onClick={handleGardenClick}
          className="relative h-72 rounded-2xl overflow-hidden cursor-pointer mb-4 select-none"
          style={{
            background: 'linear-gradient(180deg, #d6f5dd 0%, #a8e6b8 60%, #7dd396 100%)',
            boxShadow: 'inset 0 2px 12px rgba(0,80,30,0.12)',
          }}
        >
          {/* 草皮紋理 */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 22%, #6cba84 0px, transparent 3px),' +
                'radial-gradient(circle at 68% 58%, #5fae7a 0px, transparent 3px),' +
                'radial-gradient(circle at 38% 82%, #6cba84 0px, transparent 3px),' +
                'radial-gradient(circle at 88% 30%, #5fae7a 0px, transparent 3px),' +
                'radial-gradient(circle at 22% 70%, #5fae7a 0px, transparent 2px),' +
                'radial-gradient(circle at 78% 12%, #6cba84 0px, transparent 2px)',
              backgroundSize: '90px 90px',
            }}
          />

          {/* 已種植的植物 */}
          {plants.map(p => (
            <div
              key={p.id}
              className="absolute pointer-events-none"
              style={{
                left: p.x,
                top: p.y,
                transform: 'translate(-50%, -50%)',
                fontSize: p.stage === 2 ? '32px' : p.stage === 1 ? '26px' : '20px',
                animation: p.stage === 2 ? 'gf-bloom 0.5s cubic-bezier(0.34,1.56,0.64,1)' : 'gf-pop 0.35s ease-out',
                filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.18))',
                lineHeight: 1,
              }}
            >
              {getEmoji(p)}
            </div>
          ))}

          {/* 灌溉/種植提示 */}
          {hint && plants.find(p => p.id === hint.id) && (() => {
            const p = plants.find(pp => pp.id === hint.id)
            return (
              <div
                key={hint.key}
                className="absolute pointer-events-none text-base font-bold"
                style={{
                  left: p.x,
                  top: p.y - 14,
                  color: hint.type === 'water' ? '#3b82f6' : '#f59e0b',
                  animation: 'gf-drop 0.7s ease-out forwards',
                  textShadow: '0 1px 2px rgba(255,255,255,0.7)',
                }}
              >
                {hint.type === 'water' ? '💧' : '✨'}
              </div>
            )
          })()}

          {/* 起始提示 */}
          {plants.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-3xl mb-1">👆</div>
                <p className="text-green-800/70 font-semibold text-sm">點草皮任意位置開始種花</p>
              </div>
            </div>
          )}
        </div>

        {/* 統計列 */}
        <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-2xl px-4 py-2.5 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-green-700">
            <span>🌱 <strong>{growing}</strong> 棵成長中</span>
            <span className="text-green-300">|</span>
            <span>🌸 <strong>{bloomed}</strong> 朵盛開</span>
          </div>
          {plants.length > 0 && (
            <button
              onClick={reset}
              className="text-rose-500 hover:text-rose-600 font-medium"
            >
              重置
            </button>
          )}
        </div>

        {/* 5 種花朵預覽 */}
        <div className="flex items-center justify-center gap-2 mb-4 text-xs text-gray-500">
          <span>會盛開的花朵：</span>
          {FLOWER_TYPES.map((f, i) => <span key={i} className="text-lg">{f}</span>)}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-6 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium"
        >
          關閉
        </button>
      </div>
    </div>
  )
}

// ─── 主卡片 ────────────────────────────────────────────────────────────────
export default function SupportToolCard({ tool }) {
  const [activeModal, setActiveModal] = useState(null)
  const openModal = () => setActiveModal(tool.action)
  const closeModal = () => setActiveModal(null)

  return (
    <>
      <div className={`card-base border ${tool.borderColor} ${tool.bgColor} card-hover p-6 flex flex-col`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{tool.emoji}</div>
          <div>
            <h3 className="font-bold text-warm-text text-base mb-1">{tool.title}</h3>
          </div>
        </div>
        <p className="text-sub-text text-sm leading-relaxed mb-4 flex-1">{tool.description}</p>
        <button
          onClick={openModal}
          className={`w-full text-white text-sm font-medium py-2.5 px-4 rounded-full ${tool.btnColor} transition-all shadow-sm hover:shadow-md mt-auto`}
        >
          {tool.buttonLabel}
        </button>
      </div>

      {activeModal === 'breathing'   && <BreathingExercise onClose={closeModal} />}
      {activeModal === 'emotion'     && <EmotionPunch      onClose={closeModal} />}
      {activeModal === 'buncard'     && <BunFlipCard        onClose={closeModal} />}
      {activeModal === 'throwstress' && <ThrowStress        onClose={closeModal} />}
      {activeModal === 'bubblepop'   && <BubblePop          onClose={closeModal} />}
      {activeModal === 'growflower'  && <GrowFlower         onClose={closeModal} />}
    </>
  )
}
