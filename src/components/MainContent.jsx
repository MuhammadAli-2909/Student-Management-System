import { useState, useEffect } from "react"
import Form from "./Form"
import StudentList from "./StudentList"
import StudentForm from "./StudentForm"

export default function Main() {
    const [form, setForm] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")

    const [students, setStudents] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("students"))
        return saved || []
    })
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

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students))
    }, [students])
    const filteredStudents = students.filter(student => {
        const matchName = student.name
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchCourse = selectedCourse === ""
            ? true
            : student.course === selectedCourse

        return matchName && matchCourse
    })

    return (
        <main>
            <Form setForm={setForm} search={search} setSearch={setSearch} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} exportToCSV={exportToCSV}/>
            <StudentList students={filteredStudents} setStudents={setStudents} />
            {form && <StudentForm setForm={setForm} setStudents={setStudents} />}
        </main>
    )
}
