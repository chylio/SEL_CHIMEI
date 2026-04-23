import { useEffect, useMemo, useRef, useState } from 'react'
import { bunCards, emotionPunchData } from '../data'

// ─────────────────────────────────────────────────────────────────────────────
// 小工具：安全複製文字
function copyText(text) {
  if (!text) return Promise.resolve(false)
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false)
  }
  // fallback
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    return Promise.resolve(true)
  } catch {
    return Promise.resolve(false)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 呼吸練習 ────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// ─── 情緒戳戳樂 ────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// ─── 包子翻翻卡 ────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// ─── 把壓力丟出去（強化：被接住的回饋）────────────────────────────────────────
function ThrowStress({ onClose }) {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('idle') // idle | throwing | caught | done

  const message = useMemo(() => {
    const msgs = [
      '我接住了，你可以先放下。',
      '你已經很努力了，這些重量先交給我。',
      '收到。你不是一個人扛著。',
      '辛苦了，先把它放在這裡。',
    ]
    return msgs[Math.floor(Math.random() * msgs.length)]
  }, [phase])

  const canThrow = text.trim().length > 0

  const startThrow = () => {
    if (!canThrow) return
    setPhase('throwing')
    window.setTimeout(() => setPhase('caught'), 650)
    window.setTimeout(() => setPhase('done'), 1400)
  }

  const reset = () => {
    setText('')
    setPhase('idle')
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl overflow-hidden">
        <h3 className="font-bold text-warm-text text-xl mb-2 text-center">把壓力丟出去</h3>
        <p className="text-sub-text text-sm mb-4 text-center">寫下讓你煩躁或疲累的事，再把它丟掉</p>

        <div className="relative h-28 rounded-2xl border border-gray-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 mb-4 overflow-hidden">
          <div
            className={`absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full
              ${phase === 'caught' || phase === 'done' ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}
              transition-all duration-500`}
            style={{
              background: 'radial-gradient(circle, rgba(45,212,191,0.35), rgba(45,212,191,0.0) 70%)',
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl select-none">🤲</div>

          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl select-none"
            style={{
              transform:
                phase === 'idle'
                  ? 'translate(0px, -50%)'
                  : phase === 'throwing'
                    ? 'translate(170px, -64px) rotate(25deg)'
                    : phase === 'caught'
                      ? 'translate(235px, -50%) scale(0.9)'
                      : 'translate(235px, -50%) scale(0.0)',
              transition:
                phase === 'throwing'
                  ? 'transform 650ms cubic-bezier(0.2, 0.9, 0.2, 1)'
                  : 'transform 500ms ease',
            }}
          >
            🫧
          </div>

          <div
            className={`absolute left-0 right-0 bottom-3 text-center text-xs font-semibold
              ${phase === 'caught' || phase === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              transition-all duration-400`}
            style={{ color: '#0f766e' }}
          >
            {message}
          </div>
        </div>

        {phase === 'done' ? (
          <div className="text-center py-1">
            <div className="text-5xl mb-3">🌿</div>
            <p className="font-bold text-warm-text text-lg mb-2">已接住了</p>
            <p className="text-sub-text text-sm mb-5">你願意丟出來就很不容易了。先深呼吸一下。</p>
            <div className="flex gap-3">
              <button onClick={reset} className="btn-outline flex-1 text-sm">繼續丟</button>
              <button onClick={onClose} className="btn-primary flex-1 text-sm">好多了，謝謝</button>
            </div>
          </div>
        ) : (
          <>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="今天讓我最煩的是……"
              rows={4}
              className="w-full border border-gray-200 rounded-xl p-3 text-sm text-warm-text resize-none focus:outline-none focus:border-amber-300 mb-4"
              disabled={phase === 'throwing' || phase === 'caught'}
            />
            <div className="flex gap-3">
              <button
                onClick={startThrow}
                disabled={!canThrow || phase !== 'idle'}
                className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all
                  ${canThrow && phase === 'idle' ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                🗑️ 丟出去！
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm"
                disabled={phase === 'throwing' || phase === 'caught'}
              >
                關閉
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 新遊戲 1：種花花園（可分享）──────────────────────────────────────────────
function PlantGarden({ onClose }) {
  const [seed, setSeed] = useState('🌷')
  const [cells, setCells] = useState(() => Array.from({ length: 36 }, () => null)) // 6x6
  const [toast, setToast] = useState('')

  const seeds = ['🌷', '🌼', '🌻', '🌸', '🪻', '🍀']

  const plantAt = (idx) => {
    setCells((prev) => {
      const next = [...prev]
      next[idx] = next[idx] ? null : seed
      return next
    })
  }

  const clear = () => setCells(Array.from({ length: 36 }, () => null))

  const share = async () => {
    // 產出簡單的文字花圃（保底分享）
    const lines = []
    for (let r = 0; r < 6; r++) {
      const row = cells.slice(r * 6, r * 6 + 6).map(c => c || '⬜').join('')
      lines.push(row)
    }
    const text = `送你一個小花園 🌿\n\n${lines.join('\n')}\n\n#SEL_CHIMEI`
    const ok = await copyText(text)
    setToast(ok ? '已複製花圃到剪貼簿，可以貼到 Line/訊息分享～' : '複製失敗，可能瀏覽器不支援剪貼簿')
    window.setTimeout(() => setToast(''), 2400)
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-1 text-center">種花紓壓小花園</h3>
        <p className="text-sub-text text-sm mb-4 text-center">選一種花，點格子種下去。再點一次可拔掉。</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {seeds.map(s => (
            <button
              key={s}
              onClick={() => setSeed(s)}
              className={`px-3 py-1.5 rounded-full border text-sm font-semibold transition-all
                ${seed === s ? 'border-rose-300 bg-rose-50 text-rose-700' : 'border-gray-200 bg-white text-sub-text hover:bg-gray-50'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-2 bg-gradient-to-br from-rose-50 via-white to-green-50 border border-gray-100 rounded-2xl p-3 mb-4">
          {cells.map((c, idx) => (
            <button
              key={idx}
              onClick={() => plantAt(idx)}
              className="h-10 rounded-xl border border-white bg-white/70 hover:bg-white transition-colors text-xl flex items-center justify-center"
              style={{ animation: c ? 'stressPop 260ms ease-out' : undefined }}
            >
              {c || ' '}
            </button>
          ))}
        </div>

        {toast && (
          <div className="mb-3 text-center text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-xl p-2" style={{ animation: 'floatUp 220ms ease-out' }}>
            {toast}
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={share} className="btn-primary flex-1 text-sm">分享花圃</button>
          <button onClick={clear} className="btn-outline flex-1 text-sm">清空</button>
        </div>

        <button onClick={onClose} className="w-full mt-3 py-2.5 rounded-full border border-gray-200 text-sub-text text-sm hover:bg-gray-50">
          關閉
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 新遊戲 2：拳擊沙包 ───────────────────────────────────────────────────────
function BoxingGame({ onClose }) {
  const [hits, setHits] = useState(0)
  const [combo, setCombo] = useState(0)
  const [lastHitAt, setLastHitAt] = useState(0)
  const [shake, setShake] = useState(false)
  const [burst, setBurst] = useState(false)

  const hit = () => {
    const now = Date.now()
    const isCombo = now - lastHitAt < 800
    setHits((h) => h + 1)
    setCombo((c) => (isCombo ? c + 1 : 1))
    setLastHitAt(now)
    setShake(true)
    setBurst(true)
    window.setTimeout(() => setShake(false), 180)
    window.setTimeout(() => setBurst(false), 220)
  }

  const reset = () => {
    setHits(0)
    setCombo(0)
    setLastHitAt(0)
  }

  const comboLabel =
    combo >= 12 ? '爆擊節奏！' :
    combo >= 7 ? '很順！' :
    combo >= 3 ? '繼續！' :
    combo >= 1 ? '出拳！' : ''

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center">
        <h3 className="font-bold text-warm-text text-xl mb-1">拳擊紓壓沙包</h3>
        <p className="text-sub-text text-sm mb-4">點擊沙包出拳。越連續，連擊越高。</p>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-4 py-2">
            <div className="text-xs text-sub-text">出拳</div>
            <div className="text-xl font-black text-orange-600">{hits}</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-2">
            <div className="text-xs text-sub-text">連擊</div>
            <div className="text-xl font-black text-amber-600">{combo}</div>
          </div>
        </div>

        <button
          onClick={hit}
          className="relative w-full h-40 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 border border-gray-100 flex items-center justify-center select-none"
        >
          {/* burst */}
          {burst && (
            <div
              className="absolute w-24 h-24 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(251,146,60,0.35), rgba(251,146,60,0.0) 70%)',
                animation: 'pingSoft 420ms ease-out',
              }}
            />
          )}

          <div
            className="text-7xl"
            style={{
              transform: shake ? 'translateX(-6px) rotate(-6deg)' : 'translateX(0px) rotate(0deg)',
              transition: 'transform 180ms ease',
            }}
          >
            🥊
          </div>

          <div className="absolute bottom-3 left-0 right-0 text-xs font-semibold" style={{ color: '#c2410c' }}>
            {comboLabel}
          </div>
        </button>

        <div className="flex gap-2 mt-4">
          <button onClick={reset} className="btn-outline flex-1 text-sm">重置</button>
          <button onClick={onClose} className="btn-primary flex-1 text-sm">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 新遊戲 3：泡泡紙 ─────────────────────────────────────────────────────────
function BubblePop({ onClose }) {
  const make = () => Array.from({ length: 40 }, (_, i) => ({ id: i + 1, popped: false }))
  const [bubbles, setBubbles] = useState(make)
  const poppedCount = bubbles.filter(b => b.popped).length

  const pop = (id) => {
    setBubbles((prev) => prev.map(b => (b.id === id ? { ...b, popped: true } : b)))
  }

  const reset = () => setBubbles(make())

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-1 text-center">泡泡紙解壓</h3>
        <p className="text-sub-text text-sm mb-4 text-center">把泡泡一顆顆戳掉。你不需要做很多，戳幾顆也可以。</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-sub-text">已戳破</span>
          <span className="text-xs font-bold text-muted-orange">{poppedCount} / {bubbles.length}</span>
        </div>

        <div className="grid grid-cols-8 gap-2 bg-sky-50/60 border border-sky-100 rounded-2xl p-3 mb-4">
          {bubbles.map(b => (
            <button
              key={b.id}
              onClick={() => pop(b.id)}
              disabled={b.popped}
              className={`h-7 rounded-full border transition-all
                ${b.popped ? 'bg-gray-100 border-gray-200 cursor-not-allowed' : 'bg-white border-sky-200 hover:bg-sky-50'}`}
              style={{ animation: !b.popped ? undefined : 'stressPop 200ms ease-out' }}
              title={b.popped ? '已戳破' : '戳我'}
            >
              {!b.popped ? ' ' : ' '}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={reset} className="btn-outline flex-1 text-sm">重置泡泡</button>
          <button onClick={onClose} className="btn-primary flex-1 text-sm">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 新遊戲 4：敲鐘慢呼吸 ─────────────────────────────────────────────────────
function ChimeBreath({ onClose }) {
  const [count, setCount] = useState(0)
  const [toast, setToast] = useState('')

  const ring = () => {
    const next = Math.min(3, count + 1)
    setCount(next)

    if (next === 1) setToast('第 1 次：慢慢吸氣…')
    if (next === 2) setToast('第 2 次：停一下，再吐氣…')
    if (next === 3) setToast('第 3 次：很好，回到當下。')

    window.setTimeout(() => setToast(''), 1600)
  }

  const reset = () => setCount(0)

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center overflow-hidden">
        <h3 className="font-bold text-warm-text text-xl mb-1">敲一下，讓心慢下來</h3>
        <p className="text-sub-text text-sm mb-4">敲 3 次，每一次都做一次慢呼吸。</p>

        <div className="relative w-full h-44 rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-sky-50 flex items-center justify-center mb-3 overflow-hidden">
          {/* pulse ring */}
          {toast && (
            <div
              className="absolute w-40 h-40 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(20,184,166,0.25), rgba(20,184,166,0.0) 70%)',
                animation: 'pingSoft 520ms ease-out',
              }}
            />
          )}

          <button
            onClick={ring}
            className="w-28 h-28 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            style={{ animation: toast ? 'stressPop 220ms ease-out' : undefined }}
          >
            <span className="text-6xl">🔔</span>
          </button>

          <div className="absolute bottom-3 left-0 right-0 text-xs font-semibold text-teal-700">
            {count}/3 次
          </div>
        </div>

        {toast && (
          <div className="mb-3 text-center text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-xl p-2" style={{ animation: 'floatUp 220ms ease-out' }}>
            {toast}
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={reset} className="btn-outline flex-1 text-sm">重置</button>
          <button onClick={onClose} className="btn-primary flex-1 text-sm">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
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

      {/* 新增 4 個遊戲 modal */}
      {activeModal === 'plant' && <PlantGarden onClose={closeModal} />}
      {activeModal === 'boxing' && <BoxingGame onClose={closeModal} />}
      {activeModal === 'bubble' && <BubblePop onClose={closeModal} />}
      {activeModal === 'chime' && <ChimeBreath onClose={closeModal} />}
    </>
  )
}
