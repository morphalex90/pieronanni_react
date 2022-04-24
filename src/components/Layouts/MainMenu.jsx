import { NavLink } from "react-router-dom";

function MainMenu() {
    return (
        <nav role="navigation">
            <ul>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'is-active' : undefined}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'is-active' : undefined}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'is-active' : undefined}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default MainMenu;