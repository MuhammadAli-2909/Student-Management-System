import img from "../assets/delete.svg"
export default function StudentList({ students, setStudents }) {
    function deleteS(id) {
        const a = confirm(`Do you want to delete the data of student`);
        if(a){
            const filtered = students.filter(student => student.id !== id)
            setStudents(filtered)
        }
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
                        <img src={img} width="25" onClick={() => deleteS(student.id)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
