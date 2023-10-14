import { useState, useEffect } from 'react';

import Synt from '@layouts/Synt';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

export default function Layout({ className = '', children }) {
    const [mainPadding, setMainPadding] = useState(null);

    useEffect(() => {
        const body = document.body;
        body.removeAttribute('class');
        body.classList.add(className);

        setMainPadding(document.getElementsByClassName('header')[0].offsetHeight);
    }, [mainPadding, className]);

    return (
        <>
            <Synt />
            <Header />
            <div className="content-wrapper" style={{ paddingTop: (mainPadding !== null ? mainPadding : 61) }}>
                <main id="main-content">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}
