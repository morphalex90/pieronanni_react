import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

import '../../css/_popup.scss';

export default function Popup() {
    const { popup, setPopup } = useContext(GlobalContext);
    const [open, setOpen] = useState(true);

    useEffect(() => { // open black overlay, wait 50ms to open popup content
        setTimeout(function () {
            setOpen(!open);
        }, 200)
    }, [popup]);

    const closePopup = (e) => { // close popup only on specific tag click, avoid closing it when clicking child
        e.preventDefault();
        if (e.target === e.currentTarget) {
            setPopup(null);
        }
    }

    return (
        <>
            {popup !== null &&
                <div className="popup__wrapper" onClick={e => closePopup(e)}>
                    <div className={'popup__content' + (open ? ' in' : '')}>
                        <div className="popup__title">
                            <span>{popup.title || '' }</span>
                            <span className="popup__close" title="Close" onClick={e => closePopup(e)}>[x]</span>
                        </div>

                        <div className="d-flex">
                            <div>
                                <img src={popup.images[0]} />
                            </div>

                            <div>
                                <div>{popup.description}</div>
                                <a className="button" href={popup.url} target="_blank" rel="noreferrer">View website</a>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}
