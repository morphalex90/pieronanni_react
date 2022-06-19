import { Link } from "react-router-dom";

import MainMenu from './MainMenu';
import Socials from './Socials';

import logo from '../../img/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" title="Logo" />
                    </Link>
                </div>

                <div className="header__menu">
                    <MainMenu />
                </div>

                <div className="header__socials">
                    <Socials />
                </div>
            </div>
        </header>
    );
}

export default Header;