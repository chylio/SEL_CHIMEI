import { useState, useMemo, useRef, useEffect } from 'react'

// ── 三大價值區塊 ──────────────────────────────────────────────────
const valueZones = [
  {
    key: 'motivation',
    title: '動力區',
    subtitle: '為什麼留在這份工作',
    icon: '🧠',
    accent: 'bg-rose-50 border-rose-200',
    chipBase: 'bg-white border-rose-200 text-rose-900 hover:border-rose-300',
    chipActive: 'bg-rose-200 border-rose-400 text-rose-950 shadow-sm',
    dot: 'bg-rose-400',
    dotHex: '#FB7185',
    softHex: '#FECDD3',
    tapeHex: '#F8C7CC',
    items: [
      { name: '減痛', desc: '治癒或緩解疾病，減輕他人的痛苦。' },
      { name: '陪伴', desc: '用我的專業，陪他人走過最難的路。' },
      { name: '看見', desc: '看見疾病之外，每個生命的故事。' },
      { name: '熱忱', desc: '保護想幫助人的初衷，不被消磨。' },
    ],
  },
  {
    key: 'professional',
    title: '專業與行動',
    subtitle: '怎麼把事情做對',
    icon: '🩺',
    accent: 'bg-teal-50 border-teal-200',
    chipBase: 'bg-white border-teal-200 text-teal-900 hover:border-teal-300',
    chipActive: 'bg-teal-200 border-teal-400 text-teal-950 shadow-sm',
    dot: 'bg-teal-400',
    dotHex: '#2DD4BF',
    softHex: '#CCFBF1',
    tapeHex: '#BCEDDF',
    items: [
      { name: '專業', desc: '問心無愧，做出最到位的判斷。' },
      { name: '細膩', desc: '多花三秒，核對確保安全細節。' },
      { name: '品質', desc: '無論多累，守住專業處置底線。' },
      { name: '勇氣', desc: '在困難中，依然選擇做對的事。' },
    ],
  },
  {
    key: 'support',
    title: '人際與支持',
    subtitle: '跟誰一起走這條路',
    icon: '🤝',
    accent: 'bg-amber-50 border-amber-200',
    chipBase: 'bg-white border-amber-200 text-amber-900 hover:border-amber-300',
    chipActive: 'bg-amber-200 border-amber-400 text-amber-950 shadow-sm',
    dot: 'bg-amber-400',
    dotHex: '#FBBF24',
    softHex: '#FEF3C7',
    tapeHex: '#FCE7AE',
    items: [
      { name: '同理', desc: '聽懂他人處境，提供理解與安慰。' },
      { name: '接納', desc: '接受不完美，包含疲憊的自己。' },
      { name: '支持', desc: '觀察夥伴的需要，主動伸出援手。' },
      { name: '合作', desc: '建立默契，與團隊完成照護目標。' },
      { name: '真誠', desc: '尊重差異，用真實且平等的態度對話。' },
    ],
  },
]

const MAX_PICKS = 3

function loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    if (window.html2canvas) return resolve(window.html2canvas)
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
    script.onload = () => resolve(window.html2canvas)
    script.onerror = () => reject(new Error('html2canvas 載入失敗'))
    document.head.appendChild(script)
  })
}

