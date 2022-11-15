import { useState, useEffect } from 'react';

import Synt from '@layouts/Synt';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

export default function Layout(props) {

    const [mainPadding, setMainPadding] = useState(null);
    const [mainHeight, setMainHeight] = useState(null);

    useEffect(() => {
        const body = document.body;
        body.removeAttribute('class');
        body.classList.add(props.className);

        setMainPadding(document.getElementsByClassName('header')[0].offsetHeight);
        setMainHeight(window.innerHeight - document.getElementsByClassName('footer')[0].offsetHeight);
    }, [mainPadding, mainHeight]);

    return (
        <>
            <Synt />
            <Header />

            <main id="main-content" className={props.className} style={{ paddingTop: (mainPadding !== null ? mainPadding : 57), minHeight: (mainHeight !== null ? mainHeight : 'calc(100vh - 26px)') }}>
                {props.children}
            </main>

            <Footer />
        </>
    );
}
