import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';

const Modal = ({ show, onClose, title, content }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
        console.log(content);
    }, [content]);

    const handleCloseClick = (e) => {
        // e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <>
            <div className="overlay" onClick={handleCloseClick}>
            </div>
            <div className="modal">
                <div className="modal__header">
                    <h1 className="modal__title">{title ? title : content.title}</h1>
                    <button className="modal__close" onClick={handleCloseClick}>[x]</button>
                </div>
                <div className="modal__content">
                    <div className="d-flex">

                        <div style={{ position: 'relative' }}>
                            {content.images.map((image, id) => {
                                return (
                                    <Image key={id} src={image} alt={title ? title : content.title} title={title ? title : content.title} layout='fill' />
                                )
                            })}
                        </div>

                        <div>
                            {content.description.map((line, id) => {
                                return (
                                    <p key={id} >{line}</p>
                                )
                            })}
                            <a href={content.url} target="_blank" rel="noreferrer">Visit site</a>
                        </div>
                    </div>

                </div>
            </div>
        </>

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