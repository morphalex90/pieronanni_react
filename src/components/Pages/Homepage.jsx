import Layout from './../Layouts/Layout';
import Synt from './../Layouts/Synt';

function Homepage() {
    return (
        <>
            <Synt />
            <Layout className="homepage">

                <section className="section --centered">
                    <h1>{'<PieroNanni/>'}</h1>
                    <p>You can do this, I believe in you.</p>
                </section>

            </Layout>
        </>
    );
}

export default Homepage;