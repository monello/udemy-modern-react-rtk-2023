import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    // currentPath will be used (soon) to make react navigate to whatever the value in currentPath is
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // This useEffect covers scenarios where the user clicks the browser's Back and Forward buttons
    // When there buttons are clicked (User Navigation) the `popstate` event is fired
    // We can then get the path that the user "navigated" to from the state which is returned from (popped) from the browser's History State
    // We use this then to keep our currentPath state variable syncedS
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

    // The purpuse of the navigate function will be to handle all scenarios where we need to navigate programatically.
    // This could be user-driven by clicks (or ay actions) inside our app. This is calls Programatic navigation
    // We push the target path (destination we need to navigate to - hence the prop is called "to") to the browser's History State
    // pushState does not case the popstate event to fire, so we need to manually sync our currentPath state variable
    const navigate = (to) => {
        window.history.pushState({}, "", to);
        // setting the currentPath that will soon be shared to the rest of the app so that React can use it to render the correct components
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContext;
