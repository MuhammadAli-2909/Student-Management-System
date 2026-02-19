import { useState } from "react"

export default function StudentForm({ setForm, setStudents }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("Computer Science")
    const [email, setEmail] = useState("")

    function handleAdd() {

        if (!name || !age || !email) return

        const newStudent = {
            id: Date.now(),
            name,
            age,
            course,
            email
        }
        setStudents(prev => [...prev, newStudent])
        setForm(false)
        setName("")
        setAge("")
        setEmail("")
    }
    return (
        <form className="stForm">
            <div onClick={() => setForm(false)}><img src="src/assets/cross.svg" width={20}/></div>

            <label>Name</label>
            <input value={name} type="text" onChange={e => setName(e.target.value)} />

            <label>Age</label>
            <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)} />

            <label>Course</label>
            <select value={course} id="courses" onChange={e => setCourse(e.target.value)}>
                <option>Artificial Intelligence</option>
                <option>Computer Science</option>
                <option>Cyber Security</option>
                <option>Data Science</option>
                <option>Software Engineering</option>
            </select>

            <label>Email</label>
            <input 
                type="email" 
                value={email}
                id="email" 
                onChange={e => setEmail(e.target.value)} 
            />

            <button type="button" onClick={handleAdd}>
                Add Student
            </button>
        </form>
    )
}