export default function OriginalHeartGame() {
  const [selected, setSelected] = useState([])
  const [showCard, setShowCard] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const cardRef = useRef(null)

  const isSelected = (zoneKey, name) => selected.includes(`${zoneKey}:${name}`)

  const toggle = (zoneKey, name) => {
    const id = `${zoneKey}:${name}`
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_PICKS) return prev
      return [...prev, id]
    })
  }

  const reset = () => {
    setSelected([])
    setShowCard(false)
  }

  const closeModal = () => setShowCard(false)

  const selectedItems = useMemo(() => {
    return selected
      .map((id) => {
        const [zoneKey, name] = id.split(':')
        const zone = valueZones.find((z) => z.key === zoneKey)
        const item = zone?.items.find((i) => i.name === name)
        return item ? { ...item, zone } : null
      })
      .filter(Boolean)
  }, [selected])

  const cardSentence = useMemo(() => {
    if (selectedItems.length === 0) return ''
    const names = selectedItems.map((it) => `【${it.name}】`).join('、')
    return `以${names}走過今天的每一個照護時刻。`
  }, [selectedItems])

  const todayStr = useMemo(() => {
    const d = new Date()
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const weekdays = ['日', '一', '二', '三', '四', '五', '六']
    return `${y}.${m}.${day}　星期${weekdays[d.getDay()]}`
  }, [showCard])

  useEffect(() => {
    if (!showCard) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [showCard])

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return
    setDownloading(true)
    try {
      const html2canvas = await loadHtml2Canvas()
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false,
      })
      const dataUrl = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      const stamp = new Date().toISOString().slice(0, 10)
      link.download = `我的今日初心卡_${stamp}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error(err)
      alert('下載失敗，請再試一次，或截圖儲存喔～')
    } finally {
      setDownloading(false)
    }
  }

  // 為三個 item 預先指定微小旋轉角度，呈現便利貼錯落感
  const tilts = ['-1.1deg', '0.8deg', '-0.6deg']

  // 取得三條膠帶顏色（依選擇）
  const tapeColors = selectedItems.length > 0
    ? selectedItems.map((it) => it.zone.tapeHex)
    : ['#F8C7CC', '#BCEDDF', '#FCE7AE']

  return (
    <div>
      <p className="text-sub-text text-xs sm:text-sm leading-relaxed mb-2">
        在辛苦又忙碌的臨床工作中，哪些價值最能代表你今天的「初心」？
        請選定 <span className="font-semibold text-muted-orange">1-3 個</span> 核心價值，
        讓它們成為你今天的行動指標。
      </p>
      <p className="text-xs text-sub-text/80 italic mb-5">
        沒有標準答案，今天的你選了什麼，就是今天的你需要的。
      </p>

      <div className="flex items-center justify-between mb-5 px-1">
        <div className="text-xs text-sub-text">
          已選擇 <span className="font-bold text-warm-text">{selected.length}</span> / {MAX_PICKS}
        </div>
        {selected.length > 0 && (
          <button
            onClick={reset}
            className="text-xs text-sub-text hover:text-warm-text underline-offset-2 hover:underline transition-colors"
          >
            清空重選
          </button>
        )}
      </div>

      <div className="space-y-4 mb-6">
        {valueZones.map((zone) => (
          <div key={zone.key} className={`rounded-2xl border-2 p-4 sm:p-5 ${zone.accent}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{zone.icon}</span>
              <div>
                <div className="font-bold text-warm-text text-sm">{zone.title}</div>
                <div className="text-[11px] text-sub-text">{zone.subtitle}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {zone.items.map((item) => {
                const active = isSelected(zone.key, item.name)
                const disabled = !active && selected.length >= MAX_PICKS
                return (
                  <button
                    key={item.name}
                    onClick={() => toggle(zone.key, item.name)}
                    disabled={disabled}
                    className={`text-sm font-medium px-4 py-2 rounded-full border-2 transition-all duration-150 ${active ? zone.chipActive : zone.chipBase} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    【{item.name}】
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-5">
        <button
          onClick={() => setShowCard(true)}
          disabled={selected.length === 0}
          className={`btn-primary ${selected.length === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          ✨ 生成我的今日初心卡
        </button>
      </div>

      {/* ── Modal 彈出視窗：拍立得 / 手帳風暖心卡 ── */}
      {showCard && selectedItems.length > 0 && (
        <div
          className="warm-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="warm-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="關閉"
              className="warm-close-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>

            {/* ── 卡片本體（下載擷取對象）：拍立得白邊紙卡 ── */}
            <div
              ref={cardRef}
              className="polaroid-card"
              style={{
                // 米白紙底 + 極淡紙紋
                background: `
                  radial-gradient(circle at 20% 30%, rgba(180,120,60,0.04) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(180,120,60,0.04) 0%, transparent 50%),
                  #FFFCF4
                `,
              }}
            >
              {/* 兩條紙膠帶（左 / 右） */}
              <div
                className="washi-tape washi-left"
                style={{
                  background: `repeating-linear-gradient(135deg, ${tapeColors[0]} 0px, ${tapeColors[0]} 8px, ${shade(tapeColors[0], -8)} 8px, ${shade(tapeColors[0], -8)} 12px)`,
                }}
              />
              <div
                className="washi-tape washi-right"
                style={{
                  background: `repeating-linear-gradient(135deg, ${tapeColors[1] || tapeColors[0]} 0px, ${tapeColors[1] || tapeColors[0]} 8px, ${shade(tapeColors[1] || tapeColors[0], -8)} 8px, ${shade(tapeColors[1] || tapeColors[0], -8)} 12px)`,
                }}
              />

              {/* 右上小郵票框 */}
              <div className="stamp-frame">
                <div className="stamp-inner">
                  <div className="text-[10px] tracking-[0.25em] font-bold" style={{ color: '#B85042' }}>初心</div>
                  <div className="stamp-divider" />
                  <div className="text-[9px]" style={{ color: '#B85042' }}>NO.{(new Date().getMonth() + 1).toString().padStart(2, '0')}{new Date().getDate().toString().padStart(2, '0')}</div>
                </div>
              </div>

              {/* 角落郵戳印章（圓形） */}
              <div className="postmark">
                <svg viewBox="0 0 80 80" width="80" height="80">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="#B85042" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#B85042" strokeWidth="1" />
                  <text x="40" y="32" textAnchor="middle" fill="#B85042" fontSize="7" fontWeight="bold" letterSpacing="1">CHIMEI</text>
                  <text x="40" y="46" textAnchor="middle" fill="#B85042" fontSize="11" fontWeight="bold">SEL</text>
                  <text x="40" y="56" textAnchor="middle" fill="#B85042" fontSize="6">{todayStr.replace(/\s+/g, '').split('星期')[0]}</text>
                </svg>
              </div>

              {/* 內容區（虛線邊框） */}
              <div className="card-inner-dashed">
                {/* 標題 */}
                <div className="text-center mb-1 mt-2">
                  <div
                    className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.5em]"
                    style={{
                      color: '#8B5E34',
                      borderTop: '1px solid #C7A47C',
                      borderBottom: '1px solid #C7A47C',
                    }}
                  >
                    今日初心卡
                  </div>
                </div>

                {/* 日期（手寫感） */}
                <div className="text-center mb-5">
                  <div
                    className="inline-flex items-center gap-2 text-[11px]"
                    style={{ color: '#A87C50', fontStyle: 'italic' }}
                  >
                    <span className="hand-line" />
                    {todayStr}
                    <span className="hand-line" />
                  </div>
                </div>

                {/* 主句 */}
                <div className="text-center mb-7 px-2">
                  <p
                    className="font-semibold leading-[2]"
                    style={{
                      color: '#3D3D3D',
                      fontSize: '17px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cardSentence}
                  </p>
                </div>

                {/* 三個價值 item：便利貼錯落感 */}
                <div className="space-y-4">
                  {selectedItems.map((item, idx) => (
                    <div
                      key={item.name}
                      className="sticky-note"
                      style={{
                        transform: `rotate(${tilts[idx] || '0deg'})`,
                        background: '#FFFFFF',
                        borderLeft: `4px solid ${item.zone.dotHex}`,
                        boxShadow: '2px 4px 8px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span
                          className="text-[10px] font-bold tracking-[0.2em]"
                          style={{ color: item.zone.dotHex, fontFamily: 'serif' }}
                        >
                          NO.0{idx + 1}
                        </span>
                        <span className="text-[15px] font-bold" style={{ color: '#3D3D3D' }}>
                          【{item.name}】
                        </span>
                      </div>
                      <p
                        className="text-[12.5px] leading-relaxed"
                        style={{ color: '#6B6B6B', paddingLeft: '2px' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 底部裝飾 + 簽名 */}
                <div className="mt-7 mb-1">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span style={{ fontSize: '13px' }}>🌿</span>
                    <span
                      className="text-[12px] italic"
                      style={{ color: '#8B5E34', letterSpacing: '0.05em' }}
                    >
                      讓初心成為今天的行動指標
                    </span>
                    <span style={{ fontSize: '13px' }}>🌿</span>
                  </div>
                </div>
              </div>

              {/* 拍立得底部簽名區 */}
              <div className="polaroid-footer">
                <div className="footer-handwritten">
                  ChiMei Hospital · SEL 醫護初心
                </div>
              </div>

              {/* 角落小貼紙 */}
              <div className="sticker sticker-heart">❤︎</div>
              <div className="sticker sticker-star">✦</div>
            </div>

            {/* 動作列 */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-primary inline-flex items-center gap-2"
                style={{ minWidth: 160 }}
              >
                {downloading ? (
                  <>
                    <SpinnerIcon /> 下載中…
                  </>
                ) : (
                  <>📥 下載成圖片</>
                )}
              </button>
              <button
                onClick={closeModal}
                className="btn-outline"
              >
                關閉
              </button>
            </div>
            <p className="text-center text-[11px] text-sub-text/70 mt-3">
              點卡片外面或按 Esc 也可以關閉
            </p>
          </div>
        </div>
      )}

      <style>{`
        /* ─── Modal 結構 ─── */
        @keyframes backdropFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cardPopIn {
          0%   { opacity: 0; transform: translateY(20px) scale(0.85) rotate(-3deg); }
          60%  { opacity: 1; transform: translateY(-4px) scale(1.02) rotate(0.5deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        .warm-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: radial-gradient(circle at 50% 40%, rgba(40,20,40,0.55) 0%, rgba(20,10,30,0.78) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
          animation: backdropFadeIn 0.25s ease-out;
        }
        .warm-modal-content {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: auto;
          animation: cardPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .warm-close-btn {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #6B7280;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 6px 16px -4px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: transform 0.15s ease, color 0.15s ease;
        }
        .warm-close-btn:hover { transform: rotate(90deg); color: #3D3D3D; }

        /* ─── 拍立得卡片本體 ─── */
        .polaroid-card {
          position: relative;
          border-radius: 4px;
          padding: 48px 22px 18px;
          box-shadow:
            0 22px 40px -16px rgba(80,50,30,0.35),
            0 8px 16px -6px rgba(80,50,30,0.18),
            0 0 0 1px rgba(180,140,90,0.08) inset;
          overflow: visible;
        }

        /* ─── 紙膠帶 ─── */
        .washi-tape {
          position: absolute;
          width: 92px;
          height: 22px;
          opacity: 0.92;
          box-shadow: 0 1px 2px rgba(0,0,0,0.06);
          z-index: 5;
        }
        .washi-left {
          top: 10px;
          left: -10px;
          transform: rotate(-6deg);
        }
        .washi-right {
          top: 14px;
          right: -10px;
          transform: rotate(7deg);
          width: 72px;
        }

        /* ─── 郵票框（右上） ─── */
        .stamp-frame {
          position: absolute;
          top: 46px;
          right: 14px;
          width: 60px;
          height: 70px;
          padding: 5px;
          background: #fdf6e8;
          border: 1.5px dashed #C99A6B;
          z-index: 4;
          transform: rotate(3deg);
          box-shadow: 1px 2px 4px rgba(0,0,0,0.08);
        }
        .stamp-inner {
          width: 100%;
          height: 100%;
          border: 1px solid #E5B98A;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 2px;
        }
        .stamp-divider {
          width: 60%;
          height: 1px;
          background: #C99A6B;
          opacity: 0.5;
        }

        /* ─── 郵戳印章（圓形）：左下 ─── */
        .postmark {
          position: absolute;
          bottom: 80px;
          left: 8px;
          width: 80px;
          height: 80px;
          transform: rotate(-12deg);
          opacity: 0.75;
          z-index: 3;
          pointer-events: none;
        }

        /* ─── 內側虛線邊框 ─── */
        .card-inner-dashed {
          position: relative;
          border: 1.5px dashed #D7B895;
          padding: 22px 18px 18px;
          background: transparent;
          z-index: 2;
        }

        /* ─── 手繪細線 ─── */
        .hand-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #C99A6B;
          opacity: 0.6;
        }

        /* ─── 便利貼 item ─── */
        .sticky-note {
          padding: 12px 14px 12px 14px;
          border-radius: 2px;
          position: relative;
        }

        /* ─── 拍立得底部簽名區 ─── */
        .polaroid-footer {
          padding-top: 18px;
          padding-bottom: 14px;
          text-align: center;
        }
        .footer-handwritten {
          font-family: 'Brush Script MT', 'Noto Sans TC', cursive;
          font-style: italic;
          font-size: 13px;
          color: #8B5E34;
          letter-spacing: 0.1em;
        }

        /* ─── 角落貼紙 ─── */
        .sticker {
          position: absolute;
          font-size: 22px;
          z-index: 6;
          pointer-events: none;
          opacity: 0.85;
        }
        .sticker-heart {
          bottom: 14px;
          right: 18px;
          color: #E26A6A;
          transform: rotate(12deg);
        }
        .sticker-star {
          top: 100px;
          left: 16px;
          color: #E5B98A;
          font-size: 18px;
          transform: rotate(-15deg);
        }
      `}</style>
    </div>
  )
}

// 將 hex 顏色加深或變亮（給條紋膠帶用）
function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16)
  let r = (num >> 16) + percent
  let g = ((num >> 8) & 0x00FF) + percent
  let b = (num & 0x0000FF) + percent
  r = Math.min(255, Math.max(0, r))
  g = Math.min(255, Math.max(0, g))
  b = Math.min(255, Math.max(0, b))
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
