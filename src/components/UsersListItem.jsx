import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";

const UsersListItem = ({ user }) => {
    const [execRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        execRemoveUser(user);
    };

    const header = (
        <>
            <Button loading={isLoading} onClick={handleClick} className="mr-3">
                <GoTrashcan />
            </Button>
            {error && <div>Error deleting user.</div>}
            {user.name}
        </>
    );

    return <ExpandablePanel header={header}>CONTENT!!!</ExpandablePanel>;
};

export default UsersListItem;
