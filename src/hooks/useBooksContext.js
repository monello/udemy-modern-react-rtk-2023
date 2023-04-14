import { useContext } from 'react';
import axios from 'axios';
import BooksContext from '../context/books';

const useBooksContext = () => {
    const { books, setBooks } = useContext(BooksContext);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3500/books");
        setBooks(response.data);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3500/books/${id}`);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    return {
        books,
        setBooks,
        fetchBooks,
        deleteBookById
    };
};

export default useBooksContext;
