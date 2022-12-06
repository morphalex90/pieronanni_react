import MainMenu from '@layouts/MainMenu';

function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__menu">
                    <MainMenu position="header" />
                </div>

            </div>
        </header>
    );
}

export default Header;