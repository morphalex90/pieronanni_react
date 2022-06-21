import { Link } from "react-router-dom";

import MainMenu from './MainMenu';
import Socials from './Socials';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                {/* <div className="header__logo">
                    <Link to="/">
                        <span>{'<PieroNanni />'}</span>
                    </Link>
                </div> */}

                <div className="header__menu">
                    <MainMenu position="header" />
                    <Socials />
                </div>

                {/* <div className="header__socials">
                    <Socials />
                </div> */}
            </div>
        </header>
    );
}

export default Header;