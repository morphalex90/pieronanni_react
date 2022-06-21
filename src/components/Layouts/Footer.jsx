import MainMenu from './MainMenu';
// import Languages from './Languages';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <MainMenu position="footer" />
                </div>

                <div className="footer__languages">
                    {/* <Languages /> */}
                </div>

                <div className="footer__copy">
                    <p>{new Date().getFullYear()} &copy; Piero Nanni. Made with &hearts; in London</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;