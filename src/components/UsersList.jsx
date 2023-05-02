import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import useThunk from "../hooks/useThunk";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
    const [execFecthUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [execAdduser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        execFecthUsers();
    }, [execFecthUsers]);

    const handleAddUser = () => {
        execAdduser();
    };

    if (isLoadingUsers) {
        return <Skeleton times={6} className="h-10 w-full" />;
    }

    if (loadingUsersError) {
        return <div>Error fetching data...</div>;
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between item-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {isCreatingUser ? (
                    "Creating User"
                ) : creatingUserError ? (
                    "Error creating user"
                ) : (
                    <Button onClick={handleAddUser}>+ Add User</Button>
                )}
            </div>
            {renderedUsers}
        </div>
    );
};

export default UsersList;
