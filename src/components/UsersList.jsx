import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

const UsersList = () => {
    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full" />;
    }

    if (error) {
        return <div>Error fetching data...</div>;
    }

    return <div>Number of users: {data.length}</div>;
};

export default UsersList;
