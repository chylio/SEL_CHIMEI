import { useState, useMemo } from 'react'

// ── 詞庫：E-D-S-C 四大表達庫 ────────────────────────────────────────
const empathyBank = [
  '很忙',
  '這件事情比較複雜',
  '這件事情比較急',
  '這件事有點困難',
  '這個結果可能不如預期',
  '能量快耗盡了',
  '覺得這項規定很繁瑣',
  '壓力比較大',
  '時間比較緊迫',
]

const describeBank = [
  '目前還有某項資料尚未完成',
  '這個步驟還沒有被確認',
  '系統顯示有欄位未填寫',
  '交班內容還缺少重要資訊',
  '這項流程尚未符合規範',
  '這是為了符合醫療評鑑要求',
  '病人安全核對清單還沒簽',
  '給藥紀錄缺少時間註記',
]

const specifyBank = [
  '再確認一次數據',
  '補上這個欄位',
  '協助完成這個步驟',
  '花一分鐘檢查',
  '現在先處理這一項',
  '再花兩分鐘補齊關鍵數值',
  '協助補上這欄簽名',
  '完成這份核對表',
  '幫忙再確認病人 ID',
]

const consequenceBank = [
  '降低錯誤風險',
  '確保病人安全',
  '讓流程更順暢',
  '避免後續重工',
  '維持照護品質',
  '共同維護病房的照護品質',
  '減少給藥錯誤的風險',
  '讓交班更安心',
]

// ── 範例組合（範例對照，非標準答案） ──────────────────────────────
const exampleCombos = [
  {
    e: '能量快耗盡了',
    d: '交班內容還缺少重要資訊',
    s: '再花兩分鐘補齊關鍵數值',
    c: '降低給藥錯誤的風險',
  },
  {
    e: '覺得這項規定很繁瑣',
    d: '這是為了符合醫療評鑑要求',
    s: '協助補上這欄簽名',
    c: '共同維護病房的照護品質',
  },
  {
    e: '很忙',
    d: '系統顯示有欄位未填寫',
    s: '花一分鐘檢查',
    c: '避免後續重工',
  },
  {
    e: '這件事情比較急',
    d: '病人安全核對清單還沒簽',
    s: '現在先處理這一項',
    c: '確保病人安全',
  },
  {
    e: '壓力比較大',
    d: '給藥紀錄缺少時間註記',
    s: '幫忙再確認病人 ID',
    c: '減少給藥錯誤的風險',
  },
  {
    e: '這個結果可能不如預期',
    d: '這個步驟還沒有被確認',
    s: '協助完成這個步驟',
    c: '讓流程更順暢',
  },
]

// ── 區塊設定 ──────────────────────────────────────────────────────
const sections = [
  {
    key: 'e',
    label: 'E',
    title: 'Empathy 理解感受',
    dot: 'bg-amber-400',
    chipBase: 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100',
    chipActive: 'bg-amber-300 border-amber-400 text-amber-950 shadow-sm',
    bank: empathyBank,
  },
  {
    key: 'd',
    label: 'D',
    title: 'Describe 描述事實',
    dot: 'bg-sky-400',
    chipBase: 'bg-sky-50 border-sky-200 text-sky-900 hover:bg-sky-100',
    chipActive: 'bg-sky-300 border-sky-400 text-sky-950 shadow-sm',
    bank: describeBank,
  },
  {
    key: 's',
    label: 'S',
    title: 'Specify 明確要求',
    dot: 'bg-emerald-400',
    chipBase: 'bg-emerald-50 border-emerald-200 text-emerald-900 hover:bg-emerald-100',
    chipActive: 'bg-emerald-300 border-emerald-400 text-emerald-950 shadow-sm',
    bank: specifyBank,
  },
  {
    key: 'c',
    label: 'C',
    title: 'Consequence 說明效益',
    dot: 'bg-rose-400',
    chipBase: 'bg-rose-50 border-rose-200 text-rose-900 hover:bg-rose-100',
    chipActive: 'bg-rose-300 border-rose-400 text-rose-950 shadow-sm',
    bank: consequenceBank,
  },
]

