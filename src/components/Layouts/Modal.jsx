import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const Modal = ({ show, onClose, title, content }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (content != null) {
            setIsBrowser(true);
            // console.log(content);
        }
    }, [content]);

    const handleCloseClick = (e) => {
        onClose();
    };

    const modalContent = show ? (
        <div className="overlay" onClick={handleCloseClick}>
            <div className="modal">
                <div className="modal__header">
                    <h1 className="modal__title">{title ? title : content.title}</h1>
                    <button className="modal__close" onClick={handleCloseClick}>[x]</button>
                </div>
                <div className="modal__content">
                    <div className="d-flex">

                        <div>
                            {content.images.map((image, id) => {
                                return (
                                    <Image key={id} src={require('../../img/projects/' + image).default} alt={title ? title : content.title} title={title ? title : content.title} />
                                )
                            })}
                        </div>

                        <div>
                            {parse(DOMPurify.sanitize(content.description, { USE_PROFILES: { html: true } }))}
                            <a href={content.url} target="_blank" rel="noreferrer">Visit site</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

export default Modal;