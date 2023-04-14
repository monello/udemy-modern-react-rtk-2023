import { createContext } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const valueToShare = {};

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
