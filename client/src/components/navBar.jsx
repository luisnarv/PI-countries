import React, {useState} from "react";
import "./navBar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
        
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> max population</a>
                <a href="#"> all </a>
                <a href="#"> clean</a>
                <a href="#"> az</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar