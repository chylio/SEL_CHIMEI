// ─── SEL 五大能力 ────────────────────────────────────────────────────────────
export const abilitiesData = [
  {
    id: 'self-awareness',
    name: '自我覺察',
    englishName: 'Self-Awareness',
    emoji: '🌸',
    color: 'pink',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-700',
    iconBg: 'bg-pink-100',
    definition:
      '認識自己，包括覺察自己的情緒、目標和價值觀，正確評估自身優缺點，和肯定自己的價值。',
    skills: [
      '辨識身體警訊與認識情緒',
      '瞭解自我需求、價值觀',
      '認識自己優缺點',
      '確認自己價值',
    ],
    reflections: [
      '我是不是已經快撐不住了？',
      '當緊張升起時，我通常會怎麼反應？',
      '我可以做些什麼讓自己好一些？',
    ],
  },
  {
    id: 'self-management',
    name: '自我管理',
    englishName: 'Self-Management',
    emoji: '🌿',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    tagBg: 'bg-green-100',
    tagText: 'text-green-700',
    iconBg: 'bg-green-100',
    definition:
      '有能力控制情緒，調節壓力和衝動，並能設定目標，擁有堅持不懈的毅力去實現個人目標。',
    skills: [
      '控制衝動',
      '管理壓力',
      '調節情緒並維持活力',
      '設定目標並朝目標努力',
    ],
    reflections: [
      '我真的很想回嘴時，通常會怎麼做？',
      '有沒有一種方法，可以讓我先穩住自己？',
      '我希望別人怎麼對我說話？',
    ],
  },
  {
    id: 'social-awareness',
    name: '社會覺察',
    englishName: 'Social Awareness',
    emoji: '💙',
    color: 'blue',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    tagBg: 'bg-sky-100',
    tagText: 'text-sky-700',
    iconBg: 'bg-sky-100',
    definition:
      '指有能力理解、同理別人，能夠尊重不同的背景和文化，並知道一般社會規範，認識家庭、學校和社區能提供的資源和支持。',
    skills: [
      '尊重他人',
      '培養同理心',
      '欣賞多樣性',
      '了解他人觀點、看法',
    ],
    reflections: [
      '他為什麼那麼不舒服？',
      '如果我站在他的立場會怎麼想？',
      '有沒有不同方式可以理解他？',
    ],
  },
  {
    id: 'relationship-skills',
    name: '人際技巧',
    englishName: 'Relationship Skills',
    emoji: '🤝',
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    iconBg: 'bg-amber-100',
    definition:
      '有能力和不同人建立和維持良好關係，包括有效溝通、積極傾聽、合作、解決衝突等，在有需要的時候尋求協助。',
    skills: [
      '培養溝通能力與他人建立關係',
      '協調與合作能力',
      '管理衝突與面對拒絕',
      '尋求協助',
    ],
    reflections: [
      '我要不要再嘗試溝通一次？',
      '什麼樣的說法，比較容易被接受？',
      '在衝突中，該怎麼說話才可以顧及尊重與專業？',
    ],
  },
  {
    id: 'responsible-decision',
    name: '負責任的決策',
    englishName: 'Responsible Decision Making',
    emoji: '⚖️',
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-700',
    iconBg: 'bg-purple-100',
    definition:
      '有能力做出負責任的決定，做決定前優先考慮道德標準、社會規範、一般常規等，並能對各種行為的後果進行評估。',
    skills: [
      '分析情勢',
      '解決問題',
      '反省自我並正確評估',
      '做決定時能妥善考慮倫理道德',
    ],
    reflections: [
      '快一點，還是再確認？',
      '我會優先考量什麼？',
      '如果出現問題，可能的影響是什麼？',
    ],
  },
]

// ─── 今日壓力包子卡片 ──────────────────────────────────────────────────────
export const stressLevelData = [
  {
    id: 1,
    score: 1,
    name: '壓力大爆炸',
    englishName: '5分',
    emoji: '😤',
    image: '/bun-1.png',
    bunEmoji: '🍡',
    color: 'red',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    selectedBg: 'bg-red-100',
    tagColor: 'text-red-600',
    description: '我現在的情緒比較滿，可能有煩躁、急迫、委屈或快要爆炸的感覺。',
    result: {
      title: '你現在可能正處於高壓或情緒過載的狀態。',
      content:
        '建議先不要急著逼自己整理好所有事情，先做一件最小的照顧行動，例如：喝水、深呼吸、離開座位一分鐘、閉眼休息 30 秒。\n\n你需要的不是更努力，而是先讓自己穩下來。',
      tip: '先穩住自己',
      tipColor: 'text-red-500',
    },
  },
  {
    id: 2,
    score: 2,
    name: '忙到想逃避',
    englishName: '4分',
    emoji: '😔',
    image: '/bun-2.png',
    bunEmoji: '🥺',
    color: 'orange',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    selectedBg: 'bg-orange-100',
    tagColor: 'text-orange-600',
    description: '我有點累，也可能有點失落、悶悶的，提不起勁。',
    result: {
      title: '你可能累了很久，只是還沒真正停下來。',
      content:
        '建議今天幫自己安排一個短暫的恢復時段，哪怕只是安靜坐一下、伸展一下、慢慢喝一杯飲品，都會有幫助。\n\n疲憊不是脆弱，而是身體在提醒你該補充能量了。',
      tip: '給自己補充能量',
      tipColor: 'text-orange-500',
    },
  },
  {
    id: 3,
    score: 3,
    name: '事情卡太多',
    englishName: '3分',
    emoji: '😐',
    image: '/bun-3.png',
    bunEmoji: '😶',
    color: 'yellow',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    selectedBg: 'bg-yellow-100',
    tagColor: 'text-yellow-600',
    description: '我沒有特別強烈的情緒，但有一種說不上來的卡住感。',
    result: {
      title: '你現在可能不是情緒爆發，而是有些麻、悶、卡住。',
      content:
        '建議試著問問自己：「我現在最需要的是什麼？」\n\n可能是喘口氣、可能是有人理解、也可能只是暫停一下。\n\n先理解自己，才能慢慢找回流動感。',
      tip: '先問問自己需要什麼',
      tipColor: 'text-yellow-600',
    },
  },
  {
    id: 4,
    score: 4,
    name: '還可以應付',
    englishName: '2分',
    emoji: '😊',
    image: '/bun-4.png',
    bunEmoji: '☺️',
    color: 'teal',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    selectedBg: 'bg-teal-100',
    tagColor: 'text-teal-600',
    description: '我目前情緒還算穩定，雖然有壓力，但還可以調整與面對。',
    result: {
      title: '你目前有一定的調節能力，狀態也相對平衡。',
      content:
        '建議持續維持生活節奏，例如固定休息、簡短運動、設定工作界線，這些都能幫助你保持穩定。\n\n照顧自己，不一定要等到很累才開始。',
      tip: '持續維持好狀態',
      tipColor: 'text-teal-600',
    },
  },
  {
    id: 5,
    score: 5,
    name: '今天很輕鬆',
    englishName: '1分',
    emoji: '😄',
    image: '/bun-5.png',
    bunEmoji: '🌟',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    selectedBg: 'bg-green-100',
    tagColor: 'text-green-600',
    description: '我今天的狀態不錯，心情相對輕鬆，也比較有餘裕。',
    result: {
      title: '你今天有不錯的能量與穩定感，這很珍貴。',
      content:
        '建議把這份好的狀態記錄下來，想想今天有哪些事幫助你維持平衡。\n\n未來在壓力來時，這些都會成為你照顧自己的方法。',
      tip: '記錄今天的平衡方式',
      tipColor: 'text-green-600',
    },
  },
]

