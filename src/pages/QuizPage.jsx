import { useState, useEffect } from 'react'
import { professionsConfig } from '../data'
import {
  calculateQuestionScore,
  calculatePercentage,
  generateSummaryText,
  getAbilityStatus,
  getAbilitySuggestion,
} from '../utils/scoreUtils'

function QuizQuestionCard({ question, selectedOptions, onToggleOption, questionIndex, totalQuestions }) {
  return (
    <div className="card-base border border-amber-100 overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-8 h-8 bg-soft-orange rounded-full flex items-center justify-center text-muted-orange font-bold text-sm">
            {question.id}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{question.abilityEmoji}</span>
              <span className="text-sm font-semibold text-muted-orange">{question.abilityName}</span>
              <span className="text-xs text-sub-text">｜{question.abilityEnglish}</span>
            </div>
          </div>
          <div className="ml-auto text-xs text-sub-text font-medium">{questionIndex + 1} / {totalQuestions}</div>
        </div>

        <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-5 mb-6">
          <div className="flex gap-2 mb-2"><span className="text-base font-semibold text-amber-700">📋 情境</span></div>
          <p className="text-warm-text text-base leading-relaxed whitespace-pre-line">{question.scenario}</p>
        </div>

        <p className="font-semibold text-warm-text text-lg mb-5">{question.question}</p>

        <div className="space-y-4">
          {question.options.map((opt) => {
            const isSelected = selectedOptions.includes(opt.id)
            return (
              <label key={opt.id}
                className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${isSelected ? 'border-muted-orange bg-soft-orange' : 'border-gray-100 bg-white hover:border-amber-200 hover:bg-amber-50/50'}`}>
                <div className={`mt-0.5 w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all
                  ${isSelected ? 'border-muted-orange bg-muted-orange' : 'border-gray-300'}`}>
                  {isSelected && (
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <input type="checkbox" className="hidden" checked={isSelected} onChange={() => onToggleOption(opt.id)} />
                <span className={`text-base leading-relaxed ${isSelected ? 'text-warm-text font-medium' : 'text-sub-text'}`}>{opt.text}</span>
              </label>
            )
          })}
        </div>
        <p className="text-sm text-sub-text mt-5 text-center">可複選，選出你實際上會做到的選項</p>
      </div>
    </div>
  )
}

// 能力 → 學習補給對應區塊（用於提供連結）
const SECTION_BY_ABILITY = {
  'self-awareness':       { name: '紓壓小幫手',     anchor: 'section-stress-relief', emoji: '🎈' },
  'self-management':      { name: '紓壓小幫手',     anchor: 'section-stress-relief', emoji: '🎈' },
  'social-awareness':     { name: '自我支持工具區', anchor: 'section-self-support',  emoji: '💞' },
  'relationship-skills':  { name: '自我支持工具區', anchor: 'section-self-support',  emoji: '💞' },
  'responsible-decision': { name: '自我支持工具區', anchor: 'section-self-support',  emoji: '💞' },
}

function ResultSummaryCard({ result, navigate }) {
  const safePct = Number.isFinite(result.percentage) ? result.percentage : 0
  const status = getAbilityStatus(safePct)
  const suggestion = getAbilitySuggestion(result.abilityKey, safePct)
  const section = SECTION_BY_ABILITY[result.abilityKey]

  // 三級行動：練習 / 優化 / 穩定
  // < 50% (需要加強)：玫紅色，建議「延伸練習」
  // 50-79% (持續練習)：琥珀色，建議「再優化」
  // >= 80% (穩定正向)：不顯示連結
  let actionTier = null
  if (safePct < 50) actionTier = 'practice'
  else if (safePct < 80) actionTier = 'optimize'

  const tierStyle = {
    practice: {
      cardBorder: 'border-rose-200 bg-rose-50/30',
      btnClass: 'border-rose-300 text-rose-600 hover:bg-rose-50',
      verb: '延伸練習',
    },
    optimize: {
      cardBorder: 'border-amber-200 bg-amber-50/30',
      btnClass: 'border-amber-300 text-amber-600 hover:bg-amber-50',
      verb: '再優化',
    },
  }
  const t = actionTier ? tierStyle[actionTier] : null

  return (
    <div className={`card-base border p-5 ${t ? t.cardBorder : 'border-gray-100'}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{result.abilityEmoji}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-bold text-warm-text text-sm">{result.abilityName}</span>
            <span className={`text-xs font-semibold ${status.color}`}>{status.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-sub-text">{result.abilityEnglish}</span>
            <span className="text-xs text-sub-text">·</span>
            <span className="text-xs text-sub-text">{result.score} / {result.maxScore} 分</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className={`text-2xl font-black ${status.color}`}>{safePct}%</span>
        </div>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className={`h-full ${status.barColor} rounded-full progress-bar-fill`} style={{ width: `${safePct}%` }} />
      </div>
      <p className="text-xs text-sub-text leading-relaxed bg-gray-50 rounded-lg p-3">💡 {suggestion}</p>

      {t && section && navigate && (
        <button
          onClick={() => navigate('learning-support', section.anchor)}
          className={`mt-3 w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-white border text-sm font-medium transition-all ${t.btnClass}`}
        >
          <span>{section.emoji}</span>
          <span>前往{section.name}</span>
          <span>→</span>
        </button>
      )}
    </div>
  )
}

function QuizIntro({ profession, onStart }) {
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="text-5xl mb-4">{profession.emoji}</div>
      <h2 className="text-2xl font-bold text-warm-text mb-3">{profession.title}</h2>
      <p className="text-sub-text leading-relaxed mb-6">
        本測驗共 <strong>5 題</strong>，每題對應一項 SEL 能力。
        請根據真實的醫療情境，勾選「你實際上會做到」的選項（可複選）。
        完成後將產生你的 SEL 能力分析報告。
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {profession.quizData.map((q) => (
          <div key={q.id} className="bg-white rounded-xl border border-amber-100 p-3 text-center shadow-sm">
            <div className="text-xl mb-1">{q.abilityEmoji}</div>
            <div className="text-xs font-semibold text-warm-text">{q.abilityName}</div>
          </div>
        ))}
      </div>
      <button onClick={onStart} className="btn-primary text-base px-10 py-3">開始測驗 →</button>
    </div>
  )
}

function QuizResults({ profession, answers, navigate, onRetest }) {
  const results = profession.quizData.map((q) => {
    const selectedIds = answers[q.id] || []
    const score = calculateQuestionScore(q, selectedIds)
    const clampedScore = Math.max(0, Math.min(q.maxScore, score))
    const percentage = calculatePercentage(clampedScore, q.maxScore)

    return {
      abilityKey: q.abilityKey,
      abilityName: q.abilityName,
      abilityEnglish: q.abilityEnglish,
      abilityEmoji: q.abilityEmoji,
      score: clampedScore,
      rawScore: score,
      maxScore: q.maxScore,
      percentage,
    }
  })

  const summaryText = generateSummaryText(results)
  const avgRaw = results.reduce((s, r) => s + (Number.isFinite(r.percentage) ? r.percentage : 0), 0) / results.length
  const avg = Number.isFinite(avgRaw) ? Math.round(avgRaw) : 0

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          📊 SEL 能力分析報告
        </div>
        <h2 className="text-2xl font-bold text-warm-text mb-2">您的 SEL 能力分析報告</h2>
        <p className="text-sub-text text-sm">{profession.name}・以下是您在五大能力面向的表現</p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-5 mb-6 text-center">
        <div className="text-4xl font-black text-muted-orange mb-1">{avg}%</div>
        <div className="text-sub-text text-sm">整體 SEL 能力平均</div>
        <div className="mt-3 h-3 bg-amber-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill" style={{ width: `${avg}%` }} />
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {results.map((r) => <ResultSummaryCard key={r.abilityKey} result={r} navigate={navigate} />)}
      </div>

      <div className="bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-warm-text mb-2 flex items-center gap-2"><span>💙</span> 給你的話</h3>
        <p className="text-sub-text text-sm leading-relaxed">{summaryText}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={onRetest}
          className="col-span-2 sm:col-span-1 py-2.5 px-4 rounded-full border-2 border-muted-orange text-muted-orange text-sm font-medium hover:bg-soft-orange transition-all"
        >
          再測驗一次
        </button>
        <button onClick={() => navigate('scenario')} className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all">回到情境應用</button>
        <button onClick={() => navigate('learning-support')} className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all">前往學習補給</button>
        <button onClick={() => navigate('abilities')} className="py-2.5 px-4 rounded-full bg-warm-teal text-white text-sm font-medium hover:opacity-90 transition-all">查看五大能力</button>
      </div>
    </div>
  )
}

export default function QuizPage({ navigate, professionId }) {
  const profession = professionsConfig[professionId]
  const [stage, setStage] = useState('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    setStage('intro')
    setCurrentQ(0)
    setAnswers({})
  }, [professionId])

  if (!profession) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="text-5xl mb-4">😅</div>
        <h2 className="text-xl font-bold text-warm-text mb-3">找不到這個職類的測驗</h2>
        <p className="text-sub-text text-sm mb-6">可能是路由設定錯誤，請回到情境應用重新選擇。</p>
        <button onClick={() => navigate('scenario')} className="btn-primary">回到情境應用</button>
      </div>
    )
  }

  const quizData = profession.quizData

  const resetAndGoScenario = () => {
    setStage('intro')
    setCurrentQ(0)
    setAnswers({})
    navigate('scenario')
  }

  const toggleOption = (questionId, optionId) => {
    setAnswers((prev) => {
      const cur = prev[questionId] || []
      return { ...prev, [questionId]: cur.includes(optionId) ? cur.filter((id) => id !== optionId) : [...cur, optionId] }
    })
  }

  const goNext = () => {
    if (currentQ < quizData.length - 1) {
      setCurrentQ((q) => q + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStage('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => { if (currentQ > 0) setCurrentQ((q) => q - 1) }

  const question = quizData[currentQ]
  const currentAnswers = answers[question?.id] || []

  if (stage === 'intro') return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">← 返回情境應用</button>
      <QuizIntro profession={profession} onStart={() => setStage('quiz')} />
    </div>
  )

  if (stage === 'results') return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <QuizResults profession={profession} answers={answers} navigate={navigate} onRetest={resetAndGoScenario} />
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">← 返回情境應用</button>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill"
            style={{ width: `${(currentQ / quizData.length) * 100}%` }} />
        </div>
        <span className="text-xs text-sub-text font-medium whitespace-nowrap">{currentQ + 1} / {quizData.length}</span>
      </div>

      <QuizQuestionCard
        question={question}
        selectedOptions={currentAnswers}
        onToggleOption={(optId) => toggleOption(question.id, optId)}
        questionIndex={currentQ}
        totalQuestions={quizData.length}
      />

      <div className="flex gap-3 mt-5">
        <button onClick={goPrev} disabled={currentQ === 0}
          className="flex-1 py-3 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          ← 上一題
        </button>
        <button onClick={goNext}
          className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all">
          {currentQ === quizData.length - 1 ? '查看結果 →' : '下一題 →'}
        </button>
      </div>

      {currentAnswers.length > 0 && (() => {
        const score = calculateQuestionScore(question, currentAnswers)
        const passed = score >= 3
        return (
          <div className={`mt-4 p-4 rounded-xl border text-sm font-medium ${passed ? 'bg-green-50 border-green-200 text-green-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
            <span className="mr-2">{passed ? '✅' : '💪'}</span>
            {passed ? question.feedback.pass : question.feedback.fail}
          </div>
        )
      })()}
    </div>
  )
}
