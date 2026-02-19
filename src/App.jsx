import Header from "./components/header"
import { useState } from "react"
import Main from "./components/MainContent"
export default function App() {
  const [students, setStudents] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("students"))
    return saved || []
  })
  return (
    <>
      <Header students={students} />
      <Main students={students} setStudents={setStudents} />
    </>
  )
}

