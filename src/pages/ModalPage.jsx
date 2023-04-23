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

    const actionBar = (
        <div>
            <Button primary onClick={onCloseHandler}>
                Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={onCloseHandler} actionBar={actionBar}>
            Here are some important Term &amp; Conditions to accept.
        </Modal>
    );

    return (
        <div>
            <Button primary onClick={buttonClickHandler}>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;
