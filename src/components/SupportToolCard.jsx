import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { bunCards, emotionPunchData } from '../data'

async function copyText(text) {
  if (!text) return false
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // fallback below
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    return true
  } catch {
    return false
  }
}

// ───────────────────────────────────────────────────────────────
// Modal shell (Portal) — 避免被外層 transform/overflow/z-index 擋住
// ───────────────────────────────────────────────────────────────
function ModalPortal({ children, onBackdrop }) {
  const node = (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="關閉"
        onClick={onBackdrop}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-default"
        style={{ border: 'none' }}
      />
      {/* content */}
      <div className="relative z-[10000] w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  )

  // SSR safety (如果未來有 SSR)
  if (typeof document === 'undefined') return null
  return createPortal(node, document.body)
}

// ─── 呼吸練習 ────────────────────────────────────────────────────────
function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState('idle') // idle | inhale | hold | exhale | done
  const [count, setCount] = useState(0)
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
  const circleSize =
    phase === 'inhale' ? 'scale-125'
      : phase === 'exhale' ? 'scale-75'
        : 'scale-100'

  return (
    <ModalPortal onBackdrop={onClose}>
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl pointer-events-auto">
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
            <div
              className={`w-28 h-28 rounded-full ${currentPhase.color} flex flex-col items-center justify-center
              transition-transform duration-1000 ease-in-out ${circleSize} shadow-lg`}
            >
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
          <button onClick={onClose} className="flex-1 py-2.5 px-6 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">
            關閉
          </button>
        </div>
      </div>
    </ModalPortal>
  )
}

// ─── 情緒戳戳樂 ───────────────────────────────────────────────────────
function EmotionPunch({ onClose }) {
  const [selected, setSelected] = useState(null)

  return (
    <ModalPortal onBackdrop={onClose}>
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl pointer-events-auto">
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
                <button
                  key={e.id}
                  onClick={() => setSelected(e)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-xs text-sub-text">{e.name}</span>
                </button>
              ))}
            </div>
            <button onClick={onClose} className="w-full py-2 rounded-full border border-gray-200 text-sub-text text-sm hover:bg-gray-50">
              關閉
            </button>
          </>
        )}
      </div>
    </ModalPortal>
  )
}

// ─── 包子翻翻卡 ───────────────────────────────────────────────────────
function BunFlipCard({ onClose }) {
  const [flipped, setFlipped] = useState(null)

  const pick = () => {
    const idx = Math.floor(Math.random() * bunCards.length)
    setFlipped(bunCards[idx])
  }

  return (
    <ModalPortal onBackdrop={onClose}>
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl pointer-events-auto">
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
          <button onClick={pick} className="btn-primary flex-1">{flipped ? '再翻
