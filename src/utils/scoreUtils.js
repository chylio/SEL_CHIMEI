/**
 * 計算單題得分
 * 正向選項每選一個 +1，反向選項若選了 -1
 */
export function calculateQuestionScore(question, selectedOptionIds) {
  let score = 0
  question.options.forEach((opt) => {
    if (selectedOptionIds.includes(opt.id)) {
      score += opt.isReverse ? -1 : 1
    }
  })
  return score
}

/**
 * 計算百分比，最低 0%，最高 100%
 */
export function calculatePercentage(score, maxScore = 3) {
  const pct = (score / maxScore) * 100
  return Math.max(0, Math.min(100, Math.round(pct)))
}

/**
 * 判斷能力狀態
 */
export function getAbilityStatus(percentage) {
  if (percentage >= 80) return { label: '穩定正向', color: 'text-green-600', barColor: 'bg-green-400' }
  if (percentage >= 50) return { label: '持續練習', color: 'text-amber-500', barColor: 'bg-amber-400' }
  return { label: '需要加強', color: 'text-red-500', barColor: 'bg-red-400' }
}

/**
 * 依五項能力分數生成溫暖總結文字
 */
export function generateSummaryText(results) {
  const avg = results.reduce((sum, r) => sum + r.percentage, 0) / results.length
  const lowAbilities = results.filter((r) => r.percentage < 50).map((r) => r.abilityName)
  const highAbilities = results.filter((r) => r.percentage >= 80).map((r) => r.abilityName)

  if (avg >= 80) {
    return '你在這次測驗中展現了非常穩定的 SEL 能力！在高壓的醫療環境中，能夠同時照顧情緒、溝通與決策，是非常珍貴的專業力量。繼續保持，也別忘了偶爾為自己充電。'
  }
  if (avg >= 60) {
    return `整體而言，你已具備不錯的情緒與人際應對基礎。${highAbilities.length > 0 ? `在「${highAbilities.join('、')}」方面表現穩健，` : ''}繼續練習，你的 SEL 能力會更加紮實。記得先照顧好自己，才能長久照顧他人。`
  }
  if (lowAbilities.length > 0) {
    return `這次測驗顯示在「${lowAbilities.join('、')}」方面還有成長空間，這很正常，SEL 是可以練習的！不需要太有壓力，從今天開始，每天多一點點的自我覺察與調節，就是很好的起點。你願意做這份測驗，本身就是照顧自己的行動。`
  }
  return '謝謝你完成這份測驗！每一次面對自己的狀態，都是一次小小的勇敢。透過練習 SEL，你會越來越了解自己，也越來越能在壓力中找到穩定的力量。'
}

/**
 * 取得每項能力的個別建議
 */
export function getAbilitySuggestion(abilityKey, percentage) {
  const suggestions = {
    'self-awareness': {
      low: '建議先練習停下來辨識情緒與身體訊號，問問自己：「我現在感覺怎麼樣？」',
      mid: '你已有初步的覺察能力，試著更頻繁地「暫停一下」觀察自己的狀態。',
      high: '你的自我覺察能力很好！繼續保持這份對自己的敏感與關注。',
    },
    'self-management': {
      low: '建議從呼吸調節與暫停回應開始練習，遇到衝動時先數三秒再回應。',
      mid: '已有一定的情緒管理能力，試著在壓力升高前就提早調節。',
      high: '在壓力下仍能穩住自己，這是非常重要的專業能力，值得肯定！',
    },
    'social-awareness': {
      low: '建議多從對方感受與立場理解情境，問問自己：「他現在可能感受到什麼？」',
      mid: '你具備基本的同理心，試著在溝通時多停留在對方的角度想一想。',
      high: '你能敏銳地感受他人情緒，這份同理力讓你的照護更有溫度。',
    },
    'relationship-skills': {
      low: '建議練習用尊重但清楚的方式表達專業立場，找到「既堅持又不傷關係」的說法。',
      mid: '你有溝通的意願與基礎，試著在說話前多考慮對方接收的感受。',
      high: '你能在複雜的人際中找到平衡，這是很難得的溝通能力。',
    },
    'responsible-decision': {
      low: '建議在壓力情境下，先回到病人安全的優先原則，讓它成為決策的錨點。',
      mid: '你有考量責任的意識，繼續練習在忙碌中也能暫停一下評估風險。',
      high: '你在壓力下仍能做出負責任的決策，這是高品質照護的核心能力！',
    },
  }

  const level = percentage >= 80 ? 'high' : percentage >= 50 ? 'mid' : 'low'
  return suggestions[abilityKey]?.[level] ?? ''
}

