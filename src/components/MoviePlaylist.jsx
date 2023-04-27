import Button from "./Button";

import { createRandomMovie } from "../data";

function MoviePlaylist() {
    // To Do:
    // Get list of movies
    const moviePlaylist = [];

    const handleMovieAdd = (movie) => {
        // To Do:
        // Add movie to list of movies
    };
    const handleMovieRemove = (movie) => {
        // To Do:
        // Remove movie from list of movies
    };

    const renderedMovies = moviePlaylist.map((movie) => {
        return (
            <li key={movie}>
                {movie}
                <button
                    onClick={() => handleMovieRemove(movie)}
                    className="button is-danger"
                >
                    X
                </button>
            </li>
        );
    });

    return (
        <div>
            <div className="table-header">
                <h3 className="text-lg font-bold">Movie Playlist</h3>
                <div>
                    <Button
                        primary
                        onClick={() => handleMovieAdd(createRandomMovie())}
                    >
                        + Add Movie to Playlist
                    </Button>
                </div>
            </div>
            <ul>{renderedMovies}</ul>
        </div>
    );
}

export default MoviePlaylist;