// ─── 共用：SEL 五大能力的通關 / 未通關回饋語 ────────────────────────────────
const abilityFeedback = {
  'self-awareness': {
    pass: '穩住了！你能覺察情緒與狀態，這就是專業的起點！',
    fail: '先別硬撐～停一下看看自己，覺察到就是進步的第一步！',
  },
  'self-management': {
    pass: '很穩！再累也能收住情緒，你已在做高品質照護！',
    fail: '先 Hold 住情緒～慢一點沒關係，穩比快更重要喔！',
  },
  'social-awareness': {
    pass: '很暖！你能看見對方背後的感受，這就是同理力！',
    fail: '再多看、多觀察一點～理解對方後，溝通會更順更有效喔！',
  },
  'relationship-skills': {
    pass: '做得不錯！在壓力下還能好好溝通，既有立場又不傷關係！',
    fail: '有點可惜～遇到卡關時先別退，試著再多說一點點、換個方式再溝通看看！',
  },
  'responsible-decision': {
    pass: '很可以！再忙也守住病人安全，這就是專業的關鍵！',
    fail: '先別急著衝流程～多停一下想想風險，安全永遠比速度重要喔！',
  },
}

const abilityMeta = {
  'self-awareness': { name: '自我覺察', english: 'Self-Awareness', emoji: '🌸' },
  'self-management': { name: '自我管理', english: 'Self-Management', emoji: '🌿' },
  'social-awareness': { name: '社會覺察', english: 'Social Awareness', emoji: '💙' },
  'relationship-skills': { name: '人際技巧', english: 'Relationship Skills', emoji: '🤝' },
  'responsible-decision': { name: '負責任的決策', english: 'Responsible Decision Making', emoji: '⚖️' },
}

// 工具：把單純的 [情境, 問題, [選項陣列, 反向 index]] 組裝成完整題目物件
function buildQuestion(id, abilityKey, scenario, question, options) {
  const meta = abilityMeta[abilityKey]
  return {
    id,
    abilityKey,
    abilityName: meta.name,
    abilityEnglish: meta.english,
    abilityEmoji: meta.emoji,
    scenario,
    question,
    options: options.map((o, i) => ({
      id: ['a', 'b', 'c', 'd'][i],
      text: o.text,
      isReverse: !!o.isReverse,
    })),
    maxScore: 3,
    feedback: abilityFeedback[abilityKey],
  }
}

