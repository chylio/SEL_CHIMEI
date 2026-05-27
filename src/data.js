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
      { text: '「我好像快撐不住了…有點超出負荷」' },
      { text: '「先不要管這些感覺，後面還一堆處方，先做完再說」', isReverse: true },
      { text: '「我現在真的很緊張又很自責…一直在想剛剛的錯」' },
      { text: '「雖然出錯了，但我還是有專業，可以先穩住自己」' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人因為等太久，開始不耐煩，語氣變重，甚至大聲抱怨：「你們到底有沒有在處理，為什麼這麼慢？到底要我等多久！」\n\n你其實已經很累，內心瞬間冒出不爽與委屈，但現場還有其他病人在看。',
    '面對病人的情緒爆發，你會如何應對？',
    [
      { text: '「真的有點不爽，直接回嘴:今天人很多，來醫院就是要等啊」', isReverse: true },
      { text: '「雖然很煩很累了…但還是要撐住節奏，不然會更亂」' },
      { text: '「先忍住，不要把不爽表現在臉上」' },
      { text: '「先把藥物發正確最重要，委屈情緒晚點再說」' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你向病人解釋藥物重要性，但對方一直說：「我吃這個很不舒服！我想停藥！我不想吃了！」甚至表現出抗拒與不信任你。\n\n原本你覺得「已經講很多次，這個藥很重要，不能停藥」，但你仔細觀察發現：病人其實有點焦慮，是否曾經有不好的用藥經驗。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '「他其實是在害怕副作用，並不是故意要跟我作對」' },
      { text: '「如果我是他，吃了藥不舒服，可能也會害怕或不想吃」' },
      { text: '「我都講那麼多次不能停藥了，還不聽，真的很難溝通ㄟ」', isReverse: true },
      { text: '「或許病人有其他擔心的地方，我來換個方式講看看」' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你發現某張處方可能不適當，打電話與醫師溝通，但醫師語氣很急，甚至有點不耐煩回你：「這個藥我一直都是這樣開，沒有問題！」\n\n你當下卡住，不知道要不要再堅持下去。',
    '面對醫師的不耐回應，你會怎麼處理？',
    [
      { text: '「我再試著冷靜講看看，不然怕後續病人回家後，會更難處理」' },
      { text: '「我會把語氣放軟一點，先讓溝通氣氛不要太僵」' },
      { text: '「他都這樣反應了…算了，我就不要再講了」', isReverse: true },
      { text: '「不行，我還是要想辦法讓對方理解，或找學長姐一起處理」' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '前台發藥現場很忙，後面排滿病人等待領藥。你發現一張處方有疑慮，但如果確認會拖慢整體流程。\n\n此時，你心裡出現拉扯：「要不要先發藥之後再說～」「應該不會有問題吧～」',
    '面對流程與安全的拉扯，你會怎麼決定？',
    [
      { text: '「先發藥再說啦，應該不會那麼剛好有問題吧」', isReverse: true },
      { text: '「我還是要確認一下，不然出事更麻煩」' },
      { text: '「這張處方怪怪的…但現在真的很忙欸」' },
      { text: '「再忙都不能冒這個風險，病人安全比較重要」' },
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
      { text: '我現在壓力已經爆上來了，不能假裝沒事' },
      { text: '我現在很緊張，也在怪自己剛剛是不是按太快沒確認' },
      { text: '等一下再說，後面病人太多要先趕快看完', isReverse: true },
      { text: '先穩住，我還是可以重新確認並做判斷' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '一位病人因等待過久情緒激動：「醫師你到底在看什麼？每次都等這麼久！」語氣帶有指責。\n\n你其實已經很疲憊，內心感到不耐與壓力，但現場還有其他病人與家屬在場。',
    '面對病人的情緒爆發，你會如何應對？',
    [
      { text: '先不要急著辯解反擊，理解病人現在正在氣頭上' },
      { text: '門診已經延誤，此時更要把節奏穩住' },
      { text: '我也看很久也沒休息，被這樣講真的想反駁，直接臭臉給他看', isReverse: true },
      { text: '先把病人的問題處理好，情緒晚點再來調適' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你建議病人接受某項治療（例如：長期用藥或侵入性檢查），但病人強烈抗拒：「我之前做過很不舒服！我不要再做！」甚至對醫療產生不信任。\n\n你原本認為「這是標準治療，對他最好」，但你觀察到病人其實帶有焦慮與過去負面經驗。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '標準治療就是這樣，有抗拒情緒不須理會', isReverse: true },
      { text: '他之前有過不舒服的經驗，現在會排斥也是合情合理' },
      { text: '他抗拒背後可能是真的害怕，不只是難溝通' },
      { text: '我換個方式說看看，也先尊重他擔心的原因' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與其他科別醫師討論病人治療計畫時，對方語氣急促且略顯不耐：「這個 case 我已經處理過很多次，不需要再改。」\n\n你對治療仍有疑慮，但擔心繼續溝通會造成衝突。',
    '面對同儕醫師的不耐回應，你會怎麼處理？',
    [
      { text: '對方不耐也沒辦法，疑慮我還是要講清楚' },
      { text: '我會把語氣再放軟一些，但要說的重點不能消失' },
      { text: '直接講不通的話，就找其他方式或團隊，一起商量看看' },
      { text: '他都這麼不耐煩了，算了，我不要再吵下去了', isReverse: true },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '門診壅塞，你必須加快看診速度。此時你發現某位病人的檢查數據與症狀不太一致，可能需要進一步確認，但這會增加時間成本並延誤後續病人。\n\n你心中出現拉扯：「先照原本計畫處理應該也可以吧？」「還是之後再追蹤？」',
    '面對效率與病安的衝突，你會怎麼決定？',
    [
      { text: '這個不一致不能隨便帶過，可能有風險' },
      { text: '多花一點時間確認，總比發生問題再來處理好' },
      { text: '先按照原訂計畫走吧，不然門診會塞爆', isReverse: true },
      { text: '再忙也不能拿病人的安全來賭看看' },
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
      { text: '我已經值班到超過負荷了，頭腦也有點鈍了' },
      { text: '先不要想自己累不累，病人還很多要看，先繼續做下去', isReverse: true },
      { text: '我現在很緊張著急，也在怪自己剛剛是不是有算錯劑量' },
      { text: '先暫停一下，重看醫囑內容，避免慌忙的時候再次打亂節奏' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病房家屬因等待檢查結果不耐煩，語氣變得強烈：「醫師你們到底有沒有在處理？都拖多久了！」\n\n你其實已經很疲憊，心中感到壓力與不被理解，但當下需要回應。',
    '面對家屬的情緒壓力，你會如何應對？',
    [
      { text: '先忍住，現在不能被家屬的語氣帶著走' },
      { text: '再累也要穩住，家屬現在需要的是清楚說明' },
      { text: '我也忙到爆了，直接語氣不佳回應他', isReverse: true },
      { text: '語氣先緩一點，把目前進度交代清楚' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你建議病人接受某項檢查或治療，但病人明顯抗拒：「上次做這個很痛苦，我不要再做了！」甚至開始懷疑醫療建議。\n\n你原本認為這是必要處置，但你觀察到病人帶有焦慮與不信任。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '該做就是該做，病人情緒先不用管他', isReverse: true },
      { text: '我來換個病人聽得懂、也會比較安心的說法' },
      { text: '他上次痛苦過，現在會怕是有原因的' },
      { text: '先回應他的害怕，再更清楚的說明為什麼需要做的理由' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你向主治醫師報告病人狀況並提出建議，但主治語氣急促地說：「照原本計畫就好，不用想太多。」\n\n你對處置仍有疑慮，但擔心再提出會被認為不夠成熟或影響評價。',
    '面對層級壓力與溝通困境，你會怎麼處理？',
    [
      { text: '我可以尊重主治，但還是會把我的疑慮講出來' },
      { text: '現在不適合硬碰硬，等一下找更適當的時間，再來確認一次' },
      { text: '怕被主治覺得不成熟，乾脆不要再問了', isReverse: true },
      { text: '真的不放心，我會再找總醫師或團隊一起討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '夜間值班時，病房同時有多位病人需要處理。此時某位病人出現異常數據，但尚未有明顯症狀。\n\n你心中出現拉扯：「要不要現在就處理？還是先觀察？」如果立即處理，可能影響其他病人的照護效率。',
    '面對時間壓力與病安風險，你會怎麼決定？',
    [
      { text: '雖然還沒症狀出現，但這個數據不能輕忽' },
      { text: '先觀察好了，我現在真的分身乏術', isReverse: true },
      { text: '病人很多，但風險高的我必須先處理' },
      { text: '再忙也不能拿病人的安全賭看看' },
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
      { text: '我現在真的累到有點撐不住了' },
      { text: '我現在感覺很慌，也一直在責怪自己' },
      { text: '不要想那麼多，後面還一堆事先做完再說', isReverse: true },
      { text: '先停一下，確認清楚比一直心慌更重要' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '一位病人家屬，因等待協助過久，到護理站反應且語氣變得不耐煩：「護理師怎麼都沒人來？到底要等多久？」\n\n你當下其實已經很忙也很累，內心感到委屈與壓力。',
    '面對家屬的情緒，你會如何應對？',
    [
      { text: '先忍住，我現在不能被家屬的語氣帶著走' },
      { text: '再忙我也要先穩住，不然現場只會更亂' },
      { text: '語氣先放軟，先讓家屬知道我有在處理' },
      { text: '面露不悅大聲回嘴: 我現在很忙啊! 再等一下', isReverse: true },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你在執行護理措施時，病人表現出抗拒：「我不想再打針了，很痛！」甚至對你產生不信任。\n\n你原本認為這是必要處置，但觀察到病人其實帶有害怕與焦慮。',
    '面對病人的抗拒，你會怎麼理解？',
    [
      { text: '他是真的怕痛，不是故意不配合我' },
      { text: '如果我是他，可能也會覺得很害怕' },
      { text: '醫囑就是要做，怕不怕不是現在重點', isReverse: true },
      { text: '我換個說法，先讓他知道我懂他的害怕' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你發現某位病人的狀況有變化，向醫師回報，但醫師回應簡短，甚至略顯不耐：「先觀察就好。」\n\n你仍有疑慮，但不確定是否要再強調。',
    '面對跨專業溝通壓力，你會怎麼處理？',
    [
      { text: '我得把我看到的變化講清楚，不能含糊帶過' },
      { text: '我語氣放尊重一點，但該提醒的還是要說' },
      { text: '不放心的話，我再追一下或找學長姊一起看' },
      { text: '醫師都這樣說了，算了我不要再講了', isReverse: true },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '交班前時間緊迫，你還有多項護理工作未完成。此時你發現某位病人的生命徵象略有異常，但尚未達明顯危急標準。\n\n你心中出現拉扯：「要不要現在處理？還是交班後再說？」',
    '面對時間壓力與病人安全，你會怎麼決定？',
    [
      { text: '這個數值怪怪的，不能當作沒看到' },
      { text: '交班再趕，也要先處理可能出事的事情' },
      { text: '先把手邊事情做完，這個等等再說吧', isReverse: true },
      { text: '再忙也不能拿病人的安全賭看看' },
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
      { text: '我現在壓力有上來，專注力也有點掉了' },
      { text: '先別管自己的狀態了，檢體還有很多，先做完再說', isReverse: true },
      { text: '我開始緊張，也一直懷疑是不是我弄錯了' },
      { text: '先不要亂猜，我還是可以照專業一步步查證' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '臨床端來電催促報告：「這個檢驗怎麼還沒出來？醫師等很久了！」語氣急促甚至帶壓力。\n\n你已經在高工作量下運作，內心出現煩躁與壓力。',
    '面對這種情境，你會如何應對？',
    [
      { text: '一直催真的很煩，先趕快把報告放出去好了', isReverse: true },
      { text: '照流程走，越急越不能跳步驟' },
      { text: '先不要被催到亂掉，報告錯了更麻煩' },
      { text: '慢一點沒關係，結果正確才是底線' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '臨床單位質疑某項檢驗結果，認為與病人狀況不符，甚至表達不信任。\n\n你原本覺得「結果就是這樣」，但也開始思考臨床端的疑慮。',
    '面對這種情況，你會怎麼理解？',
    [
      { text: '他們會急，是因為這個結果會影響後續處置' },
      { text: '除了數字之外，我也會想想臨床端為什麼擔心' },
      { text: '數據就是這樣，臨床覺得怪也不是我的事', isReverse: true },
      { text: '我先問清楚他們的疑慮在哪裡，再一起面對問題' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你判斷某檢體品質不佳，建議重抽，但臨床單位表示困難或不願配合。\n\n你不確定是否要再堅持你的專業判斷。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我會講清楚，這支檢體品質不好，會影響結果及判斷' },
      { text: '他們不想重抽就算了，反正我有講過', isReverse: true },
      { text: '先好好說明，不要讓對方覺得我只是在刁難' },
      { text: '卡住的話，找主管一起協調比較安全' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '工作量大，你發現某檢驗結果需要進一步確認（重做或複檢），但這會延遲報告時間。\n\n你心中掙扎：「先放行應該也差不多？還是要再確認？」',
    '面對效率與品質的衝突，你會怎麼決定？',
    [
      { text: '如果這結果錯了，後面診療可能都會被影響' },
      { text: '多花一點時間確認，總比發生錯誤好' },
      { text: '看起來差不多啦，先放行好了，不要卡住流程', isReverse: true },
      { text: '報告快不快是其次，我不能讓錯誤結果發出去' },
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
      { text: '我已經有點累到判斷變慢了' },
      { text: '我現在很緊張，也在怪自己剛剛是不是沒做好' },
      { text: '算了，不要暫停，下一個病人還在等我', isReverse: true },
      { text: '先不要亂猜，我還是可以照專業一步步查' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '檢查室外病人等候時間變長，有家屬開始跟你抱怨：「怎麼這麼慢？不是只照個檢查而已嗎？」語氣不耐甚至帶有指責。\n\n你其實已經很疲累，內心出現煩躁與壓力，但還有許多檢查排隊中。',
    '面對病人的情緒反應，你會如何應對？',
    [
      { text: '先別回嗆，家屬急但我不能跟著急' },
      { text: '照流程穩穩做，檢查不能因為被催就亂' },
      { text: '只是檢查也是要花時間啊，隨便回一下好了', isReverse: true },
      { text: '先顧好病人的身心呼吸狀況，再慢慢跟家屬解釋' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你準備替一位病人進行電腦斷層（CT）檢查，但病人明顯緊張，一直詢問：「這個會不會有輻射？會不會對身體不好？」甚至出現抗拒反應。\n\n你原本覺得「這是必要檢查，應該配合」，但你也觀察到病人可能對輻射有恐懼或過去有不好的醫療經驗。',
    '面對病人的不安，你會怎麼理解？',
    [
      { text: '他是在害怕輻射，不是故意找麻煩' },
      { text: '如果我躺在裡面，也可能會緊張亂想' },
      { text: '我換個簡單一點的說法，讓他先安心一點' },
      { text: '先把檢查做完就好，他緊張我也沒辦法', isReverse: true },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '醫師要求加做某項影像，但你判斷目前檢查條件不足，可能影響影像品質或增加不必要的輻射暴露。當你回報時，醫師語氣急促：「先做就對了，不用想那麼多。」\n\n你當下猶豫，不確定是否要再提出專業意見。',
    '面對這種溝通情境，你會怎麼處理？',
    [
      { text: '醫師急歸急，但我還是會把風險講清楚' },
      { text: '語氣不要太強硬，但影像品質和輻射安全，我一定要說明清楚' },
      { text: '醫師都叫我先做了，那我就不要再多講什麼', isReverse: true },
      { text: '講不通的話，我會找資深學長姐或主管一起判斷' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '現場檢查量非常大，病人持續排隊等待。此時你發現一位病人的檢查條件（如：身份確認、檢查部位或對比劑評估）有疑慮，但如果重新確認會延誤整體流程。\n\n你心中出現拉扯：「先做應該也沒問題吧？」「後面還很多人在等待…」',
    '面對效率與安全的衝突，你會怎麼決定？',
    [
      { text: '身份或部位還不能確定，這不能硬做' },
      { text: '先照完再說，應該不會那麼剛好出問題', isReverse: true },
      { text: '後面再多人等，也要先把資料確認清楚' },
      { text: '流程可以慢一點，但不能照錯人或照錯部位' },
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
      { text: '我好像已經開始灰心，也有點累了' },
      { text: '我有點失落，也在想是不是我講得不好' },
      { text: '不要管我的心情了，先把衛教講完就好', isReverse: true },
      { text: '病人病情控制不佳，不代表我整個人都不專業' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人語氣不耐地說：「飲食控制根本沒用，我照吃藥就好了！」甚至對你的建議顯得抗拒。\n\n你內心感到被否定與不被尊重，但仍需持續溝通。',
    '面對病人的反應，你會如何應對？',
    [
      { text: '先不要急著反駁，他現在聽不進去' },
      { text: '慢慢來，把重點講到他能接受比較重要' },
      { text: '都講幾次了還不聽，我也不想再多說了', isReverse: true },
      { text: '先抓住重點衛教，讓他願意改一點也好' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你發現病人無法配合飲食控制，但深入了解後，發現其家庭飲食習慣、經濟狀況或文化因素影響很大。\n\n你原本覺得「應該照建議執行」，但開始意識到病人其實有其困難。',
    '面對這樣的情境，你會怎麼理解？',
    [
      { text: '他不是不想配合，生活裡可能真的有困難' },
      { text: '要從他在家裡怎麼吃、能買什麼來想' },
      { text: '標準就是這樣，做不到就是他自己的問題了', isReverse: true },
      { text: '我把建議改成他生活中真的做得到的版本' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與醫師或護理師討論病人飲食計畫，但對方認為「先控制藥物比較重要」，對營養介入重視不足。\n\n你不確定是否要再進一步說明。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我必須要讓團隊知道，飲食也會影響治療成效' },
      { text: '先尊重對方想法，再補上營養重點這一塊' },
      { text: '他們覺得藥物比較重要，那就算了不講了', isReverse: true },
      { text: '現在聽不進去沒關係，我再換個時機或用資料說明' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '門診時間有限，你必須在「完整個別化衛教」與「快速給予標準建議」之間做選擇。\n\n你心中掙扎：「時間不夠，要不要直接講重點就好？」',
    '面對效率與品質的拉扯，你會怎麼決定？',
    [
      { text: '只講標準答案，病人可能回家根本做不到' },
      { text: '時間少，就先抓最關鍵、最能做到的部份進行改變' },
      { text: '時間不夠就直接給制式建議，快點結束就好', isReverse: true },
      { text: '建議要能病人長期做得到，才真的有幫助' },
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
      { text: '我能察覺自己已經出現壓力或疲勞現象' },
      { text: '我開始緊張，也一直懷疑是不是我弄錯了' },
      { text: '先不要亂猜先穩住，我還是可以依照專業一步步來查' },
      { text: '就先這樣吧，下一個病人還在等我處理', isReverse: true },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人家屬在旁焦急詢問：「為什麼呼吸器一直調整？病人是不是變嚴重了？」語氣緊張甚至帶點質疑。\n\n你已經連續工作一段時間，感到疲憊，內心出現壓力與不耐。',
    '面對家屬情緒，你會如何應對？',
    [
      { text: '家屬會擔心害怕可以理解，我先不要露出不耐煩' },
      { text: '呼吸器的調整不能亂，越被問越要照流程仔細確認' },
      { text: '實在沒空沒耐心理會，說了也不懂，我簡單帶過就好', isReverse: true },
      { text: '先顧好病人的呼吸狀況最重要，再來慢慢解釋原因' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你需要協助病人進行抽痰或侵入性呼吸治療，但病人表現出抗拒與不安，甚至出現掙扎。\n\n你原本認為「這是必要處置」，但也觀察到病人可能感到恐懼或缺乏理解。',
    '面對病人的反應，你會怎麼理解？',
    [
      { text: '先把抽痰做完比較重要，不需要理會他的掙扎', isReverse: true },
      { text: '如果我是他，可能也會覺得很害怕' },
      { text: '他是真的怕痛，不是故意不配合我' },
      { text: '先提前說明我要做哪些步驟及原因，讓他比較安心就比較不會抗拒' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你評估病人呼吸狀況後，建議調整呼吸器設定或改變治療策略，但醫師當下表示：「先照原本方式就好，不用調整。」\n\n你不確定是否要再提出你的專業判斷。',
    '面對這種情境，你會怎麼處理？',
    [
      { text: '我要把評估依據及建議講清楚，不要只說我覺得' },
      { text: '先尊重醫師的決定，但我的觀察建議也要補上' },
      { text: '醫師都說不用調，那我就不要再提了', isReverse: true },
      { text: '如果還是不放心，我會找資深同仁一起討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '病房工作量大，你需要快速處理多位病人。此時你發現某位病人的呼吸器參數或氧氣設定可能需要重新評估，但如果仔細確認會影響整體進度。\n\n你心中掙扎：「先維持現狀應該可以吧？」「後面還很多病人…」',
    '面對效率與安全的衝突，你會怎麼決定？',
    [
      { text: '這個設定可能不太對，不能只想著趕進度' },
      { text: '就算會拖到進度，也要重看一次比較安全' },
      { text: '後面還很多病人要看，就先不要動設定了', isReverse: true },
      { text: '排隊再長，也不能拿病人的安全開玩笑' },
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
      { text: '我好像也被他的情緒影響，被壓得更沉重了' },
      { text: '我很同理他，但我也開始覺得有點無力' },
      { text: '先撐著聽完，不要管自己累不累', isReverse: true },
      { text: '我可以同理他，但也要清楚自己的專業界線' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '家屬情緒激動，語氣提高，甚至指責醫療團隊：「你們根本沒有幫助！」\n\n你內心感到委屈與壓力，但仍需維持會談進行。',
    '面對情緒張力，你會如何應對？',
    [
      { text: '我先接住他的情緒，但小心不要被一起拉進去' },
      { text: '場面越激動，我越要把會談節奏穩下來' },
      { text: '先回到他需要什麼支持，問題才有辦法往下走' },
      { text: '被這樣罵真的很委屈，我會直接反駁', isReverse: true },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '一位病人拒絕接受出院後的照護安排，但你了解其家庭支持不足、經濟壓力大，可能難以遵從。\n\n你原本希望「照建議安排」，但也意識到背後有複雜因素。',
    '面對這樣的情境，你會怎麼理解？',
    [
      { text: '他們不是故意不配合，可能是真的有困難、撐不住了' },
      { text: '我也發現他家裡現況，金錢及照顧人力真的都接不住' },
      { text: '流程規定就是這樣，個案困難不是我能管的', isReverse: true },
      { text: '我會調整成可以落地的方案，讓後續照護可以順利進行' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你與醫療團隊討論個案時，醫師希望儘快出院，但你評估病人社會支持不足，可能出院後風險高。\n\n你不確定是否要堅持你的評估。',
    '面對跨專業意見不同，你會怎麼處理？',
    [
      { text: '醫師都說要出院了，我再講什麼好像也沒有用', isReverse: true },
      { text: '我會先尊重對方的想法，再補上我擔心的部份' },
      { text: '我會把出院後可能出問題的風險一一講清楚' },
      { text: '意見不同沒關係，再拉到別的會議或找其他團隊一起討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '你面對一個高風險個案（如家暴、忽視、資源不足），需要在「尊重個案意願」與「保護安全」之間做決策。\n\n你內心掙扎：「如果過度介入會影響關係，但不介入可能有風險…」',
    '面對倫理拉扯，你會怎麼決定？',
    [
      { text: '這不只是意願問題，倫理與安全風險也要看見' },
      { text: '即使關係再難維持，該判斷的風險還是要判斷' },
      { text: '不要把關係弄僵好了，先不要介入太多', isReverse: true },
      { text: '關係很重要，但安全和最佳利益不能放掉' },
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
      { text: '我開始覺得挫折，也有點沒力了' },
      { text: '我有點失落，也在想是不是我講得不好' },
      { text: '不要想那麼多，療程做完就好', isReverse: true },
      { text: '進步慢不代表我沒做好，可能需要再調整復健策略' },
    ],
  ),
  buildQuestion(
    2,
    'self-management',
    '病人因訓練過程出現疼痛或不適，開始抱怨：「這樣做真的有用嗎？會不會讓我更糟？」語氣不耐甚至抗拒配合。\n\n你內心感到被質疑與壓力，但還有其他病人在等待。',
    '面對病人的反應，你會如何應對？',
    [
      { text: '先忍住讓他抱怨一下，不要急著反駁病人' },
      { text: '先穩住訓練節奏，慢慢帶他找到能做的方式' },
      { text: '他一直質疑我，讓我不想那麼認真帶他了', isReverse: true },
      { text: '先回到治療目標，調整到他能接受的強度' },
    ],
  ),
  buildQuestion(
    3,
    'social-awareness',
    '你發現病人復健依從性不佳，常未按時練習或缺席，但進一步了解後，發現其工作、家庭或經濟壓力影響很大。\n\n你原本覺得「應該要配合訓練」，但開始意識到其實存在困難。',
    '面對這種情境，你會怎麼理解？',
    [
      { text: '復健就是要做，其他理由都是藉口', isReverse: true },
      { text: '我要從他的工作和家庭狀況，來幫他想想更適合的訓練安排' },
      { text: '他不是故意不練習，生活壓力可能真的卡住他' },
      { text: '把訓練計畫改得更可行，病人才比較容易做得到' },
    ],
  ),
  buildQuestion(
    4,
    'relationship-skills',
    '你認為某位病人需要增加復健強度或延長療程，但醫師或家屬認為「目前這樣就好」，對你的建議有所保留。\n\n你不確定是否要再提出專業意見。',
    '面對這樣的溝通情境，你會怎麼處理？',
    [
      { text: '我會把為什麼需要調整療程的原因講清楚' },
      { text: '他們不接受我的建議就算了，就這樣吧', isReverse: true },
      { text: '我會先尊重對方的顧慮，再好好說明我的治療方向及判斷依據' },
      { text: '現在不接受沒關係，我再找時機說明或找團隊一起討論' },
    ],
  ),
  buildQuestion(
    5,
    'responsible-decision',
    '復健室很忙，你需要在「完整個別化訓練」與「快速完成基本療程」之間做選擇。\n\n你心中掙扎：「時間不夠，要不要先做基本的就好？」',
    '面對效率與品質的拉扯，你會怎麼決定？',
    [
      { text: '如果只做基本流程，可能真的會影響病人的恢復力' },
      { text: '時間若不夠，就先做最關鍵、最安全的訓練' },
      { text: '今天真的太忙了，跑基本流程就好', isReverse: true },
      { text: '快不快是其次，重要的是不能影響病人的恢復效果和安全性' },
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
