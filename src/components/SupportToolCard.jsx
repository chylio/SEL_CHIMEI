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

// ─── 把壓力丟出去（全新 UI/UX 版）────────────────────────────────────────
function ThrowStress({ onClose }) {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('input') // 'input' | 'throwing' | 'caught'
  const [catcherActive, setCatcherActive] = useState(false)
  const [response, setResponse] = useState(null)
  const throwCount = useRef(0)

  const handleThrow = () => {
    if (!text.trim()) return
    // 每次丟出隨機選一組（不重複上次）
    let idx
    do { idx = Math.floor(Math.random() * catchResponses.length) } while (catchResponses[idx] === response)
    setResponse(catchResponses[idx])
    throwCount.current += 1
    setPhase('throwing')
    setTimeout(() => setCatcherActive(true), 900)
    setTimeout(() => setPhase('caught'), 1500)
  }

  const handleReset = () => {
    setText('')
    setCatcherActive(false)
    setPhase('input')
  }

  const displayText = text.length > 12 ? text.substring(0, 12) + '…' : text

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <style>{`
        /* ── 球動畫 ── */
        @keyframes ts-x { from { transform: translateX(0) } to { transform: translateX(195px) } }
        @keyframes ts-y { 0%{transform:translateY(0)} 42%{transform:translateY(-88px)} 100%{transform:translateY(8px)} }
        @keyframes ts-spin { from{transform:rotate(0deg)scale(1)} to{transform:rotate(640deg)scale(0.78)} }
        /* ── 接球者 ── */
        @keyframes ts-catch { 0%,100%{transform:scale(1)translateY(0)} 35%{transform:scale(1.3)translateY(-12px)} 65%{transform:scale(0.92)translateY(3px)} }
        /* ── 結果卡 ── */
        @keyframes ts-pop { 0%{transform:scale(0.8)translateY(12px);opacity:0} 60%{transform:scale(1.03)translateY(-2px);opacity:1} 100%{transform:scale(1)translateY(0);opacity:1} }
        /* ── 淡入上滑 ── */
        @keyframes ts-up { from{transform:translateY(16px);opacity:0} to{transform:translateY(0);opacity:1} }
        /* ── 星星閃爍 ── */
        @keyframes ts-twinkle { 0%,100%{opacity:0.25;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.15)} }
        /* ── 光環波動 ── */
        @keyframes ts-ring { 0%{transform:scale(0.9);opacity:0.6} 100%{transform:scale(1.6);opacity:0} }
      `}</style>

      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden relative">

        {/* ══ 頂部漸層 Banner ══ */}
        <div className={`relative overflow-hidden px-7 pt-8 pb-6 text-white text-center
          ${phase === 'caught' && response
            ? `bg-gradient-to-br ${response.accent}`
            : 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500'}`}
          style={{ transition: 'background 0.8s ease' }}
        >
          {/* 背景裝飾圓 */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />

          {/* 主 emoji（帶光環） */}
          <div className="relative inline-flex items-center justify-center mb-3">
            {phase === 'caught' && (
              <>
                <div className="absolute w-20 h-20 rounded-full bg-white/25"
                  style={{ animation: 'ts-ring 1.2s ease-out 0.1s both' }} />
                <div className="absolute w-20 h-20 rounded-full bg-white/15"
                  style={{ animation: 'ts-ring 1.2s ease-out 0.35s both' }} />
              </>
            )}
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shadow-inner">
              {phase === 'input' && '✍️'}
              {phase === 'throwing' && '🌀'}
              {phase === 'caught' && (response?.emoji ?? '🫂')}
            </div>
          </div>

          <h3 className="font-black text-xl tracking-tight leading-tight">
            {phase === 'input' && '把壓力丟出去'}
            {phase === 'throwing' && '飛出去了…'}
            {phase === 'caught' && (response?.title ?? '接住了')}
          </h3>
          <p className="text-white/75 text-xs mt-1.5 font-medium">
            {phase === 'input' && '寫下讓你喘不過氣的，我們來接住它'}
            {phase === 'throwing' && '有人正在趕來接住你的重量 🙌'}
            {phase === 'caught' && (response?.note ?? '你不是一個人扛著它。')}
          </p>
        </div>

        {/* ══ 內容區 ══ */}
        <div className="px-6 py-6">

          {/* ── 輸入階段 ── */}
          {phase === 'input' && (
            <div style={{ animation: 'ts-up 0.4s ease-out both' }}>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                不需要整理成完整的句子，<br />
                只要把那個<span className="text-teal-600 font-semibold">讓你悶著的感覺</span>說出來就好。
              </p>

              {/* 文字輸入框（質感設計） */}
              <div className="relative mb-5">
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="今天讓我最累的是……"
                  rows={4}
                  maxLength={120}
                  className="w-full bg-gray-50 border-2 border-gray-100 focus:border-teal-300 rounded-2xl p-4 text-sm text-gray-700 resize-none outline-none transition-colors leading-relaxed placeholder:text-gray-300"
                />
                <span className="absolute bottom-3 right-4 text-xs text-gray-300 select-none">
                  {text.length}/120
                </span>
              </div>

              {/* 投擲按鈕 */}
              <button
                onClick={handleThrow}
                disabled={!text.trim()}
                className={`w-full py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200
                  ${text.trim()
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 hover:-translate-y-0.5 active:scale-95'
                    : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
              >
                {text.trim() ? '💨  用力丟出去！' : '先寫點什麼吧…'}
              </button>

              <button onClick={onClose}
                className="w-full mt-3 py-2.5 text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
                先不用，關閉
              </button>
            </div>
          )}

          {/* ── 拋物線動畫階段 ── */}
          {phase === 'throwing' && (
            <div className="relative h-44 select-none">
              {/* 虛線弧形軌跡 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 176" style={{ pointerEvents: 'none' }}>
                <path d="M 44 140 Q 148 10 256 136"
                  stroke="#5eead4" strokeWidth="2" fill="none"
                  strokeDasharray="6,5" strokeLinecap="round" opacity="0.35" />
                {/* 星點裝飾 */}
                {[[80,60],[148,22],[210,55]].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="#2dd4bf" opacity="0.5"
                    style={{ animation: `ts-twinkle 1s ease-in-out ${i * 0.22}s infinite` }} />
                ))}
              </svg>

              {/* 壓力球（拋物線） */}
              <div style={{
                position: 'absolute', bottom: 32, left: 28,
                animation: 'ts-x 1.1s cubic-bezier(0.25,0.46,0.45,0.94) forwards'
              }}>
                <div style={{ animation: 'ts-y 1.1s cubic-bezier(0.33,0,0.55,1) forwards' }}>
                  <div style={{ animation: 'ts-spin 1.1s linear forwards' }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center shadow-xl shadow-orange-200">
                    <span className="text-white text-center font-semibold leading-tight px-1.5"
                      style={{ fontSize: '8px', maxWidth: '44px', wordBreak: 'break-all', display: 'block' }}>
                      {displayText}
                    </span>
                  </div>
                </div>
              </div>

              {/* 你（左） */}
              <div className="absolute left-0 bottom-2 flex flex-col items-center gap-0.5">
                <div className="text-3xl" style={{ transform: 'scaleX(-1)' }}>🧑‍⚕️</div>
                <span className="text-xs text-gray-400 font-medium">你</span>
              </div>

              {/* 接球者（右） */}
              <div className="absolute right-1 bottom-1 flex flex-col items-center gap-0.5">
                <div className="text-4xl leading-none"
                  style={catcherActive ? { animation: 'ts-catch 0.6s ease-out both' } : {}}>
                  {catcherActive ? '🫂' : '🙌'}
                </div>
                <span className="text-xs font-semibold"
                  style={{ color: catcherActive ? '#0d9488' : '#9ca3af' }}>
                  {catcherActive ? '接到了！' : '我在這！'}
                </span>
              </div>

              {/* 飛行提示 */}
              <p className="absolute top-1 left-0 right-0 text-center text-teal-500 text-xs font-semibold tracking-wide">
                ✦ 飛出去了，有人來接 ✦
              </p>
            </div>
          )}

          {/* ── 接住完成階段 ── */}
          {phase === 'caught' && response && (
            <div style={{ animation: 'ts-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) both' }}>

              {/* 承接語卡片 */}
              <div className={`${response.tagBg} border ${response.tagBorder} rounded-2xl p-5 mb-4`}>
                {/* 壓力文字（劃掉） */}
                <div className="flex items-start gap-2 mb-3 pb-3 border-b border-dashed" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                  <span className="text-xs text-gray-400 shrink-0 mt-0.5">已丟出</span>
                  <p className="text-gray-500 text-sm font-medium leading-snug"
                    style={{ textDecoration: 'line-through', textDecorationColor: '#34d399', textDecorationThickness: '2px' }}>
                    {text}
                  </p>
                </div>
                {/* 隨機承接語（多行支援） */}
                {response.message.split('\n').map((line, i) => (
                  <p key={i} className={`text-sm leading-relaxed font-medium ${response.tagText} ${i > 0 ? 'mt-1.5' : ''}`}>
                    {line}
                  </p>
                ))}
              </div>

              {/* 小 footer 提示 */}
              <div className="flex items-center justify-center gap-1.5 mb-5">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-gray-400 text-xs font-medium px-1">你已經丟了 {throwCount.current} 個重量</span>
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
                    bg-gradient-to-r ${response.accent} shadow-teal-200 hover:shadow-xl`}>
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
const BUBBLE_LIST = [
  { id: 1, word: '焦慮', color: 'bg-sky-200',    size: 'w-20 h-20', delay: '0s'   },
  { id: 2, word: '煩躁', color: 'bg-pink-200',   size: 'w-16 h-16', delay: '0.2s' },
  { id: 3, word: '疲憊', color: 'bg-violet-200', size: 'w-24 h-24', delay: '0.4s' },
  { id: 4, word: '壓力', color: 'bg-amber-200',  size: 'w-20 h-20', delay: '0.6s' },
  { id: 5, word: '緊張', color: 'bg-teal-200',   size: 'w-16 h-16', delay: '0.8s' },
  { id: 6, word: '委屈', color: 'bg-rose-200',   size: 'w-24 h-24', delay: '1s'   },
  { id: 7, word: '不安', color: 'bg-sky-300',    size: 'w-20 h-20', delay: '0.3s' },
  { id: 8, word: '煩悶', color: 'bg-purple-200', size: 'w-16 h-16', delay: '0.7s' },
  { id: 9, word: '擔心', color: 'bg-green-200',  size: 'w-24 h-24', delay: '0.5s' },
]

function BubblePop({ onClose }) {
  const [bubbles, setBubbles] = useState(BUBBLE_LIST.map(b => ({ ...b, popped: false, popping: false })))
  const [done, setDone] = useState(false)

  const pop = (id) => {
    setBubbles(prev => prev.map(b => b.id === id ? { ...b, popping: true } : b))
    setTimeout(() => {
      setBubbles(prev => {
        const next = prev.map(b => b.id === id ? { ...b, popped: true } : b)
        if (next.every(b => b.popped)) setDone(true)
        return next
      })
    }, 300)
  }

  const reset = () => {
    setBubbles(BUBBLE_LIST.map(b => ({ ...b, popped: false, popping: false })))
    setDone(false)
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2 text-center">戳氣泡紓壓</h3>
        <p className="text-sub-text text-sm mb-6 text-center">點擊氣泡，把壓力一顆一顆戳破！</p>
        {done ? (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-warm-text font-bold text-lg mb-1">你把所有壓力都戳破了！</p>
            <p className="text-sub-text text-sm mb-6">輕多了吧？</p>
            <div className="flex gap-3">
              <button onClick={reset} className="btn-outline flex-1">再來一輪</button>
              <button onClick={onClose} className="btn-primary flex-1">關閉</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center items-center min-h-48">
            {bubbles.map(b => !b.popped && (
              <button
                key={b.id}
                onClick={() => pop(b.id)}
                style={{ animationDelay: b.delay }}
                className={`${b.size} ${b.color} rounded-full flex items-center justify-center font-bold text-sm text-gray-700 shadow-md cursor-pointer transition-all duration-300 ${b.popping ? 'scale-0 opacity-0' : 'animate-bounce scale-100 opacity-100'}`}
              >
                {b.word}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── 種花朵遊戲 ────────────────────────────────────────────────────────────
const FLOWER_STAGES = ['🌱', '🌿', '🌷', '🌸']

function GrowFlower({ onClose }) {
  const [flowers, setFlowers] = useState([0, 0, 0, 0, 0])
  const [watering, setWatering] = useState(null)

  const water = (idx) => {
    if (flowers[idx] >= 3) return
    setWatering(idx)
    setTimeout(() => {
      setFlowers(prev => prev.map((f, i) => i === idx ? Math.min(f + 1, 3) : f))
      setWatering(null)
    }, 300)
  }

  const bloomed = flowers.filter(f => f === 3).length
  const done = bloomed === 5

  const reset = () => setFlowers([0, 0, 0, 0, 0])

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2 text-center">種花朵遊戲</h3>
        <p className="text-sub-text text-sm mb-4 text-center">澆水讓每朵花慢慢開放</p>
        {done ? (
          <div className="text-center py-4">
            <div className="text-5xl mb-4">🌺🌸🌼</div>
            <p className="text-warm-text font-bold text-lg mb-1">花圃種滿了！</p>
            <p className="text-sub-text text-sm mb-6">你也值得被這樣溫柔對待 🌸</p>
            <div className="flex gap-3">
              <button onClick={reset} className="btn-outline flex-1">再種一次</button>
              <button onClick={onClose} className="btn-primary flex-1">關閉</button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <div className="flex justify-between text-xs text-sub-text mb-1.5">
                <span>開花進度</span>
                <span>{bloomed} / 5</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-400 rounded-full transition-all duration-500"
                  style={{ width: `${(bloomed / 5) * 100}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {flowers.map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`text-3xl transition-transform duration-300 ${watering === idx ? 'scale-125' : 'scale-100'}`}>
                    {FLOWER_STAGES[stage]}
                  </div>
                  <button
                    onClick={() => water(idx)}
                    disabled={stage === 3}
                    className={`text-xs px-2 py-1 rounded-full transition-all ${stage === 3 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-rose-100 hover:bg-rose-200 text-rose-600'}`}
                  >
                    💧
                  </button>
                </div>
              ))}
            </div>
            <button onClick={onClose} className="w-full py-2.5 px-6 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">關閉</button>
          </>
        )}
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
