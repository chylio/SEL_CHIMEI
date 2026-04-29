// 此檔已被通用 QuizPage 取代，保留為相容性 shim。
// 實際邏輯請見 ./QuizPage.jsx 與 src/data.js 中的 professionsConfig。
import QuizPage from './QuizPage'

export default function PharmacistQuizPage({ navigate }) {
  return <QuizPage navigate={navigate} professionId="pharmacist" />
}
