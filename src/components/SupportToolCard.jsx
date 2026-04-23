import { useState } from 'react'
import { stressLevelData, bunCards, emotionPunchData } from '../data'

// ─── 呼吸練習 ──────────────────────────────────────────────────────────────
function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState('idle') // idle | inhale | hold | exhale
  const [count, setCount] = useState(0)
  const [cycles, setCycles] = useState(0)
  const [timer, setTimer] = useState(null)

  const phases = [
    { key: 'inhale', label: '吸氣', duration: 4, color: 'bg-sky-400' },
    { key: 'hold', label: '停留', duration: 4, color: 'bg-amber-400' },
    { key: 'exhale', label: '吐氣', duration: 6, color: 'bg-green-400' },
  ]

  const startBreathing = () => {
    let phaseIdx = 0
    let cnt = 0
    let totalCycles = 0
    setPhase(phases[0].key)
    setCount(phases[0].duration)

    const tick = setInterval(() => {
      cnt++
      const cur = phases[phaseIdx]
      if (cnt >= cur.duration) {
        cnt = 0
        phaseIdx = (phaseIdx + 1) % phases.length
        if (phaseIdx === 0) totalCycles++
        if (totalCycles >= 3) {
          clearInterval(tick)
          setPhase('done')
          return
        }
        setPhase(phases[phaseIdx].key)
        setCount(phases[phaseIdx].duration)
      } else {
        setCount(cur.duration - cnt)
      }
    }, 1000)
    setTimer(tick)
  }

  const stop = () => {
    if (timer) clearInterval(timer)
    setPhase('idle')
    setCount(0)
  }

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
            <div className={`w-28 h-28 rounded-full ${currentPhase.color} flex flex-col items-center justify-center
              transition-transform duration-1000 ease-in-out ${circleSize} shadow-lg`}>
              <span className="text-white text-3xl font-black">{count}</span>
              <span className="text-white/90 text-sm font-semibold">{currentPhase.label}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {phase === 'idle' && (
            <button onClick={startBreathing} className="btn-primary flex-1">開始練習</button>
          )}
          {phase === 'done' && (
            <button onClick={() => { setPhase('idle'); setCount(0) }} className="btn-outline flex-1">再來一次</button>
          )}
          {currentPhase && phase !== 'idle' && phase !== 'done' && (
            <button onClick={stop} className="btn-outline flex-1">停止</button>
          )}
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
  const pick = () => {
    const idx = Math.floor(Math.random() * bunCards.length)
    setFlipped(bunCards[idx])
  }
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

