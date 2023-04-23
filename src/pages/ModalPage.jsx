import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const buttonClickHandler = () => {
        setShowModal(true);
    };

    const onCloseHandler = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button primary onClick={buttonClickHandler}>
                Open Modal
            </Button>
            {showModal && <Modal onClose={onCloseHandler} />}
        </div>
    );
};

export default ModalPage;
