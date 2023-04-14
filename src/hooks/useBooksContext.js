import { useContext } from 'react';
import axios from 'axios';
import BooksContext from '../context/books';

const useBooksContext = () => {
    const { books, setBooks } = useContext(BooksContext);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3500/books");
        setBooks(response.data);
    };

    return {
        books,
        setBooks,
        fetchBooks
    };
};

export default useBooksContext;
