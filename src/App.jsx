import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AbilitiesPage from './pages/AbilitiesPage'
import SelfCheckPage from './pages/SelfCheckPage'
import ScenarioPage from './pages/ScenarioPage'
import QuizPage from './pages/QuizPage'
import LearningSupportPage from './pages/LearningSupportPage'
import { professionsConfig } from './data'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page, anchor) => {
    setCurrentPage(page)
    if (anchor) {
      // 等下一頁渲染後再 scroll 到指定區塊
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 120)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderPage = () => {
    // 動態路由：xxx-quiz 對應到對應職類的測驗頁
    if (typeof currentPage === 'string' && currentPage.endsWith('-quiz')) {
      const professionId = currentPage.replace(/-quiz$/, '')
      if (professionsConfig[professionId]) {
        return <QuizPage navigate={navigate} professionId={professionId} />
      }
    }

    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />
      case 'abilities':
        return <AbilitiesPage navigate={navigate} />
      case 'selfcheck':
        return <SelfCheckPage navigate={navigate} />
      case 'scenario':
        return <ScenarioPage navigate={navigate} />
      case 'learning-support':
        return <LearningSupportPage navigate={navigate} />
      default:
        return <HomePage navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="page-enter">
        {renderPage()}
      </main>
      <footer className="bg-white border-t border-amber-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sub-text text-sm">
            © 2026 奇美醫院 SEL 學習小棧｜專為醫療專業人員設計的社會情緒學習平台
          </p>
          <p className="text-sub-text text-xs mt-1">
            照顧別人的同時，也別忘了照顧自己 🌸
          </p>
        </div>
      </footer>
    </div>
  )
}
