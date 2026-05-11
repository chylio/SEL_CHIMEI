// ── 統一主視覺：左文右圖（透明 PNG 角色 + 柔和舞台聚光燈） ──
function SELIntroHero({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#FFF5E6] to-cream pt-12 sm:pt-16 pb-14 sm:pb-20">
      {/* 柔和的背景光暈 */}
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* LEFT：文字內容 */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 lg:max-w-xl">
            {/* 品牌小標籤 */}
            <div className="mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/80 text-muted-orange text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                <span>🌸</span>
                <span>奇美醫院 SEL 學習小棧</span>
              </span>
            </div>

            {/* 主標題 */}
            <h1 className="text-[2rem] leading-[1.2] sm:text-5xl md:text-6xl font-bold text-warm-text mb-5 sm:mb-6 tracking-tight">
              照顧別人的同時，<br />
              <span className="bg-gradient-to-r from-muted-orange to-orange-500 bg-clip-text text-transparent">也別忘了照顧自己</span>
            </h1>

            {/* 副標題 */}
            <p className="text-sub-text text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
              透過 <strong className="text-warm-text font-semibold">SEL 社會情緒學習</strong>的五大核心能力，
              <br className="hidden sm:block" />
              讓壓力有出口、情緒有理解、專業更有溫度。
            </p>

            {/* CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <button
                onClick={() => navigate('abilities')}
                className="btn-primary text-base sm:text-lg px-8 py-3 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                開始探索 →
              </button>
              <button
                onClick={() => navigate('selfcheck')}
                className="btn-outline text-base sm:text-lg px-8 py-3 hover:scale-[1.02] transition-all"
              >
                先做今日檢測
              </button>
            </div>
          </div>

          {/* RIGHT：透明 PNG 萌包群像 + 柔和舞台 */}
          <div className="flex-1 lg:flex-[1.5] order-1 lg:order-2 w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl">
            <div className="relative py-2 sm:py-4">

              {/* ① 頂部聚光燈光束（從上往下） */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-[60%] pointer-events-none animate-spotlight"
                   style={{
                     background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,240,210,0.6) 0%, rgba(255,225,180,0.25) 40%, transparent 75%)',
                   }} />

              {/* ② 舞台地面柔光圓盤（角色腳下的光） */}
              <div className="absolute bottom-2 sm:bottom-4 left-[8%] right-[8%] h-12 sm:h-16 pointer-events-none"
                   style={{
                     background: 'radial-gradient(ellipse 100% 100% at center, rgba(244,162,97,0.4) 0%, rgba(244,162,97,0.18) 45%, transparent 80%)',
                     filter: 'blur(12px)',
                   }} />

              {/* ③ 主圖 — 透明 PNG 直接置入 */}
              <div className="relative z-10">
                <img
                  src="/sel-mascots-cutout.png"
                  alt="SEL 五大能力 — 自我覺察、自我管理、社會覺察、人際關係技巧、負責任的決策"
                  className="w-full h-auto block relative"
                  loading="eager"
                  style={{
                    // 透明 PNG 直接顯示，drop-shadow 給角色立體感
                    filter: 'drop-shadow(0 20px 30px rgba(180,100,40,0.25)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
                  }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>

              {/* ④ 點綴星塵 */}
              <div className="absolute top-[10%] left-[10%] text-amber-300/60 text-sm">✦</div>
              <div className="absolute top-[18%] right-[8%] text-rose-300/60 text-base">✦</div>
              <div className="absolute bottom-[20%] left-[6%] text-amber-200/60 text-xs">✦</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// HeroSection — 內嵌
function HeroSection({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[#FFF8F0] to-sky-50 pt-20 pb-28">
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── 左：文字 ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-amber-200 text-muted-orange text-base font-medium px-5 py-2 rounded-full mb-8 shadow-sm">
              <span>🌸</span>
              <span>奇美醫院 SEL 學習小棧</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-warm-text leading-tight mb-6">
              照顧別人的同時，<br />
              <span className="text-muted-orange">也別忘了照顧自己</span>
            </h1>

            <p className="text-sub-text text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              在忙碌的醫療現場中，練習自我覺察、自我管理、社會覺察、人際技巧與負責任的決定，
              讓壓力有出口，讓情緒有理解，讓專業更有溫度。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button onClick={() => navigate('abilities')} className="btn-primary text-lg px-10 py-4">
                開始探索 →
              </button>
              <button onClick={() => navigate('selfcheck')} className="btn-outline text-lg px-10 py-4">
                先做今日檢測
              </button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { emoji: '🌸', label: '自我覺察' },
                { emoji: '🌿', label: '自我管理' },
                { emoji: '💙', label: '社會覺察' },
                { emoji: '🤝', label: '人際技巧' },
                { emoji: '⚖️', label: '負責任決策' },
              ].map((a) => (
                <span key={a.label} className="flex-shrink-0 flex items-center gap-1.5 bg-white/80 border border-amber-100 text-warm-text text-sm px-3 py-2 rounded-full shadow-sm font-medium">
                  <span>{a.emoji}</span>{a.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── 右：圖片 + 圓弧 SEL ── */}
          <div className="flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[460px] h-[500px] sm:w-[520px] sm:h-[560px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 via-orange-100/40 to-pink-100/50 blur-2xl" />
              <div className="absolute w-[420px] h-[420px] sm:w-[470px] sm:h-[470px] rounded-full border-[3px] border-dashed border-amber-200/70" style={{ top: '18px' }} />
              <div
                className="absolute w-[370px] h-[370px] sm:w-[420px] sm:h-[420px] overflow-hidden shadow-2xl"
                style={{ top: '22px', borderRadius: '62% 38% 46% 54% / 56% 44% 56% 44%', boxShadow: '0 12px 50px rgba(244,162,97,0.25), 0 4px 20px rgba(0,0,0,0.08)' }}
              >
                <img src="/hero-doctor.png" alt="醫療人員喝茶放鬆插畫" className="w-full h-full object-cover object-center scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-100/20 via-transparent to-transparent" />
              </div>

              <div className="absolute top-6 right-0 sm:right-2 bg-white rounded-2xl shadow-card px-5 py-3 flex items-center gap-2 border border-amber-100 animate-bounce" style={{ animationDuration: '2s' }}>
                <span className="text-2xl">☕</span>
                <span className="text-base font-semibold text-warm-text">先喘口氣</span>
              </div>
              <div className="absolute top-8 left-2 w-3 h-3 rounded-full bg-pink-300 opacity-70" />
              <div className="absolute top-1/3 right-0 text-lg opacity-60">🌿</div>
              <div className="absolute top-2 left-1/3 text-base opacity-60">✨</div>

              {/* SVG 圓弧 SEL */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 420" style={{ zIndex: 10 }}>
                <defs>
                  <linearGradient id="selArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F4A261" />
                    <stop offset="50%" stopColor="#E8610A" />
                    <stop offset="100%" stopColor="#F4A261" />
                  </linearGradient>
                  <path id="selLetterArc" d="M 58,264  A 152,152 0 0,0 322,264" />
                  <path id="selSubtitleArc" d="M 91,320  A 114,114 0 0,0 289,320" />
                </defs>
                <path d="M 44,270 A 165,165 0 0,0 336,270" fill="none" stroke="rgba(255,252,245,0.93)" strokeWidth="88" strokeLinecap="round" />
                <path d="M 44,270 A 165,165 0 0,0 336,270" fill="none" stroke="rgba(244,162,97,0.45)" strokeWidth="1.5" />
                <circle cx="44" cy="270" r="5" fill="#F4A261" opacity="0.8" />
                <circle cx="336" cy="270" r="5" fill="#F4A261" opacity="0.8" />
                <rect x="55" y="245" width="270" height="38" rx="8" fill="#FDF8F0" opacity="0.95" />
                <text fontSize="36" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif" fill="url(#selArcGrad)" letterSpacing="18" style={{ filter: 'drop-shadow(0px 1px 3px rgba(232,97,10,0.3))' }}>
                  <textPath href="#selLetterArc" startOffset="50%" textAnchor="middle">S · E · L</textPath>
                </text>
                <text fontSize="12" fontWeight="700" fontFamily="Noto Sans TC, sans-serif" fill="#C4825A" letterSpacing="5">
                  <textPath href="#selSubtitleArc" startOffset="50%" textAnchor="middle">社 會 情 緒 學 習</textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// FeatureCards — 內嵌
const featureList = [
  { id: 'abilities', emoji: '✨', title: 'SEL 五大能力', description: '認識 SEL 五大核心能力，建立自我理解與人際互動的基礎。', bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50', borderColor: 'border-pink-200', hoverBorder: 'hover:border-pink-300', iconBg: 'bg-pink-100' },
  { id: 'selfcheck', emoji: '🌡️', title: '自我檢測', description: '透過今日壓力指數與簡易檢測，快速了解自己的狀態。', bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50', borderColor: 'border-amber-200', hoverBorder: 'hover:border-amber-300', iconBg: 'bg-amber-100' },
  { id: 'scenario', emoji: '🎭', title: '情境應用', description: '用醫療職場情境練習思考與回應，提升情緒調節與應對能力。', bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50', borderColor: 'border-sky-200', hoverBorder: 'hover:border-sky-300', iconBg: 'bg-sky-100' },
  { id: 'learning-support', emoji: '🌈', title: '學習補給', description: '提供有趣紓壓遊戲、放鬆活動與實用資源，幫自己充電。', bgColor: 'bg-gradient-to-br from-green-50 to-teal-50', borderColor: 'border-green-200', hoverBorder: 'hover:border-green-300', iconBg: 'bg-green-100' },
]

function FeatureCards({ navigate }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="section-title">從這裡開始，找到適合你的方式</h2>
        <p className="section-subtitle max-w-lg mx-auto">四個入口，四種照顧自己的起點，選一個最想嘗試的開始吧。</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featureList.map((f) => (
          <button key={f.id} onClick={() => navigate(f.id)}
            className={`group text-left p-6 rounded-2xl border ${f.bgColor} ${f.borderColor} ${f.hoverBorder} card-hover transition-all duration-300 cursor-pointer shadow-sm hover:shadow-card-hover`}
          >
            <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
              {f.emoji}
            </div>
            <h3 className="font-bold text-warm-text text-base mb-2">{f.title}</h3>
            <p className="text-sub-text text-sm leading-relaxed">{f.description}</p>
            <div className="mt-4 text-muted-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>了解</span><span>→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

// ── 首頁 ───────────────────────────────────────────────────────────
export default function HomePage({ navigate }) {
  return (
    <div>
      {/* 統一主視覺：品牌訊息 + 萌包圖（玻璃毛邊融入） */}
      <SELIntroHero navigate={navigate} />

      {/* 什麼是 SEL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#fdf8f2] to-[#f0faf4] py-16 sm:py-20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block bg-white border border-sky-200 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-4">
              🌱 Social-Emotional Learning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-text mb-3">什麼是 SEL？</h2>
            <p className="text-sub-text text-base max-w-xl mx-auto leading-relaxed">
              社會情緒學習是幫助我們<strong className="text-warm-text">認識自己、理解他人、做出負責任決定</strong>的學習方式，
              讓醫療工作者在高壓環境中仍能保有溫度與穩定。
            </p>
          </div>

          {/* 雙視覺：左輪盤 + 右醫師 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12 sm:mb-14 items-center">
            {/* 左：SEL 輪盤 */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-br from-sky-100/80 via-amber-50/60 to-green-100/60 blur-2xl" />
              <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-sky-200/80" />
              <div className="relative w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-white"
                style={{ boxShadow: '0 12px 50px rgba(100,180,230,0.2), 0 4px 20px rgba(0,0,0,0.08)' }}>
                <img src="/sel-wheel.png" alt="SEL 五大能力圓餅圖" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-teal-400 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                SEL 五大核心能力
              </div>
              <div className="absolute -top-4 left-8 text-yellow-300 text-xl">✦</div>
              <div className="absolute top-6 -right-4 text-pink-300 text-base">✦</div>
              <div className="absolute bottom-10 -left-5 text-green-300 text-sm">✦</div>
            </div>

            {/* 右：醫師喘口氣（品牌情感視覺） */}
            <div className="relative flex items-center justify-center">
              {/* 外層光暈 */}
              <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-br from-amber-100/80 via-orange-50/60 to-rose-100/60 blur-2xl" />

              {/* 圖片容器 — 有機形狀（呼應 Hero 區的醫師圖風格） */}
              <div
                className="relative w-[340px] h-[370px] sm:w-[400px] sm:h-[430px] overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  borderRadius: '58% 42% 48% 52% / 52% 48% 52% 48%',
                  boxShadow: '0 12px 50px rgba(244,162,97,0.22), 0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <img src="/hero-doctor.png" alt="醫療人員喝茶放鬆插畫" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-100/25 via-transparent to-transparent" />
              </div>

              {/* 浮動小標籤 — 喘口氣 */}
              <div className="absolute top-4 -right-2 sm:right-2 bg-white rounded-2xl shadow-card px-4 py-2 flex items-center gap-1.5 border border-amber-100 animate-bounce" style={{ animationDuration: '2.5s' }}>
                <span className="text-xl">☕</span>
                <span className="text-sm font-semibold text-warm-text">先喘口氣</span>
              </div>

              {/* 底部小金句 */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-muted-orange to-orange-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                💛 給照顧者的溫柔
              </div>

              <div className="absolute top-8 left-4 text-pink-300 text-base opacity-70">✦</div>
              <div className="absolute top-1/2 -right-4 text-amber-300 text-lg opacity-70">🌿</div>
            </div>
          </div>

          {/* 五大能力詳細介紹卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { num: '1', emoji: '🌸', name: '自我覺察', english: 'Self-Awareness', desc: '認識自己的情緒、目標和價值觀，正確評估優缺點，肯定自我價值。', color: 'from-rose-50 to-pink-50', border: 'border-rose-100', numBg: 'bg-rose-400', tag: 'bg-rose-100 text-rose-700' },
              { num: '2', emoji: '🌿', name: '自我管理', english: 'Self-Management', desc: '調節情緒、管理壓力，設定目標並持之以恆，面對挑戰不輕易衝動。', color: 'from-emerald-50 to-green-50', border: 'border-emerald-100', numBg: 'bg-emerald-400', tag: 'bg-emerald-100 text-emerald-700' },
              { num: '3', emoji: '💙', name: '社會覺察', english: 'Social Awareness', desc: '具備同理心，理解他人感受，尊重不同背景與文化的多元差異。', color: 'from-sky-50 to-blue-50', border: 'border-sky-100', numBg: 'bg-sky-400', tag: 'bg-sky-100 text-sky-700' },
              { num: '4', emoji: '🤝', name: '人際技巧', english: 'Relationship Skills', desc: '有效溝通、積極傾聽、協調合作，在需要時主動尋求或給予協助。', color: 'from-amber-50 to-orange-50', border: 'border-amber-100', numBg: 'bg-amber-400', tag: 'bg-amber-100 text-amber-700' },
              { num: '5', emoji: '⚖️', name: '負責任的決策', english: 'Responsible Decision-Making', desc: '考量道德規範與後果，做出對自己、對他人都負責任的明智決定。', color: 'from-violet-50 to-purple-50', border: 'border-violet-100', numBg: 'bg-violet-400', tag: 'bg-violet-100 text-violet-700' },
            ].map((a) => (
              <div key={a.num} className={`flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r ${a.color} border ${a.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}>
                <div className={`flex-shrink-0 w-11 h-11 ${a.numBg} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-sm`}>{a.num}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xl">{a.emoji}</span>
                    <span className="font-bold text-warm-text text-base">{a.name}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${a.tag}`}>{a.english}</span>
                  </div>
                  <p className="text-sub-text text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <button onClick={() => navigate('abilities')} className="btn-primary text-base px-7 py-2.5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all">
              深入了解五大能力 →
            </button>
          </div>
        </div>
      </section>

      <FeatureCards navigate={navigate} />

      {/* 溫暖提示 banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-green-50 rounded-3xl p-8 sm:p-10 text-center border border-sky-100">
          <div className="text-3xl mb-4">💙</div>
          <blockquote className="text-lg sm:text-xl font-medium text-warm-text leading-relaxed italic mb-4">
            「你不需要等到撐不住，才開始照顧自己。」
          </blockquote>
          <p className="text-sub-text text-sm">真正長久的照顧，是在日常裡，慢慢練習理解自己、支持自己、調整自己。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button onClick={() => navigate('selfcheck')} className="btn-primary">先做今日自我檢測</button>
            <button onClick={() => navigate('learning-support')} className="btn-outline">前往學習補給</button>
          </div>
        </div>
      </section>
    </div>
  )
}
