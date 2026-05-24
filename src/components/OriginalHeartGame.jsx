import { useState, useMemo } from 'react'

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
    items: [
      {
        name: '減痛',
        desc: '治癒或緩解疾病，減輕他人的痛苦。',
        // 跨職類適用的微行動（團隊取向）
        action: '今天試試：與同仁交班時，多提一句「這位病人最在意的不舒服是什麼」。',
      },
      {
        name: '陪伴',
        desc: '用我的專業，陪他人走過最難的路。',
        action: '今天試試：跟團隊一起記住一位病人的名字與故事，而不只是床號。',
      },
      {
        name: '看見',
        desc: '看見疾病之外，每個生命的故事。',
        action: '今天試試：在團隊討論時，邀請大家分享一個「今天讓我多看了一眼」的時刻。',
      },
      {
        name: '熱忱',
        desc: '保護想幫助人的初衷，不被消磨。',
        action: '今天試試：當夥伴抱怨時，回他一句「我們當初想做的是什麼？」並一起想想。',
      },
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
    items: [
      {
        name: '專業',
        desc: '問心無愧，做出最到位的判斷。',
        action: '今天試試：遇到不確定時，主動找一位夥伴 double check，把判斷變成團隊判斷。',
      },
      {
        name: '細膩',
        desc: '多花三秒，核對確保安全細節。',
        action: '今天試試：交接任何一份資料前，跟對方一起花三秒，核對病人、項目、時間。',
      },
      {
        name: '品質',
        desc: '無論多累，守住專業處置底線。',
        action: '今天試試：如果發現流程被簡化了，提出來和團隊一起評估是否要回到標準作法。',
      },
      {
        name: '勇氣',
        desc: '在困難中，依然選擇做對的事。',
        action: '今天試試：當你看到不太對的事，跟一位信任的夥伴說一聲，讓改變從兩個人開始。',
      },
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
    items: [
      {
        name: '同理',
        desc: '聽懂他人處境，提供理解與安慰。',
        action: '今天試試：在團隊交接時，對接班的人說一句「今天辛苦了，有什麼需要我幫忙的嗎？」。',
      },
      {
        name: '接納',
        desc: '接受不完美，包含疲憊的自己。',
        action: '今天試試：當團隊有人犯錯，先說「我們一起看看怎麼補」，再談檢討。',
      },
      {
        name: '支持',
        desc: '觀察夥伴的需要，主動伸出援手。',
        action: '今天試試：看到夥伴忙不過來時，主動接手一件小事（送個檢體、回個電話都好）。',
      },
      {
        name: '合作',
        desc: '建立默契，與團隊完成照護目標。',
        action: '今天試試：跨職類溝通時，多問一句「你那邊還需要什麼資訊才能往下走？」。',
      },
      {
        name: '真誠',
        desc: '尊重差異，用真實且平等的態度對話。',
        action: '今天試試：跟資淺夥伴或不同科別的人說話時，把語速放慢，把姿態放平。',
      },
    ],
  },
]

const MAX_PICKS = 3

export default function OriginalHeartGame() {
  // selected: array of strings like "motivation:陪伴"
  const [selected, setSelected] = useState([])
  const [showCard, setShowCard] = useState(false)

  const isSelected = (zoneKey, name) => selected.includes(`${zoneKey}:${name}`)

  const toggle = (zoneKey, name) => {
    const id = `${zoneKey}:${name}`
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_PICKS) return prev // 已達上限
      return [...prev, id]
    })
    setShowCard(false)
  }

  const reset = () => {
    setSelected([])
    setShowCard(false)
  }

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
    return `我今天的初心是：以${names}走過今天的每一個照護時刻。`
  }, [selectedItems])

  return (
    <div className="card-base p-6 sm:p-8">
      {/* 標題與說明 */}
      <div className="flex items-start gap-3 mb-5">
        <div className="text-2xl">🌱</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-warm-text mb-1">初心補給站</h3>
          <p className="text-sub-text text-sm leading-relaxed">
            在辛苦又忙碌的臨床工作中，哪些價值最能代表你今天的「初心」？
            請選定 <span className="font-semibold text-muted-orange">1-3 個</span> 核心價值，
            讓它們成為你今天的行動指標。
          </p>
          <p className="text-xs text-sub-text/80 mt-2 italic">
            沒有標準答案，今天的你選了什麼，就是今天的你需要的。
          </p>
        </div>
      </div>

      {/* 計數器 */}
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

      {/* 三大區塊 */}
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
                    title={item.desc}
                    className={`text-xs px-3 py-1.5 rounded-full border-2 transition-all duration-150
                      ${active ? zone.chipActive : zone.chipBase}
                      ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    【{item.name}】{item.desc.replace(/。$/, '')}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 生成按鈕 */}
      <div className="text-center mb-5">
        <button
          onClick={() => setShowCard(true)}
          disabled={selected.length === 0}
          className={`btn-primary ${selected.length === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          ✨ 生成我的今日初心卡
        </button>
      </div>

      {/* 今日初心卡 */}
      {showCard && selectedItems.length > 0 && (
        <div className="bg-gradient-to-br from-cream via-amber-50/40 to-rose-50/40 rounded-3xl border-2 border-amber-100 p-6 sm:p-8 page-enter">
          <div className="text-center mb-5">
            <div className="text-xs font-bold text-muted-orange tracking-widest mb-2">
              ✦ 今日初心卡 ✦
            </div>
            <p className="text-warm-text text-base sm:text-lg font-medium leading-relaxed">
              {cardSentence}
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <div className="text-xs font-semibold text-sub-text text-center mb-2">
              💡 今天可以試試的小行動
            </div>
            {selectedItems.map((item) => (
              <div
                key={item.name}
                className="bg-white/80 rounded-xl p-4 border border-amber-100"
              >
                <div className="flex items-start gap-2">
                  <span className={`mt-1.5 w-2 h-2 rounded-full ${item.zone.dot} flex-shrink-0`}></span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-warm-text mb-1">
                      【{item.name}】
                      <span className="font-normal text-sub-text ml-1">{item.desc}</span>
                    </div>
                    <p className="text-xs text-warm-text leading-relaxed">{item.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-sub-text/80 italic mt-6">
            願你今天，也記得照顧那個照顧別人的自己。
          </p>
        </div>
      )}
    </div>
  )
}
