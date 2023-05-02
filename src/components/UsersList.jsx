import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import useThunk from "../hooks/useThunk";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
    const [execFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [execAdduser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        execFetchUsers();
    }, [execFetchUsers]);

    const handleAddUser = () => {
        execAdduser();
    };

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div>Error fetching data...</div>;
    } else {
        content = data.map((user) => {
            return (
                <div key={user.id} className="mb-2 border rounded">
                    <div className="flex p-2 justify-between item-center cursor-pointer">
                        {user.name}
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleAddUser}>
                    + Add User
                </Button>
                {creatingUserError && "Error creating user..."}
            </div>
            {content}
        </div>
    );
};

export default UsersList;
