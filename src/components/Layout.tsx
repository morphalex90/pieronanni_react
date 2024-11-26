import { useState, useEffect, ReactNode } from 'react';

import Synt from '@layouts/Synt';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

export default function Layout({ className = '', children }: { className: string, children: ReactNode }) {
    const [mainPadding, setMainPadding] = useState(0);

    useEffect(() => {
        const { body } = document;
        body.removeAttribute('class');
        body.classList.add(className);

        const header: HTMLElement = document.getElementsByClassName("header")[0] as HTMLElement;
        if (header !== null) {
            setMainPadding(header.offsetHeight)
        }
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
