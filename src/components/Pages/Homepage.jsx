import Header from './../Layouts/Header';
import Footer from './../Layouts/Footer';
import Synt from './../Layouts/Synt';

function Homepage() {
    return (
        <>
            <Synt />
            <Header />

            <main id="main-content">
                <h1>Welcome to the homepage!</h1>
                <p>You can do this, I believe in you.</p>
            </main>

            <Footer />
        </>
    );
}

export default Homepage;