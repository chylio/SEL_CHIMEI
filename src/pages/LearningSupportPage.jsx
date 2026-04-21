import SupportToolCard from '../components/SupportToolCard'
import { learningSupportData, resourceLinksData } from '../data'

// ResourceLinkCard — 文章卡樣式
function ResourceLinkCard({ resource }) {
  return (
    <div className="card-base overflow-hidden card-hover flex flex-col">
      {/* 封面圖 */}
      <div className="relative h-36 overflow-hidden">
        <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          {resource.source}
        </span>
      </div>

      {/* 內容 */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-warm-text text-sm leading-snug mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-sub-text text-xs leading-relaxed mb-3 flex-1 line-clamp-3">{resource.description}</p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-xs font-medium text-sub-text">{resource.tag}</span>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-orange hover:text-orange-600 transition-colors"
          >
            閱讀全文
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── 學習補給頁 ────────────────────────────────────────────────────────────────
export default function LearningSupportPage({ navigate }) {
  return (
    <div>
      <div className="bg-gradient-to-br from-teal-50 via-cream to-green-50 pt-12 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-teal-200 text-teal-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🌈 學習補給
          </div>
          <h1 className="section-title">給忙碌中的你，一些剛剛好的補給</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            醫療工作常常需要長時間專注、快速應對與持續付出。
            這個頁面提供簡單、有趣、可立即開始的紓壓方式，
            也整理了可延伸學習與放鬆的網站資源，
            讓你在繁忙之中，也能為自己留一點空間。
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🎈</div>
            <div>
              <h2 className="text-xl font-bold text-warm-text">紓壓小幫手</h2>
              <p className="text-sub-text text-sm">立即可以使用的互動紓壓工具</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningSupportData.map((tool) => (
              <SupportToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-xl">🔗</div>
            <div>
              <h2 className="text-xl font-bold text-warm-text">好站連結</h2>
              <p className="text-sub-text text-sm">延伸閱讀與實用心理健康資源</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resourceLinksData.map((res) => (
              <ResourceLinkCard key={res.id} resource={res} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-3xl border border-amber-100 p-8 sm:p-10 text-center">
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="text-xl sm:text-2xl font-bold text-warm-text mb-4">你不需要等到撐不住，才開始照顧自己</h3>
          <p className="text-sub-text text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            真正長久的照顧，不是把自己逼到極限後才休息，
            而是在日常裡，慢慢練習理解自己、支持自己、調整自己。
            願你在照顧他人的路上，也能保有照顧自己的能力。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('selfcheck')} className="btn-outline">前往今日自我檢測</button>
            <button onClick={() => navigate('abilities')} className="btn-primary">認識 SEL 五大能力</button>
          </div>
        </div>
      </div>
    </div>
  )
}
