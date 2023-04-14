import { useContext } from 'react';
import axios from 'axios';
import BooksContext from '../context/books';

const useBooksContext = () => {
    const { books, setBooks } = useContext(BooksContext);

    const createBook = async (title) => {
        const response = await axios.post(
            'http://localhost:3500/books',
            { title }
        );

        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    };

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3500/books");
        setBooks(response.data);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3500/books/${id}`);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3500/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data
                };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return {
        books,
        setBooks,
        createBook,
        fetchBooks,
        deleteBookById,
        editBookById
    };
};

export default useBooksContext;
