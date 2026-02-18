import { useState } from "react";
export default function Header(){
    const [toggle, setToggle] = useState(false);
    function toggling(){
        setToggle(prev=>!prev)
         document.body.classList.toggle('dark');
    }
    return(
        <header>
            <div className="left">
                <h1>Student Management System</h1>
                <h3>Total Students: <span>3</span></h3>
            </div>
            <button className="right" onClick={toggling}>
                {toggle?"🌞":"🌙"}
            </button>
        </header>
    )
}