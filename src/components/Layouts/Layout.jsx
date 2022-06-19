import { useState, useEffect } from 'react';

import Header from './../Layouts/Header';
import Footer from './../Layouts/Footer';

export default function Layout(props) {

    const [mainPadding, setMainPadding] = useState(56);
    const [mainHeight, setMainHeight] = useState(null);

	useEffect(() => {
		setInterval(function () {
			setMainPadding(document.getElementsByClassName('header')[0].offsetHeight);
            setMainHeight(window.innerHeight - document.getElementsByClassName('footer')[0].offsetHeight);
		}, 50);

	}, []);

    return (
        <>
            <Header />

            <main id="main-content" className={props.className} style={{paddingTop: mainPadding, minHeight: mainHeight}}>
                {props.children}
            </main>

            <Footer />
        </>
    );
}
