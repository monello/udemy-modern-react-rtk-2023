import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

const useThunk = (thunk) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const execThunk = useCallback(() => {
        setIsLoading(true);
        dispatch(thunk())
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [thunk, dispatch]);

    return [execThunk, isLoading, error];
};

export default useThunk;
