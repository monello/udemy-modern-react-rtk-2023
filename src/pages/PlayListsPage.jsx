import React from "react";
import Button from "../components/Button";
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import "./styles.css";
import { useDispatch } from "react-redux";
import { reset } from "../store";

const PlayListsPage = () => {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <div className="container is-fluid">
            <Button danger className="mb-4" onClick={() => handleResetClick()}>
                Reset Both Playlists
            </Button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
};

export default PlayListsPage;
