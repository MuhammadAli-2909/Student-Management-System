import { useState, useEffect } from "react"
import Form from "./Form"
import StudentList from "./StudentList"
import StudentForm from "./StudentForm"

export default function Main({ students, setStudents }) {
    const [form, setForm] = useState(false)
    const [search, setSearch] = useState("")
    const [Course, setCourse] = useState("")

    function exportToCSV() {
        if (students.length === 0) return
        const headers = ["Name", "Age", "Course", "Email"]
        const rows = students.map(student => [
            student.name,
            student.age,
            student.course,
            student.email
        ])
        const csvContent =
            [headers, ...rows]
                .map(row => row.join(","))
                .join("\n")
        const blob = new Blob([csvContent], { type: "text/csv" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "students.csv"
        link.click()
        URL.revokeObjectURL(url)
    }
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students))
    }, [students])
    const filtered = students.filter(student => {
        const matchN = student.name.toLowerCase().includes(search.toLowerCase())
        const matchC = Course === "" ? true : student.course === Course
        return matchN && matchC
    })
    return (
        <main>
            <Form setForm={setForm} search={search} setSearch={setSearch} Course={Course} setCourse={setCourse} exportToCSV={exportToCSV} />
            <StudentList students={filtered} setStudents={setStudents} />
            {form && (
                <div className="overlay" onClick={() => setForm(false)}>
                    <div onClick={(e)=>{e.stopPropagation()}}>
                        <StudentForm setForm={setForm} setStudents={setStudents} students={students}/>
                    </div>
                </div>
            )}
        </main>
    )
}
