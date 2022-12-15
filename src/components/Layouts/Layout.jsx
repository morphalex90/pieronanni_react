import { useState, useEffect } from 'react';

import Synt from '@layouts/Synt';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

export default function Layout({ className = '', children }) {

    const [mainPadding, setMainPadding] = useState(null);
    const [mainHeight, setMainHeight] = useState(null);

    useEffect((className) => {
        const body = document.body;
        body.removeAttribute('class');
        body.classList.add(className);

        setMainPadding(document.getElementsByClassName('header')[0].offsetHeight);
        setMainHeight(window.innerHeight - document.getElementsByClassName('footer')[0].offsetHeight);
    }, [mainPadding, mainHeight]);

    return (
        <>
            <Synt />
            <Header />

            <main id="main-content" className={className} style={{ paddingTop: (mainPadding !== null ? mainPadding : 61), minHeight: (mainHeight !== null ? mainHeight : 'calc(100vh - 46px)') }}>
                {children}
            </main>

            <Footer />
        </>
    );
}
