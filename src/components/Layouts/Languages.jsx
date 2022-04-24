import { NavLink } from "react-router-dom";

function Languages() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'is-active' : undefined}>English</NavLink></li>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'is-active' : undefined}>Italian</NavLink></li>
            </ul>
        </nav>
    );
}

export default Languages;