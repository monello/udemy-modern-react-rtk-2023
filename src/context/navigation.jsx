import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);

        // clean up function
        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    return (
        <NavigationContext.Provider value={{}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContext;