export default function CommunicationGame() {
  const [picks, setPicks] = useState({ e: null, d: null, s: null, c: null })
  const [exampleIdx, setExampleIdx] = useState(0)

  const selectPick = (key, value) => {
    setPicks((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }))
  }

  const clearAll = () => setPicks({ e: null, d: null, s: null, c: null })

  const randomFill = () => {
    setPicks({
      e: empathyBank[Math.floor(Math.random() * empathyBank.length)],
      d: describeBank[Math.floor(Math.random() * describeBank.length)],
      s: specifyBank[Math.floor(Math.random() * specifyBank.length)],
      c: consequenceBank[Math.floor(Math.random() * consequenceBank.length)],
    })
  }

  const isComplete = picks.e && picks.d && picks.s && picks.c

  const sentence = useMemo(() => {
    return (
      <span className="leading-loose">
        我知道你現在{' '}
        <Slot text={picks.e} color="text-amber-700" placeholder="（理解感受）" />
        ，但{' '}
        <Slot text={picks.d} color="text-sky-700" placeholder="（描述事實）" />
        ，請你{' '}
        <Slot text={picks.s} color="text-emerald-700" placeholder="（明確要求）" />
        ，這樣我們就能{' '}
        <Slot text={picks.c} color="text-rose-700" placeholder="（說明效益）" />
        。
      </span>
    )
  }, [picks])

  const currentExample = exampleCombos[exampleIdx]
  const nextExample = () => setExampleIdx((i) => (i + 1) % exampleCombos.length)

  return (
    <div>
      <p className="text-sub-text text-xs sm:text-sm leading-relaxed mb-5">
        沒有標準答案，怎麼組都可以——這是練習，不是考試。
      </p>

      {/* 即時組成句子 */}
      <div className="bg-gradient-to-br from-amber-50/60 via-cream to-rose-50/60 rounded-2xl border border-amber-100 p-5 mb-6">
        <div className="text-xs font-semibold text-sub-text mb-2">你拼出來的話：</div>
        <p className="text-warm-text text-base sm:text-lg font-medium">{sentence}</p>
      </div>

      {/* 四欄詞庫 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {sections.map((sec) => (
          <div key={sec.key} className="bg-gray-50/70 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${sec.dot}`}></span>
              <span className="font-bold text-warm-text text-sm">
                {sec.label}・{sec.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sec.bank.map((item) => {
                const active = picks[sec.key] === item
                return (
                  <button
                    key={item}
                    onClick={() => selectPick(sec.key, item)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-150
                      ${active ? sec.chipActive : sec.chipBase}`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 控制按鈕 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={randomFill}
          className="text-xs font-medium px-4 py-2 rounded-full bg-white border border-gray-200 text-warm-text hover:bg-gray-50 transition-colors"
        >
          🎲 隨機抽一組
        </button>
        <button
          onClick={clearAll}
          className="text-xs font-medium px-4 py-2 rounded-full bg-white border border-gray-200 text-sub-text hover:bg-gray-50 transition-colors"
          disabled={!picks.e && !picks.d && !picks.s && !picks.c}
        >
          ✨ 清空重來
        </button>
        {isComplete && (
          <span className="text-xs font-medium px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            ✓ 一段完整的話完成了
          </span>
        )}
      </div>

      {/* 範例對照 */}
      <div className="bg-white rounded-2xl border border-dashed border-amber-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-base">📖</span>
            <span className="font-bold text-warm-text text-sm">臨床建議組合（範例）</span>
            <span className="text-[11px] text-sub-text">
              {exampleIdx + 1} / {exampleCombos.length}
            </span>
          </div>
          <button
            onClick={nextExample}
            className="text-xs font-medium text-muted-orange hover:text-orange-600 transition-colors"
          >
            換一個 →
          </button>
        </div>
        <p className="text-warm-text text-sm leading-loose">
          我知道你現在
          <span className="text-amber-700 font-semibold"> {currentExample.e} </span>
          ，但
          <span className="text-sky-700 font-semibold"> {currentExample.d} </span>
          ，請你
          <span className="text-emerald-700 font-semibold"> {currentExample.s} </span>
          ，這樣我們就能
          <span className="text-rose-700 font-semibold"> {currentExample.c} </span>
          。
        </p>
      </div>

      {/* 底部提醒 */}
      <p className="text-center text-xs text-sub-text mt-5 italic">
        好好說話，是專業，也是溫柔。
      </p>
    </div>
  )
}

// 小元件：句子中的填空槽
function Slot({ text, color, placeholder }) {
  if (text) {
    return <span className={`font-semibold ${color}`}>{text}</span>
  }
  return (
    <span className="inline-block px-2 py-0.5 mx-0.5 text-xs text-gray-400 bg-gray-100 rounded border border-dashed border-gray-300">
      {placeholder}
    </span>
  )
}
