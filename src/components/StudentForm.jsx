import { useState } from "react"

export default function StudentForm({ setForm, setStudents, students }) {
    const [error, setError] = useState({})
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("Computer Science")
    const [email, setEmail] = useState("")

    function adding() {
        let newError = {}

        if (name === "") {
            newError.name = "Name is required"
        }

        if (age === "") {
            newError.age = "Age is required"
        }

        if (email === "") {
            newError.email = "Email is required"
        }
        const exist = students.find(
            student => student.name.toLowerCase() === name.toLowerCase()
        )

        if (exist) {
            newError.duplicate = "A student with this name already exists"
        }

        setError(newError)

        if (Object.keys(newError).length > 0) {
            return
        }
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
        setError({})
    }
    return (
        <form className="stForm">
            <div onClick={() => setForm(false)}><img src="src/assets/cross.svg" width={20} /></div>
            <label>Name</label>
            <input value={name} type="text" onChange={e => setName(e.target.value)} />
            {error.name && <p className="error">{error.name}</p>}
            <label>Age</label>
            <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)} />
            {error.age && <p className="error">{error.age}</p>}
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
            {error.email && <p className="error">{error.email}</p>}
            <button type="button" onClick={adding}>
                Add Student
            </button>
            {error.duplicate && <p className="error">{error.duplicate}</p>}
        </form>
    )
}
