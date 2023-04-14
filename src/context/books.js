import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);
    const valueToShare = { books, setBooks };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
