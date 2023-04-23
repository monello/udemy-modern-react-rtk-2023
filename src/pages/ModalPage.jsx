import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const fakeContent = (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sem quam, tincidunt in magna vel, bibendum condimentum erat. Aliquam
            erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse pellentesque quam nec
            turpis porta ultrices. Aenean tincidunt lacus vel nisi tempus
            semper. Proin condimentum risus sed purus sollicitudin, aliquam
            semper turpis lobortis. Integer malesuada gravida leo, non dapibus
            arcu sollicitudin a.
        </p>
        <br />
    </div>
);

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
            {fakeContent}
            {showModal && modal}
        </div>
    );
};

export default ModalPage;
