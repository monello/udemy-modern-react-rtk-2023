import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
    useEffect(() => {
        // when the modal is rendered, we stop the page from being scrollable, by setting the <body> tag to "overflow: hidden"
        document.body.classList.add("overflow-hidden");
        // this is a cleanup function
        // when the modal is removed (or rerendered) this function will run and restore th scrollability of the page (<html> tag)
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);
    return ReactDOM.createPortal(
        <div>
            <div
                className="absolute inset-0 bg-gray-300 opacity-80"
                onClick={onClose}
            ></div>
            <div className="absolute inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
};

export default Modal;