// ─── 把壓力丟出去（拋物線版）─────────────────────────────────────────────
function ThrowStress({ onClose }) {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('input') // 'input' | 'throwing' | 'caught'
  const [catcherReacting, setCatcherReacting] = useState(false)

  const handleThrow = () => {
    if (!text.trim()) return
    setPhase('throwing')
    // 球飛行約 1.1s 後，接球者做出反應
    setTimeout(() => setCatcherReacting(true), 1050)
    // 1.6s 後進入「接住」完成畫面
    setTimeout(() => setPhase('caught'), 1600)
  }

  const handleReset = () => {
    setText('')
    setCatcherReacting(false)
    setPhase('input')
  }

  const displayText = text.length > 14 ? text.substring(0, 14) + '…' : text

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* CSS 動畫定義 */}
      <style>{`
        /* 水平移動（線性） */
        @keyframes ts-moveX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(210px); }
        }
        /* 垂直拋物線：先上揚後落下 */
        @keyframes ts-arcY {
          0%   { transform: translateY(0); }
          40%  { transform: translateY(-95px); }
          100% { transform: translateY(12px); }
        }
        /* 球自轉 */
        @keyframes ts-spin {
          0%   { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(660deg) scale(0.82); }
        }
        /* 接球者跳動 */
        @keyframes ts-catcherJump {
          0%, 100% { transform: scale(1) translateY(0); }
          40%      { transform: scale(1.25) translateY(-10px); }
          70%      { transform: scale(0.95) translateY(2px); }
        }
        /* 接住後整體彈出 */
        @keyframes ts-popIn {
          0%   { transform: scale(0.55); opacity: 0; }
          65%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        /* 滑入 */
        @keyframes ts-slideUp {
          0%   { transform: translateY(18px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        /* 壓力文字消失 */
        @keyframes ts-strikeIn {
          0%   { text-decoration-color: transparent; }
          100% { text-decoration-color: #4ade80; }
        }
      `}</style>

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* 頂部標題區 */}
        <div className="bg-gradient-to-r from-green-50 via-teal-50 to-emerald-50 px-8 pt-7 pb-5 text-center border-b border-green-100">
          <div className="text-3xl mb-1">
            {phase === 'input' && '💨'}
            {phase === 'throwing' && '🏀'}
            {phase === 'caught' && '🫂'}
          </div>
          <h3 className="font-bold text-warm-text text-xl">把壓力丟出去</h3>
          <p className="text-sub-text text-xs mt-1 h-4">
            {phase === 'input' && '寫下讓你煩躁的事，用力丟出去！'}
            {phase === 'throwing' && '飛出去了～有人在等著接住你 🙌'}
            {phase === 'caught' && '接住了！你不是一個人扛 💛'}
          </p>
        </div>

        <div className="px-8 py-7">
          {/* ── 輸入階段 ── */}
          {phase === 'input' && (
            <div style={{ animation: 'ts-slideUp 0.4s ease-out both' }}>
              <p className="text-sub-text text-sm mb-3 leading-relaxed">
                把今天壓著你的事情，用幾個字寫出來。<br/>
                不用完整，感受到了就好。
              </p>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="今天讓我最煩的是……"
                rows={4}
                className="w-full border border-gray-200 rounded-xl p-3 text-sm text-warm-text resize-none focus:outline-none focus:border-green-300 mb-5 transition-colors"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleThrow}
                  disabled={!text.trim()}
                  className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all
                    ${text.trim()
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow hover:shadow-md active:scale-95'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                  💨 用力丟出去！
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm transition-colors"
                >
                  關閉
                </button>
              </div>
            </div>
          )}

          {/* ── 拋物線動畫階段 ── */}
          {phase === 'throwing' && (
            <div className="relative h-48 select-none overflow-hidden">
              {/* 拋物線虛線軌跡（裝飾） */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 340 192"
                style={{ pointerEvents: 'none', opacity: 0.18 }}
              >
                <path
                  d="M 50 155 Q 165 15 290 158"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="7,5"
                  strokeLinecap="round"
                />
              </svg>

              {/* 壓力球：水平 wrapper + 垂直 wrapper + 旋轉 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '36px',
                  left: '30px',
                  animation: 'ts-moveX 1.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                }}
              >
                <div style={{ animation: 'ts-arcY 1.15s cubic-bezier(0.33, 0, 0.55, 1) forwards' }}>
                  <div
                    style={{ animation: 'ts-spin 1.15s linear forwards' }}
                    className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span
                      className="text-white font-semibold text-center leading-tight px-1"
                      style={{ fontSize: '9px', maxWidth: '52px', wordBreak: 'break-all', display: 'block' }}
                    >
                      {displayText}
                    </span>
                  </div>
                </div>
              </div>

              {/* 接球者（右側） */}
              <div className="absolute right-4 bottom-6 flex flex-col items-center gap-1">
                <div
                  className="text-4xl leading-none"
                  style={
                    catcherReacting
                      ? { animation: 'ts-catcherJump 0.55s ease-out both' }
                      : {}
                  }
                >
                  {catcherReacting ? '🫂' : '🙌'}
                </div>
                <span className="text-xs text-sub-text font-medium">
                  {catcherReacting ? '接到了！' : '我來接！'}
                </span>
              </div>

              {/* 投球者（左側） */}
              <div className="absolute left-2 bottom-4 flex flex-col items-center gap-1">
                <div className="text-3xl leading-none" style={{ transform: 'scaleX(-1)' }}>🧑‍⚕️</div>
                <span className="text-xs text-sub-text">你</span>
              </div>

              {/* 飛行提示文字 */}
              <p className="absolute top-2 left-0 right-0 text-center text-green-600 text-xs font-medium">
                ✦ 飛出去了！
              </p>
            </div>
          )}

          {/* ── 接住完成階段 ── */}
          {phase === 'caught' && (
            <div
              className="text-center"
              style={{ animation: 'ts-popIn 0.5s ease-out both' }}
            >
              <div className="text-5xl mb-3">🫂</div>
              <p className="font-bold text-warm-text text-lg mb-1">接住了！</p>

              {/* 壓力劃掉卡片 */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-4 text-left">
                <p className="text-sub-text text-xs mb-1.5">你剛才丟出去的：</p>
                <p
                  className="text-warm-text text-sm font-medium"
                  style={{
                    textDecoration: 'line-through',
                    textDecorationColor: '#4ade80',
                    textDecorationThickness: '2.5px',
                  }}
                >
                  「{text}」
                </p>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-green-700 text-xs font-medium">已被接住，不用再自己扛著了。</span>
                </div>
              </div>

              {/* 暖心訊息 */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-5">
                <p className="text-warm-text text-sm leading-relaxed">
                  說出來，就是放下的開始。<br />
                  你的重量，有人願意一起承接。<br />
                  <span className="text-amber-600 font-semibold">你不是一個人在撐。 💛</span>
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  再丟一個
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow hover:shadow-md transition-all active:scale-95"
                >
                  好多了，謝謝 🌿
                </button>
              </div>
            </div>
          )}
        </div>
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

      {activeModal === 'breathing' && <BreathingExercise onClose={closeModal} />}
      {activeModal === 'emotion' && <EmotionPunch onClose={closeModal} />}
      {activeModal === 'buncard' && <BunFlipCard onClose={closeModal} />}
      {activeModal === 'throwstress' && <ThrowStress onClose={closeModal} />}
    </>
  )
}
