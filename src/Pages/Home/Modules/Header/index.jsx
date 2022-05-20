import { useState } from "react"
import './style.css'

function HamburguerMenu() {
    const [active,setMode] = useState(false);
    const ToggleMode = () => {setMode(!active)};
   
    return(
        <>
            <div className="App">
                    <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                        <div className="hamburguer hamburguerIcon"></div>
                    </div>
                

                <div className={active ? "menu menuOpen" : "menu menuClose"}>
                    <div className="list">
                        <ul className="listItems">
                            <li><a href="#my">ABOUT</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#skills">MY SKILLS</a></li>
                            <li><a href="#contact">CONTACTS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HamburguerMenu;