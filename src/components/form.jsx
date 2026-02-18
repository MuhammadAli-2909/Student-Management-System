export default function Form() {
    return (
        <form>
            <div className="add">
                <input type="search" name="name" id="search" placeholder="search here" />
                <button type="button"  className="added">+ Add New Student</button>
            </div>
            <div className="add">
                <label>Filter by course:
                    <select name="select" id="select">
                        <option value="">All Courses</option>
                        <option value="">All Courses</option>
                        <option value="">All Courses</option>
                        <option value="">All Courses</option>
                    </select>
                </label>
                <button type="button" className="expo"><img src="src/assets/download.svg" alt="" width="20" />Export to CSV</button>
            </div>
        </form>
    )
}