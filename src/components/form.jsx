export default function Form(props) {

    function triggering() {
        props.setForm(true)
    }

    return (
        <form>
            <div className="add">
                <input
                    type="search"
                    placeholder="search here"
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />

                <button
                    type="button"
                    className="added"
                    onClick={triggering}
                >
                    + Add New Student
                </button>
            </div>

            <div className="add">
                <label>
                    Filter by course:
                    <select
                        value={props.selectedCourse}
                        onChange={(e) => props.setSelectedCourse(e.target.value)}
                    >
                        <option value="">All Courses</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Software Engineering">Software Engineering</option>
                    </select>
                </label>

                <button type="button" className="expo" onClick={props.exportToCSV}>
                    <img src="src/assets/download.svg" width="20" />
                    Export to CSV
                </button>

            </div>
        </form>
    )
}
