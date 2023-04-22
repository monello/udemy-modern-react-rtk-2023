import { createContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    return (
        <NavigationContext.Provider value={{}}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContext;
