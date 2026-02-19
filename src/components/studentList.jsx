export default function StudentList({ students, setStudents }) {

    function handleDelete(id) {
        const filtered = students.filter(student => student.id !== id)
        setStudents(filtered)
    }

    return (
        <div className="student">
            <h1>Students List ({students.length})</h1>

            <div className="lists">
                {students.map(student => (
                    <div className="list" key={student.id}>
                        <div className="profile">
                            {student.name.charAt(0).toUpperCase()}
                        </div>

                        <h4>{student.name}</h4>
                        <p>📅 age: {student.age}</p>
                        <p>📚 {student.course}</p>
                        <p>💌 {student.email}</p>

                        <img 
                            src="src/assets/delete.svg" 
                            width="25"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(student.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
