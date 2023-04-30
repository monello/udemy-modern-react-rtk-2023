import { useDispatch, useSelector } from "react-redux";
import { songActions } from "../store";
import { createRandomSong } from "../data";
import Button from "./Button";

function SongPlaylist() {
    const dispatch = useDispatch();
    const songPlaylist = useSelector((state) => state.songs);

    const handleSongAdd = (song) => {
        dispatch(songActions.addSong(song));
    };
    const handleSongRemove = (song) => {
        dispatch(songActions.removeSong(song));
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <Button danger onClick={() => handleSongRemove(song)}>
                    X
                </Button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="text-lg font-bold">Song Playlist</h3>
                <div className="buttons">
                    <Button
                        primary
                        onClick={() => handleSongAdd(createRandomSong())}
                    >
                        + Add Song to Playlist
                    </Button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist;
