import { useState } from 'react'
import StressBunCard from '../components/StressBunCard'
import { stressLevelData } from '../data'

// 依照壓力狀態決定 CTA：高壓 → 前往紓壓；輕鬆 → 持續自我支持
const ctaConfig = {
  1: {
    type: 'stress-relief',
    label: '前往紓壓',
    sub: '為自己安排一個喘息的小段落',
    emoji: '🌿',
    grad: 'linear-gradient(135deg, #FF8A6F 0%, #F25C54 100%)',
    ring: 'rgba(242, 92, 84, 0.4)',
  },
  2: {
    type: 'stress-relief',
    label: '前往紓壓',
    sub: '給自己一個短短的恢復時段',
    emoji: '🍵',
    grad: 'linear-gradient(135deg, #FFB36A 0%, #F4A261 100%)',
    ring: 'rgba(244, 162, 97, 0.4)',
  },
  3: {
    type: 'stress-relief',
    label: '前往紓壓',
    sub: '先讓自己喘口氣、找回流動感',
    emoji: '💛',
    grad: 'linear-gradient(135deg, #FFD66E 0%, #F2B544 100%)',
    ring: 'rgba(242, 181, 68, 0.4)',
  },
  4: {
    type: 'self-support',
    label: '持續自我支持',
    sub: '把好狀態變成日常的習慣',
    emoji: '💚',
    grad: 'linear-gradient(135deg, #5BC9B0 0%, #2DA890 100%)',
    ring: 'rgba(45, 168, 144, 0.4)',
  },
  5: {
    type: 'self-support',
    label: '持續自我支持',
    sub: '記下今天的方法，未來用得到',
    emoji: '🌟',
    grad: 'linear-gradient(135deg, #7BD389 0%, #4FAE5E 100%)',
    ring: 'rgba(79, 174, 94, 0.4)',
  },
}

export default function SelfCheckPage({ navigate }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (bun) => {
    setSelected(bun)
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const cta = selected ? ctaConfig[selected.id] : null
  const anchor = cta?.type === 'self-support' ? 'section-self-support' : 'section-stress-relief'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          🌡️ 今日自我檢測
        </div>
        <h1 className="section-title">今天的你，還好嗎？</h1>
        <p className="text-sub-text max-w-xl mx-auto leading-relaxed">
          在照顧病人、協助家屬、面對工作節奏與責任的同時，
          也給自己一點時間，停下來看看現在的狀態。
          請從下方的「今日壓力指數」中，選出最符合你此刻心情的一顆包子。
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-warm-text text-center mb-6 flex items-center justify-center gap-2">
          <span>🥟</span>
          <span>今日壓力指數</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {stressLevelData.map((bun) => (
            <StressBunCard
              key={bun.id}
              bun={bun}
              isSelected={selected?.id === bun.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div id="result-section" className="mt-6">
          <div className={`rounded-3xl border-2 ${selected.borderColor} ${selected.bgColor} p-6 sm:p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{selected.emoji}</span>
              <div>
                <h2 className="font-bold text-warm-text text-xl">您的今日壓力狀態</h2>
                <span className={`text-sm font-semibold ${selected.tagColor}`}>
                  {selected.name}
                </span>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 mb-4">
              <p className="font-semibold text-warm-text text-base mb-3">{selected.result.title}</p>
              <p className="text-sub-text text-sm leading-relaxed whitespace-pre-line">
                {selected.result.content}
              </p>
            </div>

            <div className={`inline-flex items-center gap-2 bg-white/80 border ${selected.borderColor} rounded-full px-4 py-2 text-sm font-medium ${selected.tagColor} mb-5`}>
              <span>💡</span>
              <span>{selected.result.tip}</span>
            </div>

            {/* ── 吸睛 CTA 按鈕 ── */}
            {cta && (
              <div className="mt-2">
                <button
                  onClick={() => navigate('learning-support', anchor)}
                  className="cta-glow-btn"
                  style={{
                    '--cta-grad': cta.grad,
                    '--cta-ring': cta.ring,
                  }}
                >
                  <span className="cta-emoji">{cta.emoji}</span>
                  <span className="cta-text">
                    <span className="cta-label">{cta.label}</span>
                    <span className="cta-sub">{cta.sub}</span>
                  </span>
                  <span className="cta-arrow">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="cta-shine" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate('abilities')}
              className="btn-outline"
            >
              查看更多 SEL 自我檢測
            </button>
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <p className="text-sub-text text-xs">
          此檢測僅供自我參考，無法取代專業心理評估。若長期感到壓力，建議尋求專業協助。
        </p>
      </div>

      <style>{`
        .cta-glow-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 22px;
          border-radius: 18px;
          background: var(--cta-grad);
          color: #ffffff;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 24px -8px var(--cta-ring), 0 4px 10px -4px var(--cta-ring);
          transform: translateY(0);
          transition: transform 0.2s ease, box-shadow 0.25s ease;
          animation: ctaPulse 2.6s ease-in-out infinite;
        }
        .cta-glow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -8px var(--cta-ring), 0 6px 14px -4px var(--cta-ring);
          animation-play-state: paused;
        }
        .cta-glow-btn:active {
          transform: translateY(0) scale(0.985);
        }
        .cta-emoji {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          font-size: 22px;
        }
        .cta-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          min-width: 0;
        }
        .cta-label {
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.3;
        }
        .cta-sub {
          font-size: 12.5px;
          opacity: 0.92;
          margin-top: 2px;
          line-height: 1.4;
          text-align: left;
        }
        .cta-arrow {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .cta-glow-btn:hover .cta-arrow {
          transform: translateX(4px);
          background: rgba(255,255,255,0.32);
        }
        .cta-shine {
          position: absolute;
          top: 0;
          left: -60%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
          transform: skewX(-20deg);
          animation: ctaShine 3.4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 10px 24px -8px var(--cta-ring), 0 4px 10px -4px var(--cta-ring); }
          50%      { box-shadow: 0 14px 32px -8px var(--cta-ring), 0 6px 14px -4px var(--cta-ring); }
        }
        @keyframes ctaShine {
          0%   { left: -60%; }
          60%  { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>
    </div>
  )
}
