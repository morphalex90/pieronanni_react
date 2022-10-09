import MainMenu from '@layouts/MainMenu';
import Socials from '@layouts/Socials';

function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__menu">
                    <MainMenu position="header" />
                    <Socials />
                </div>

            </div>
        </header>
    );
}

export default Header;