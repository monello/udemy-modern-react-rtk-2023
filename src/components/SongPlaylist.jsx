import { createRandomSong } from "../data";
import Button from "./Button";

function SongPlaylist() {
    // To Do:
    // Get list of songs
    const songPlaylist = [];

    const handleSongAdd = (song) => {
        // To Do:
        // Add song to list of songs
    };
    const handleSongRemove = (song) => {
        // To Do:
        // Remove song from list of songs
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <button
                    onClick={() => handleSongRemove(song)}
                    className="button is-danger"
                >
                    X
                </button>
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
