import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 1,
            label: "Label One",
            content: "Here is some content for the first accordion tab",
        },
        {
            id: 2,
            label: "Label Two",
            content: "Here is some content for the second accordion tab",
        },
        {
            id: 3,
            label: "Label Three",
            content: "Here is some content for the third accordion tab",
        },
    ];
    return <Accordion items={items} />;
};

export default AccordionPage;
