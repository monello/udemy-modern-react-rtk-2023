import React from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
    return (
        <div>
            <Link to="/accordion">Go to Accordion</Link>
            <Link to="/dropdown">Go to Dropdown</Link>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
        </div>
    );
};

export default App;