/**
 * 給定測驗資料、學員作答、能力結果，回傳個人化練習處方
 * 採混合策略：
 *   1) 行為觸發（主）— 看哪幾題選到 isReverse
 *   2) 分數門檻（補）— 補上 < 50% 但未被觸發的能力
 *   3) 保底維持 — 沒任何警訊時推維持型工具
 *   4) 永遠最多 3 個，並至少 1 個療癒型尾巴
 */
export function getRecommendations(quizData, answers, results) {
  // 能力 → 工具對應（依據工具庫內容）
  const TOOL_BY_ABILITY = {
    'self-awareness': {
      emoji: '💬',
      tool: '今天的情緒戳戳樂',
      anchor: 'tool-emotion',
      hint: '練習辨識「我現在到底是什麼情緒」',
    },
    'self-management': {
      emoji: '🫁',
      tool: '1分鐘呼吸調節站',
      anchor: 'tool-breathing',
      hint: '在情緒衝上來之前，先回到呼吸',
    },
    'social-awareness': {
      emoji: '💬',
      tool: '溝通練習室',
      anchor: 'game-communication',
      hint: '從四色詞庫，組出能貼近對方感受的話術',
    },
    'relationship-skills': {
      emoji: '💬',
      tool: '溝通練習室',
      anchor: 'game-communication',
      hint: '練習在卡住、被拒絕時，換一種說法',
    },
    'responsible-decision': {
      emoji: '🌱',
      tool: '初心補給站',
      anchor: 'game-originalheart',
      hint: '在難取捨時，回到你的核心價值',
    },
  }

  const MAINTAIN_TOOL = {
    emoji: '🥟',
    tool: '包子舒壓翻翻卡',
    anchor: 'tool-buncard',
    hint: '辛苦了～翻一張暖心包子卡，給自己一點溫柔',
  }

  const recs = []
  const usedAbilities = new Set()

  // 1) 行為觸發法：選了 isReverse 的題目 → 強推
  for (const q of quizData) {
    const selectedIds = answers[q.id] || []
    const wrongOpt = q.options.find((o) => o.isReverse)
    if (!wrongOpt) continue
    if (selectedIds.includes(wrongOpt.id) && !usedAbilities.has(q.abilityKey)) {
      const t = TOOL_BY_ABILITY[q.abilityKey]
      if (t) {
        recs.push({
          priority: 'high',
          abilityKey: q.abilityKey,
          abilityName: q.abilityName,
          abilityEmoji: q.abilityEmoji,
          ...t,
          reason: `你在這題選到了警示型反應，這個工具可以幫你練習更穩定的應對。`,
        })
        usedAbilities.add(q.abilityKey)
      }
    }
  }

  // 2) 分數門檻補強：< 50% 但還沒被觸發
  for (const r of results) {
    if (recs.length >= 3) break
    if (r.percentage < 50 && !usedAbilities.has(r.abilityKey)) {
      const t = TOOL_BY_ABILITY[r.abilityKey]
      if (t) {
        recs.push({
          priority: 'mid',
          abilityKey: r.abilityKey,
          abilityName: r.abilityName,
          abilityEmoji: r.abilityEmoji,
          ...t,
          reason: `「${r.abilityName}」目前 ${r.percentage}%，可以多花一點時間練習。`,
        })
        usedAbilities.add(r.abilityKey)
      }
    }
  }

  // 3) 沒任何警訊：看整體分數推維持型 or 最弱項
  if (recs.length === 0) {
    const avg = results.reduce((s, r) => s + (r.percentage || 0), 0) / results.length
    if (avg >= 80) {
      recs.push({
        priority: 'maintain',
        abilityKey: null,
        abilityName: '日常維持',
        abilityEmoji: '✨',
        ...TOOL_BY_ABILITY['self-management'],
        reason: `你整體表現穩定（平均 ${Math.round(avg)}%）！想保持節奏，每天花 1 分鐘呼吸調節就很夠用。`,
      })
    } else {
      // 中間分數：推最弱項的工具
      const weakest = [...results].sort((a, b) => (a.percentage || 0) - (b.percentage || 0))[0]
      if (weakest && TOOL_BY_ABILITY[weakest.abilityKey]) {
        recs.push({
          priority: 'mid',
          abilityKey: weakest.abilityKey,
          abilityName: weakest.abilityName,
          abilityEmoji: weakest.abilityEmoji,
          ...TOOL_BY_ABILITY[weakest.abilityKey],
          reason: `「${weakest.abilityName}」是這次相對較弱的能力，可以從這個工具開始練。`,
        })
        usedAbilities.add(weakest.abilityKey)
      }
    }
  }

  // 4) 永遠加一個療癒型尾巴（最多 3 個推薦上限內）
  if (recs.length < 3) {
    recs.push({
      priority: 'gentle',
      abilityKey: null,
      abilityName: '給自己一點溫柔',
      abilityEmoji: '🌸',
      ...MAINTAIN_TOOL,
    })
  }

  return recs.slice(0, 3)
}

