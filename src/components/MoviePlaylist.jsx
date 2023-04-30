import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store";
import Button from "./Button";
import { createRandomMovie } from "../data";

function MoviePlaylist() {
    const dispatch = useDispatch();

    const moviePlaylist = useSelector((state) => state.movies);

    const handleMovieAdd = (movie) => {
        dispatch(movieActions.addMovie(movie));
    };
    const handleMovieRemove = (movie) => {
        dispatch(movieActions.removeMovie(movie));
    };

    const renderedMovies = moviePlaylist.map((movie) => {
        return (
            <li key={movie}>
                {movie}
                <Button danger onClick={() => handleMovieRemove(movie)}>
                    X
                </Button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="text-lg font-bold">Movie Playlist</h3>
                <div className="buttons">
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