// ─── 藥師情境測驗題目 ──────────────────────────────────────────────────────
export const pharmacistQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '門診尖峰時段，你已經連續調劑兩個小時。突然被學姊點名：「剛剛一張處方拿錯藥了，要更換。」此時，你心裡緊張起來，開始自責，心想：「我怎麼會這樣，如果病人因為我而吃錯藥，該怎麼辦？」\n\n同時你也感覺到：手在發抖、心跳變快、注意力開始下降，但我的檯面上還有很多處方在等。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已接近壓力極限' },
      { text: '我忽略身體警訊持續工作', isReverse: true },
      { text: '我能辨識緊張與自責的情緒' },
      { text: '我能提醒自己仍具專業價值' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人因為等太久，開始不耐煩，語氣變重，甚至大聲抱怨：「你們到底有沒有在處理，為什麼這麼慢？到底要我等多久！」\n\n你其實已經很累，內心瞬間冒出不爽與委屈，但現場還有其他病人在看。',
    '面對病人的情緒爆發，你會如何應對？',
    [
      { text: '我會直接表現出不耐情緒', isReverse: true },
      { text: '我能在壓力下穩住自己的節奏' },
      { text: '我能控制情緒不直接回應病人' },
      { text: '我能以專業為目標持續應對' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你向病人解釋藥物重要性，但對方一直說：「我吃這個很不舒服！我想停藥！我不想吃了！」甚至表現出抗拒與不信任你。\n\n原本你覺得「已經講很多次，這個藥很重要，不能停藥」，但你仔細觀察發現：病人其實有點焦慮，是否曾經有不好的用藥經驗。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '我能理解病人不安與抗拒情緒' },
      { text: '我能試著從病人角度看問題' },
      { text: '我只堅持用藥衛教不理會感受', isReverse: true },
      { text: '我能尊重不同想法並調整說法' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你發現某張處方可能不適當，打電話與醫師溝通，但醫師語氣很急，甚至有點不耐煩回你：「這個藥我一直都是這樣開，沒有問題！」\n\n你當下卡住，不知道要不要再堅持下去。',
    '面對醫師的不耐回應，你會怎麼處理？',
    [
      { text: '我能在醫師不耐時冷靜表達處方疑慮' },
      { text: '我能以尊重語氣溝通，避免對立' },
      { text: '醫師不耐時，我會選擇沉默，不再提出任何專業判斷', isReverse: true },
      { text: '溝通受阻時，我會調整或尋求協助' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '前台發藥現場很忙，後面排滿病人等待領藥。你發現一張處方有疑慮，但如果確認會拖慢整體流程。\n\n此時，你心裡出現拉扯：「要不要先發藥之後再說～」「應該不會有問題吧～」',
    '面對流程與安全的拉扯，你會怎麼決定？',
    [
      { text: '忙碌時，我會先發藥再說', isReverse: true },
      { text: '我能在壓力下採取行動確認處方' },
      { text: '我能辨識處方疑慮的病安風險' },
      { text: '我決策時優先考量病人安全' },
    ],
  ),
]

// ─── 醫師情境測驗題目 ──────────────────────────────────────────────────────
export const doctorQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '門診已經延誤，你連續看診超過兩小時。此時護理師提醒你：「剛剛那位病人回來說藥物可能開錯了。」你心裡一緊，開始自責：「我怎麼會犯這種錯？如果影響病人怎麼辦？」\n\n同時你感覺到：心跳加快、專注力下降、開始煩躁，但候診區還有很多病人等著。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已處於壓力負荷狀態' },
      { text: '我能辨識焦慮與自責的情緒' },
      { text: '我忽略身體與情緒訊號，繼續快速看診', isReverse: true },
      { text: '我能提醒自己仍具備專業判斷能力' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '一位病人因等待過久情緒激動：「醫師你到底在看什麼？每次都等這麼久！」語氣帶有指責。\n\n你其實已經很疲憊，內心感到不耐與壓力，但現場還有其他病人與家屬在場。',
    '面對病人的情緒爆發，你會如何應對？',
    [
      { text: '我能控制情緒，不立即反擊或辯解' },
      { text: '我能在壓力下維持診療節奏' },
      { text: '我會直接表現出不耐或防衛態度', isReverse: true },
      { text: '我能以專業為核心持續應對病人' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你建議病人接受某項治療（例如：長期用藥或侵入性檢查），但病人強烈抗拒：「我之前做過很不舒服！我不要再做！」甚至對醫療產生不信任。\n\n你原本認為「這是標準治療，對他最好」，但你觀察到病人其實帶有焦慮與過去負面經驗。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '我只強調醫療必要性，不處理情緒', isReverse: true },
      { text: '我能從病人過去經驗與角度思考' },
      { text: '我能理解病人的不安與抗拒情緒' },
      { text: '我能調整說法並尊重病人的想法' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與其他科別醫師討論病人治療計畫時，對方語氣急促且略顯不耐：「這個 case 我已經處理過很多次，不需要再改。」\n\n你對治療仍有疑慮，但擔心繼續溝通會造成衝突。',
    '面對同儕醫師的不耐回應，你會怎麼處理？',
    [
      { text: '我能在對方不耐時，仍清楚表達臨床疑慮' },
      { text: '我能用尊重語氣溝通，避免對立' },
      { text: '溝通受阻時，我會尋求其他管道或團隊協助' },
      { text: '對方態度不佳時，我會放棄溝通，不再處理人和問題', isReverse: true },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '門診壅塞，你必須加快看診速度。此時你發現某位病人的檢查數據與症狀不太一致，可能需要進一步確認，但這會增加時間成本並延誤後續病人。\n\n你心中出現拉扯：「先照原本計畫處理應該也可以吧？」「還是之後再追蹤？」',
    '面對效率與病安的衝突，你會怎麼決定？',
    [
      { text: '我能辨識此決策可能帶來的病安風險' },
      { text: '我能在壓力下仍選擇進一步確認' },
      { text: '在忙碌情境下，我可能傾向先快速處理', isReverse: true },
      { text: '我在決策時以病人安全為優先' },
    ],
  ),
]

// ─── 住院醫師情境測驗題目 ──────────────────────────────────────────────────
export const residentQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你正在值班，已連續工作超過 12 小時。此時急診通知一位病人需收住院，你在處理時發現剛剛開立的醫囑可能有劑量錯誤。\n\n你瞬間感到心慌、自責：「我是不是犯了嚴重錯誤？」同時你覺得頭昏、注意力變差，但現場還有其他病人等待處理。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已接近身心負荷極限' },
      { text: '我忽略身體與情緒訊號，繼續處理其他工作', isReverse: true },
      { text: '我能辨識焦慮與自責的情緒' },
      { text: '我能提醒自己冷靜下來重新檢視醫囑' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病房家屬因等待檢查結果不耐煩，語氣變得強烈：「醫師你們到底有沒有在處理？都拖多久了！」\n\n你其實已經很疲憊，心中感到壓力與不被理解，但當下需要回應。',
    '面對家屬的情緒壓力，你會如何應對？',
    [
      { text: '我能控制情緒，不立即情緒性回應' },
      { text: '我能在壓力下維持穩定與專業' },
      { text: '我會直接表現出不耐或防衛', isReverse: true },
      { text: '我能調整語氣並持續完成說明' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你建議病人接受某項檢查或治療，但病人明顯抗拒：「上次做這個很痛苦，我不要再做了！」甚至開始懷疑醫療建議。\n\n你原本認為這是必要處置，但你觀察到病人帶有焦慮與不信任。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '我只強調醫療必要性，不理會情緒', isReverse: true },
      { text: '我能從病人角度重新思考溝通方式' },
      { text: '我能理解病人的不安與過去經驗影響' },
      { text: '我能調整說明方式並回應病人的感受' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你向主治醫師報告病人狀況並提出建議，但主治語氣急促地說：「照原本計畫就好，不用想太多。」\n\n你對處置仍有疑慮，但擔心再提出會被認為不夠成熟或影響評價。',
    '面對層級壓力與溝通困境，你會怎麼處理？',
    [
      { text: '我能在尊重前提下表達自己的臨床判斷' },
      { text: '我能選擇適當時機再次溝通' },
      { text: '面對層級壓力，我會選擇沉默，不再提出任何疑問', isReverse: true },
      { text: '必要時，我會尋求其他資深醫師或團隊討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '夜間值班時，病房同時有多位病人需要處理。此時某位病人出現異常數據，但尚未有明顯症狀。\n\n你心中出現拉扯：「要不要現在就處理？還是先觀察？」如果立即處理，可能影響其他病人的照護效率。',
    '面對時間壓力與病安風險，你會怎麼決定？',
    [
      { text: '我能辨識此狀況可能潛在的風險' },
      { text: '我可能傾向先延後處理', isReverse: true },
      { text: '我能在壓力下優先處理高風險個案' },
      { text: '我在決策時以病人安全為優先' },
    ],
  ),
]

// ─── 護理師情境測驗題目 ────────────────────────────────────────────────────
export const nurseQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你正在病房忙碌中，已經連續處理多位病人的給藥與評估。此時你突然發現，剛剛某床病人的藥物給藥時間點，可能延誤了。\n\n你心中一驚，開始自責：「我怎麼會漏掉？會不會影響病人？」同時你感到疲憊、心跳加快、注意力下降，但還有其他病人需要照顧。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已處於疲勞與壓力狀態' },
      { text: '我能辨識焦慮、自責等情緒' },
      { text: '我忽略這些感受，繼續完成手邊工作', isReverse: true },
      { text: '我能提醒自己冷靜下來並重新確認狀況' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '一位病人家屬，因等待協助過久，到護理站反應且語氣變得不耐煩：「護理師怎麼都沒人來？到底要等多久？」\n\n你當下其實已經很忙也很累，內心感到委屈與壓力。',
    '面對家屬的情緒，你會如何應對？',
    [
      { text: '我能控制情緒，不立即情緒性回應' },
      { text: '我能在壓力下維持專業態度' },
      { text: '我能調整語氣並持續提供協助' },
      { text: '我會表現出不耐或直接回應情緒', isReverse: true },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你在執行護理措施時，病人表現出抗拒：「我不想再打針了，很痛！」甚至對你產生不信任。\n\n你原本認為這是必要處置，但觀察到病人其實帶有害怕與焦慮。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '我能理解病人的恐懼與不安' },
      { text: '我能從病人的角度思考感受' },
      { text: '我只強調醫囑執行，不處理情緒', isReverse: true },
      { text: '我能調整方式並回應病人感受' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你發現某位病人的狀況有變化，向醫師回報，但醫師回應簡短，甚至略顯不耐：「先觀察就好。」\n\n你仍有疑慮，但不確定是否要再強調。',
    '面對跨專業溝通壓力，你會怎麼處理？',
    [
      { text: '我能清楚表達病人狀況與我的觀察' },
      { text: '我能用尊重語氣再次說明疑慮' },
      { text: '必要時，我會持續追蹤或尋求其他協助' },
      { text: '對方冷冷回應，我就乾脆不講、也不再追蹤', isReverse: true },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '交班前時間緊迫，你還有多項護理工作未完成。此時你發現某位病人的生命徵象略有異常，但尚未達明顯危急標準。\n\n你心中出現拉扯：「要不要現在處理？還是交班後再說？」',
    '面對時間壓力與病人安全，你會怎麼決定？',
    [
      { text: '我能辨識潛在的病安風險' },
      { text: '我能在壓力下優先處理重要問題' },
      { text: '我可能傾向先完成其他工作', isReverse: true },
      { text: '我在決策時以病人安全為優先' },
    ],
  ),
]

// ─── 醫檢師情境測驗題目 ────────────────────────────────────────────────────
export const medTechQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在忙碌時段處理檢體，回頭檢查時，發現某筆檢驗結果異常，懷疑可能在前處理或操作過程出現問題。\n\n你心中一緊：「是不是我哪裡出錯？會不會影響醫師判斷？」同時你感到壓力上升、專注力下降，甚至有點想先放著繼續處理其他檢體。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己出現壓力或疲勞' },
      { text: '我忽略身心狀態持續工作', isReverse: true },
      { text: '我能辨識焦慮與自我懷疑的情緒' },
      { text: '我能提醒自己仍具專業判斷能力' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '臨床端來電催促報告：「這個檢驗怎麼還沒出來？醫師等很久了！」語氣急促甚至帶壓力。\n\n你已經在高工作量下運作，內心出現煩躁與壓力。',
    '面對這種情境，你會如何應對？',
    [
      { text: '我會表現出不耐或倉促處理', isReverse: true },
      { text: '我能維持穩定流程，避免出錯' },
      { text: '我能控制情緒，不被催促影響判斷' },
      { text: '我能以檢驗品質與正確性為優先' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '臨床單位質疑某項檢驗結果，認為與病人狀況不符，甚至表達不信任。\n\n你原本覺得「結果就是這樣」，但也開始思考臨床端的疑慮。',
    '面對這種情況，你會怎麼理解？',
    [
      { text: '我能理解臨床端對結果的焦慮' },
      { text: '我能從臨床應用角度思考問題' },
      { text: '我只堅持檢驗數據不考慮臨床情境', isReverse: true },
      { text: '我能主動釐清並調整溝通方式' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你判斷某檢體品質不佳，建議重抽，但臨床單位表示困難或不願配合。\n\n你不確定是否要再堅持你的專業判斷。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我能清楚表達檢體品質與風險' },
      { text: '一旦對方不配合，我會放棄溝通，不再追蹤或處理任何問題', isReverse: true },
      { text: '我能以尊重方式與臨床端溝通' },
      { text: '我會尋求主管或其他管道協助' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '工作量大，你發現某檢驗結果需要進一步確認（重做或複檢），但這會延遲報告時間。\n\n你心中掙扎：「先放行應該也差不多？還是要再確認？」',
    '面對效率與品質的衝突，你會怎麼決定？',
    [
      { text: '我能辨識檢驗錯誤可能帶來的風險' },
      { text: '我能在壓力下仍選擇進一步確認' },
      { text: '忙碌時我會先放行結果再說', isReverse: true },
      { text: '我決策時優先考量檢驗正確性與病人安全' },
    ],
  ),
]

// ─── 放射師情境測驗題目 ────────────────────────────────────────────────────
export const radiologistQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在影像室已經連續操作檢查一段時間，工作量很大。此時你回頭檢視剛完成的一位病人影像，發現影像品質不理想，可能需要重拍。\n\n你心中瞬間緊張：「剛剛是不是我擺位沒有做好？會不會影響診斷？」同時你也察覺：開始焦躁、專注力下降，甚至有點想忽略這個問題繼續下一位病人。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已接近疲勞或壓力極限' },
      { text: '我能辨識焦慮與自責的情緒' },
      { text: '我忽略身體與心理警訊繼續工作', isReverse: true },
      { text: '我能提醒自己仍具專業判斷能力' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '檢查室外病人等候時間變長，有家屬開始跟你抱怨：「怎麼這麼慢？不是只照個檢查而已嗎？」語氣不耐甚至帶有指責。\n\n你其實已經很疲累，內心出現煩躁與壓力，但還有許多檢查排隊中。',
    '面對病人的情緒反應，你會如何應對？',
    [
      { text: '我能控制情緒，不立即回應負面情緒' },
      { text: '我能在壓力下維持工作節奏與安全流程' },
      { text: '我會直接表現出不耐或敷衍回應', isReverse: true },
      { text: '我能以專業與病人安全為優先持續應對' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你準備替一位病人進行電腦斷層（CT）檢查，但病人明顯緊張，一直詢問：「這個會不會有輻射？會不會對身體不好？」甚至出現抗拒反應。\n\n你原本覺得「這是必要檢查，應該配合」，但你也觀察到病人可能對輻射有恐懼或過去有不好的醫療經驗。',
    '面對病人的不安，你會怎麼理解？',
    [
      { text: '我能理解病人對檢查與輻射的焦慮' },
      { text: '我能試著從病人的角度思考' },
      { text: '我能調整說明方式以增加病人安心感' },
      { text: '我只專注完成檢查，不理會情緒反應', isReverse: true },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '醫師要求加做某項影像，但你判斷目前檢查條件不足，可能影響影像品質或增加不必要的輻射暴露。當你回報時，醫師語氣急促：「先做就對了，不用想那麼多。」\n\n你當下猶豫，不確定是否要再提出專業意見。',
    '面對這種溝通情境，你會怎麼處理？',
    [
      { text: '我能在壓力下冷靜表達專業判斷' },
      { text: '我能用尊重語氣與醫師溝通影像品質與安全' },
      { text: '面對醫師不耐，我會選擇沉默，不再提出任何專業判斷', isReverse: true },
      { text: '溝通受阻時，我會尋求資深同仁或主管協助' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '現場檢查量非常大，病人持續排隊等待。此時你發現一位病人的檢查條件（如：身份確認、檢查部位或對比劑評估）有疑慮，但如果重新確認會延誤整體流程。\n\n你心中出現拉扯：「先做應該也沒問題吧？」「後面還很多人在等待…」',
    '面對效率與安全的衝突，你會怎麼決定？',
    [
      { text: '我能辨識檢查錯誤可能帶來的風險' },
      { text: '忙碌時，我會先完成檢查再說', isReverse: true },
      { text: '我能在壓力下仍選擇重新確認資訊' },
      { text: '我決策時優先考量病人安全與正確性' },
    ],
  ),
]

// ─── 營養師情境測驗題目 ────────────────────────────────────────────────────
export const nutritionistQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在門診進行飲食衛教時，發現一位糖尿病病人血糖控制持續不佳。你已多次給予建議，但成效有限。\n\n你心中開始出現：「是不是我講得不夠好？」「怎麼都沒有改變？」同時你感覺到挫折、疲憊，甚至有點想快速結束這次衛教。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已出現挫折或疲勞' },
      { text: '我能辨識失落或自我懷疑的情緒' },
      { text: '我忽略這些感受繼續進行衛教', isReverse: true },
      { text: '我能提醒自己仍具專業價值' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人語氣不耐地說：「飲食控制根本沒用，我照吃藥就好了！」甚至對你的建議顯得抗拒。\n\n你內心感到被否定與不被尊重，但仍需持續溝通。',
    '面對病人的反應，你會如何應對？',
    [
      { text: '我能控制情緒，不立即反駁' },
      { text: '我能維持穩定的溝通節奏' },
      { text: '我會表現出不耐或冷淡回應', isReverse: true },
      { text: '我能專注於專業目標持續溝通' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你發現病人無法配合飲食控制，但深入了解後，發現其家庭飲食習慣、經濟狀況或文化因素影響很大。\n\n你原本覺得「應該照建議執行」，但開始意識到病人其實有其困難。',
    '面對這樣的情境，你會怎麼理解？',
    [
      { text: '我能理解病人的生活限制與壓力' },
      { text: '我能從病人的情境思考問題' },
      { text: '我只強調飲食規範不考慮背景', isReverse: true },
      { text: '我能調整建議以符合個別情境' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與醫師或護理師討論病人飲食計畫，但對方認為「先控制藥物比較重要」，對營養介入重視不足。\n\n你不確定是否要再進一步說明。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我能清楚表達營養介入的重要性' },
      { text: '我能以尊重方式與團隊溝通' },
      { text: '面對不重視，我會沉默以對且不再追蹤', isReverse: true },
      { text: '我會尋求其他方式或時機溝通' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '門診時間有限，你必須在「完整個別化衛教」與「快速給予標準建議」之間做選擇。\n\n你心中掙扎：「時間不夠，要不要直接講重點就好？」',
    '面對效率與品質的拉扯，你會怎麼決定？',
    [
      { text: '我能辨識簡化建議可能影響效果' },
      { text: '我能在時間限制下做出適當調整' },
      { text: '我會直接給標準建議快速結束', isReverse: true },
      { text: '我優先考量病人長期健康與可行性' },
    ],
  ),
]

// ─── 呼吸治療師情境測驗題目 ────────────────────────────────────────────────
export const respiratoryQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在病房調整呼吸器設定後，回頭檢視數據，發現病人的血氧仍不理想，可能剛剛設定不夠適當。\n\n你心中一緊：「是不是我判斷錯了？會不會影響病人？」同時你感覺到壓力上升、心跳加快，注意力開始分散，但現場還有其他病人需要處理。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己已出現壓力或疲勞' },
      { text: '我能辨識焦慮與自我懷疑的情緒' },
      { text: '我能提醒自己仍具專業判斷能力' },
      { text: '我忽略身體與心理警訊繼續工作', isReverse: true },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人家屬在旁焦急詢問：「為什麼呼吸器一直調整？病人是不是變嚴重了？」語氣緊張甚至帶點質疑。\n\n你已經連續工作一段時間，感到疲憊，內心出現壓力與不耐。',
    '面對家屬情緒，你會如何應對？',
    [
      { text: '我能控制情緒，不立即表現不耐' },
      { text: '我能在壓力下維持穩定處理流程' },
      { text: '我會表現出不耐或簡化回應', isReverse: true },
      { text: '我能以專業與病人安全為優先持續應對' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你需要協助病人進行抽痰或侵入性呼吸治療，但病人表現出抗拒與不安，甚至出現掙扎。\n\n你原本認為「這是必要處置」，但也觀察到病人可能感到恐懼或缺乏理解。',
    '面對病人的反應，你會怎麼理解？',
    [
      { text: '我只專注完成操作不理會情緒', isReverse: true },
      { text: '我能從病人的角度思考感受' },
      { text: '我能理解病人的恐懼與不安' },
      { text: '我能調整說明與方式降低不安' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你評估病人呼吸狀況後，建議調整呼吸器設定或改變治療策略，但醫師當下表示：「先照原本方式就好，不用調整。」\n\n你不確定是否要再提出你的專業判斷。',
    '面對這種情境，你會怎麼處理？',
    [
      { text: '我能冷靜表達專業評估與建議' },
      { text: '我能以尊重語氣與醫師溝通' },
      { text: '一旦醫師不同意，我就停止溝通，也不再表達任何專業意見', isReverse: true },
      { text: '我會尋求其他管道或資深同仁協助' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '病房工作量大，你需要快速處理多位病人。此時你發現某位病人的呼吸器參數或氧氣設定可能需要重新評估，但如果仔細確認會影響整體進度。\n\n你心中掙扎：「先維持現狀應該可以吧？」「後面還很多病人…」',
    '面對效率與安全的衝突，你會怎麼決定？',
    [
      { text: '我能辨識呼吸治療設定的潛在風險' },
      { text: '我能在壓力下仍選擇重新評估' },
      { text: '忙碌時我會先維持現狀再說', isReverse: true },
      { text: '我決策時優先考量病人安全' },
    ],
  ),
]

// ─── 社工師情境測驗題目 ────────────────────────────────────────────────────
export const socialWorkerQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在與一位長期照護壓力沉重的家屬會談時，對方情緒崩潰，開始哭泣並抱怨醫療與家庭負擔。\n\n你一邊傾聽，一邊感受到內心沉重，甚至出現無力感與情緒被牽動，開始有點疲憊與想結束會談的念頭。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己出現情緒負荷或疲勞' },
      { text: '我能辨識同理、壓力或無力感' },
      { text: '我忽略自身狀態持續會談', isReverse: true },
      { text: '我能提醒自己維持專業角色' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '家屬情緒激動，語氣提高，甚至指責醫療團隊：「你們根本沒有幫助！」\n\n你內心感到委屈與壓力，但仍需維持會談進行。',
    '面對情緒張力，你會如何應對？',
    [
      { text: '我能控制情緒，不被對方情緒牽動' },
      { text: '我能穩定節奏，維持會談品質' },
      { text: '我能專注於支持與問題解決' },
      { text: '我會表現出防衛或不耐', isReverse: true },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '一位病人拒絕接受出院後的照護安排，但你了解其家庭支持不足、經濟壓力大，可能難以遵從。\n\n你原本希望「照建議安排」，但也意識到背後有複雜因素。',
    '面對這樣的情境，你會怎麼理解？',
    [
      { text: '我能理解病人與家庭的壓力與限制' },
      { text: '我能從其生活脈絡思考問題' },
      { text: '我只強調制度與流程要求', isReverse: true },
      { text: '我能調整方案以符合實際情境' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與醫療團隊討論個案時，醫師希望儘快出院，但你評估病人社會支持不足，可能出院後風險高。\n\n你不確定是否要堅持你的評估。',
    '面對跨專業意見不同，你會怎麼處理？',
    [
      { text: '一旦對方堅持，我會完全停止表達，也不再參與相關討論', isReverse: true },
      { text: '我能以尊重方式與團隊溝通' },
      { text: '我能清楚表達社會風險評估' },
      { text: '我會尋求會議或其他管道討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '你面對一個高風險個案（如家暴、忽視、資源不足），需要在「尊重個案意願」與「保護安全」之間做決策。\n\n你內心掙扎：「如果過度介入會影響關係，但不介入可能有風險…」',
    '面對倫理拉扯，你會怎麼決定？',
    [
      { text: '我能辨識潛在風險與倫理議題' },
      { text: '我能在壓力下做出專業判斷' },
      { text: '我傾向避免衝突而不採取行動', isReverse: true },
      { text: '我優先考量個案安全與最佳利益' },
    ],
  ),
]

// ─── 物理治療師情境測驗題目 ────────────────────────────────────────────────
export const physicalTherapistQuizData = [
  buildQuestion(
    1,
    'self-awareness',
    '你在帶一位術後復健的病人進行訓練，發現其恢復進度不如預期。你已多次調整計畫，但成效有限。\n\n你心中開始出現：「是不是我訓練設計有問題？」「為什麼都沒有進步？」同時你感到挫折、疲憊，甚至有點想簡化治療內容快速完成療程。',
    '在這個情境中，你會怎麼做？',
    [
      { text: '我能察覺自己出現挫折或疲勞' },
      { text: '我能辨識失落或自我懷疑的情緒' },
      { text: '我忽略這些感受繼續進行治療', isReverse: true },
      { text: '我能提醒自己仍具專業能力' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人因訓練過程出現疼痛或不適，開始抱怨：「這樣做真的有用嗎？會不會讓我更糟？」語氣不耐甚至抗拒配合。\n\n你內心感到被質疑與壓力，但還有其他病人在等待。',
    '面對病人的反應，你會如何應對？',
    [
      { text: '我能控制情緒，不立即反駁' },
      { text: '我能維持穩定節奏繼續引導' },
      { text: '我會表現出不耐或降低投入', isReverse: true },
      { text: '我能專注於專業目標持續治療' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你發現病人復健依從性不佳，常未按時練習或缺席，但進一步了解後，發現其工作、家庭或經濟壓力影響很大。\n\n你原本覺得「應該要配合訓練」，但開始意識到其實存在困難。',
    '面對這種情境，你會怎麼理解？',
    [
      { text: '我只強調復健重要性不考慮背景', isReverse: true },
      { text: '我能從病人的處境思考問題' },
      { text: '我能理解病人的生活壓力與限制' },
      { text: '我能調整訓練計畫以提高可行性' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你認為某位病人需要增加復健強度或延長療程，但醫師或家屬認為「目前這樣就好」，對你的建議有所保留。\n\n你不確定是否要再提出專業意見。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我能清楚表達治療判斷與理由' },
      { text: '對方一旦不同意，我就停止溝通，也不再表達任何專業意見', isReverse: true },
      { text: '我能以尊重方式與對方溝通' },
      { text: '我會尋求其他溝通機會或團隊支持' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '復健室很忙，你需要在「完整個別化訓練」與「快速完成基本療程」之間做選擇。\n\n你心中掙扎：「時間不夠，要不要先做基本的就好？」',
    '面對效率與品質的拉扯，你會怎麼決定？',
    [
      { text: '我能辨識簡化訓練可能影響成效' },
      { text: '我能在時間限制下調整策略' },
      { text: '我會直接做標準流程快速完成', isReverse: true },
      { text: '我優先考量病人功能恢復與安全' },
    ],
  ),
]

// ─── 各職類設定（卡片視覺 + 測驗資料 + 介紹文字） ───────────────────────────
export const professionsConfig = {
  pharmacist: {
    id: 'pharmacist',
    name: '藥師',
    title: '藥師情境測驗',
    englishName: 'Pharmacist Scenario',
    emoji: '💊',
    description: '在用藥安全、病人溝通與臨床壓力中，練習情緒調節與專業判斷。',
    bgColor: 'bg-soft-blue',
    accentColor: 'bg-sky-500',
    borderColor: 'border-sky-200',
    targetPage: 'pharmacist-quiz',
    quizData: pharmacistQuizData,
  },
  doctor: {
    id: 'doctor',
    name: '醫師',
    title: '醫師情境測驗',
    englishName: 'Physician Scenario',
    emoji: '🩺',
    description: '在門診壅塞、處置決策與病人溝通中，練習壓力下的專業核心。',
    bgColor: 'bg-red-50',
    accentColor: 'bg-red-400',
    borderColor: 'border-red-200',
    targetPage: 'doctor-quiz',
    quizData: doctorQuizData,
  },
  resident: {
    id: 'resident',
    name: '住院醫師',
    title: '住院醫師情境測驗',
    englishName: 'Resident Physician Scenario',
    emoji: '👨‍⚕️',
    description: '在值班連勤、層級壓力與夜間決策中，練習穩定與自我照顧。',
    bgColor: 'bg-rose-50',
    accentColor: 'bg-rose-400',
    borderColor: 'border-rose-200',
    targetPage: 'resident-quiz',
    quizData: residentQuizData,
  },
  nurse: {
    id: 'nurse',
    name: '護理師',
    title: '護理師情境測驗',
    englishName: 'Nursing Scenario',
    emoji: '🏥',
    description: '面對病人需求、家屬情緒與臨床壓力，學習在高強度環境中保持穩定。',
    bgColor: 'bg-pink-50',
    accentColor: 'bg-pink-400',
    borderColor: 'border-pink-200',
    targetPage: 'nurse-quiz',
    quizData: nurseQuizData,
  },
  medTech: {
    id: 'medTech',
    name: '醫檢師',
    title: '醫檢師情境測驗',
    englishName: 'Medical Technologist Scenario',
    emoji: '🔬',
    description: '在精準檢驗與時間壓力中，練習專注、判斷與自我調節。',
    bgColor: 'bg-purple-50',
    accentColor: 'bg-purple-400',
    borderColor: 'border-purple-200',
    targetPage: 'medTech-quiz',
    quizData: medTechQuizData,
  },
  radiologist: {
    id: 'radiologist',
    name: '放射師',
    title: '放射師情境測驗',
    englishName: 'Radiology Technologist Scenario',
    emoji: '📷',
    description: '在影像品質、輻射溝通與檢查節奏中，練習穩定與專業判斷。',
    bgColor: 'bg-indigo-50',
    accentColor: 'bg-indigo-400',
    borderColor: 'border-indigo-200',
    targetPage: 'radiologist-quiz',
    quizData: radiologistQuizData,
  },
  nutritionist: {
    id: 'nutritionist',
    name: '營養師',
    title: '營養師情境測驗',
    englishName: 'Dietitian Scenario',
    emoji: '🥗',
    description: '在飲食衛教、跨團隊溝通與行為改變中，練習同理與堅持。',
    bgColor: 'bg-green-50',
    accentColor: 'bg-green-400',
    borderColor: 'border-green-200',
    targetPage: 'nutritionist-quiz',
    quizData: nutritionistQuizData,
  },
  respiratory: {
    id: 'respiratory',
    name: '呼吸治療師',
    title: '呼吸治療師情境測驗',
    englishName: 'Respiratory Therapist Scenario',
    emoji: '🫁',
    description: '在呼吸器調整、急性處置與家屬焦慮中，練習穩定與安全決策。',
    bgColor: 'bg-cyan-50',
    accentColor: 'bg-cyan-400',
    borderColor: 'border-cyan-200',
    targetPage: 'respiratory-quiz',
    quizData: respiratoryQuizData,
  },
  socialWorker: {
    id: 'socialWorker',
    name: '社工師',
    title: '社工師情境測驗',
    englishName: 'Social Worker Scenario',
    emoji: '🤲',
    description: '在情緒承接、出院安置與倫理拉扯中，練習專業界線與自我照顧。',
    bgColor: 'bg-amber-50',
    accentColor: 'bg-amber-400',
    borderColor: 'border-amber-200',
    targetPage: 'socialWorker-quiz',
    quizData: socialWorkerQuizData,
  },
  physicalTherapist: {
    id: 'physicalTherapist',
    name: '物理治療師',
    title: '物理治療師情境測驗',
    englishName: 'Physical Therapist Scenario',
    emoji: '🦴',
    description: '在復健進度、訓練設計與病人配合度中，練習耐心與彈性溝通。',
    bgColor: 'bg-teal-50',
    accentColor: 'bg-teal-400',
    borderColor: 'border-teal-200',
    targetPage: 'physicalTherapist-quiz',
    quizData: physicalTherapistQuizData,
  },
}

// ─── 情境應用職類卡片（從 professionsConfig 衍生） ─────────────────────────
export const scenarioCategories = Object.values(professionsConfig).map((p) => ({
  id: p.id,
  name: `${p.name}情境測驗`,
  englishName: p.englishName,
  emoji: p.emoji,
  bgColor: p.bgColor,
  accentColor: p.accentColor,
  borderColor: p.borderColor,
  description: p.description,
  status: 'open',
  buttonLabel: '開始測驗',
  targetPage: p.targetPage,
}))

// ─── 學習補給：紓壓小幫手 ────────────────────────────────────────────────
export const learningSupportData = [
  {
    id: 'breathing',
    title: '1分鐘呼吸調節站',
    emoji: '🫁',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    accentColor: 'text-sky-600',
    btnColor: 'bg-sky-500 hover:bg-sky-600',
    description:
      '當腦袋很滿、心跳很快、情緒快要衝上來時，先回到呼吸。跟著節奏慢慢吸氣、停留、吐氣，幫助自己從忙亂中慢慢穩下來。',
    buttonLabel: '開始呼吸練習',
    action: 'breathing',
  },
  {
    id: 'emotion',
    title: '今天的情緒戳戳樂',
    emoji: '💬',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    accentColor: 'text-pink-600',
    btnColor: 'bg-pink-400 hover:bg-pink-500',
    description:
      '透過可愛互動方式，點選今天最接近你的心情。每一種情緒都會有一句溫柔提醒，讓你知道：原來現在的我，不需要假裝沒事。',
    buttonLabel: '來戳一下情緒',
    action: 'emotion',
  },
  {
    id: 'buncard',
    title: '包子舒壓翻翻卡',
    emoji: '🥟',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600',
    btnColor: 'bg-amber-400 hover:bg-amber-500',
    description:
      '用輕鬆小遊戲的方式，翻出今天屬於你的療癒包子卡。每一張卡片都附上一句 SEL 小提醒或暖心話。',
    buttonLabel: '翻出今日包子卡',
    action: 'buncard',
  },
  {
    id: 'throwstress',
    title: '把壓力丟出去',
    emoji: '🗑️',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600',
    btnColor: 'bg-green-500 hover:bg-green-600',
    description:
      '把今天讓你煩躁、疲累、委屈或卡住的事情，用互動方式寫下來、拖曳丟掉它。幫自己透過小小儀式放下一點重量。',
    buttonLabel: '開始丟掉壓力',
    action: 'throwstress',
  },
  {
    id: 'bubblepop',
    title: '戳氣泡紓壓',
    emoji: '🫧',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600',
    btnColor: 'bg-blue-400 hover:bg-blue-500',
    description: '把壓力詞彙裝進氣泡裡，一顆一顆戳破它們！每戳破一顆，就少一份煩惱。',
    buttonLabel: '開始戳氣泡',
    action: 'bubblepop',
  },
  {
    id: 'growflower',
    title: '種花朵遊戲',
    emoji: '🌸',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    accentColor: 'text-rose-600',
    btnColor: 'bg-rose-400 hover:bg-rose-500',
    description: '照顧自己就像種花一樣。點擊澆水，讓每朵花從種子慢慢開花，種滿花圃就完成了！',
    buttonLabel: '開始種花',
    action: 'growflower',
  },
]

// ─── 好站連結 ──────────────────────────────────────────────────────────────
export const resourceLinksData = [
  {
    id: 'chickensoup',
    source: '雞湯來了',
    title: '30年間，SEL 從選修到必修',
    description: '社會情緒學習一詞，隨著科技和社群媒體的演變，以及後疫情時代的種種需求而受到廣泛重視，從選修成為必修課題。',
    tag: '#SEL的核心概念',
    url: 'https://chickensoupfamily.com/2023/06/27/sel/',
    image: '/link-chickensoup.jpg.png',
  },
  {
    id: 'parenting',
    source: '親子天下',
    title: 'SEL 是什麼？社會情緒學習技巧、優點有哪些？',
    description: '社會情緒學習（SEL）對孩子有什麼幫助？在家這樣教，從生活中培養自我覺察與人際互動的能力。',
    tag: '#SEL的核心概念',
    url: 'https://site.parenting.com.tw/topic/SEL-927',
    image: '/link-parenting.jpg.png',
  },
  {
    id: 'educator',
    source: '教育家',
    title: 'SEL 是什麼？4方法讓社會情緒學習融入課程',
    description: '從課程設計到日常互動，教育工作者如何透過四大實踐方法，將社會情緒學習帶入教室與職場。',
    tag: '#SEL教學應用',
    url: 'https://teachersblog.edu.tw/events/1956',
    image: '/link-educator.jpg.png',
  },
  {
    id: 'sel-taiwan',
    source: 'SEL in Taiwan',
    title: '社會情緒學習 SEL in Taiwan',
    description: '台灣 SEL 推廣社群，持續分享最新社會情緒學習資訊、活動消息與教育實踐資源。',
    tag: '#SEL台灣社群',
    url: 'https://www.facebook.com/SELinTaiwan/',
    image: '/link-sel-taiwan.jpg.png',
  },
]

// ─── 翻翻卡：暖心包子卡片集 ──────────────────────────────────────────────
export const bunCards = [
  { emoji: '🌸', message: '今天辛苦了，你已經做得很好了。' },
  { emoji: '🌿', message: '先深呼吸，每一次吐氣都是放鬆的開始。' },
  { emoji: '☀️', message: '壓力是一種訊號，不是弱點，可以用來提醒你對它的重視程度。' },
  { emoji: '🍵', message: '給自己泡杯茶的時間，這也是專業能力。' },
  { emoji: '🌈', message: '覺察到情緒，已是自我照顧的第一步。' },
  { emoji: '💙', message: '你的善良和付出，都有它的價值。' },
  { emoji: '🍀', message: '今天已經完成許多事。明天，我們繼續努力。' },
  { emoji: '🌙', message: '讓自己休息，不是放棄，是為了繼續前行。' },
]

// ─── 情緒戳戳樂 ──────────────────────────────────────────────────────────
export const emotionPunchData = [
  { id: 1, emoji: '😤', name: '煩躁', message: '煩躁代表你在乎，先讓自己喘一口氣吧。' },
  { id: 2, emoji: '😔', name: '失落', message: '失落的時候，溫柔對待自己比任何事都重要。' },
  { id: 3, emoji: '😰', name: '焦慮', message: '焦慮是心在提醒你，不妨先停下來深呼吸。' },
  { id: 4, emoji: '😪', name: '疲憊', message: '疲憊是真實的，你值得好好休息。' },
  { id: 5, emoji: '😊', name: '平靜', message: '這份平靜是你努力來的，好好珍惜。' },
  { id: 6, emoji: '😄', name: '開心', message: '今天的好心情，值得記錄下來！' },
  { id: 7, emoji: '😢', name: '委屈', message: '委屈也是一種真實感受，你不需要假裝沒事。' },
  { id: 8, emoji: '😌', name: '放鬆', message: '能放鬆是一種能力，享受這一刻。' },
]
