import React from "react";
import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <Button primary>Button Text</Button>
            </div>
            <div>
                <Button secondary>Button Text</Button>
            </div>
            <div>
                <Button success>Button Text</Button>
            </div>
            <div>
                <Button warning>Button Text</Button>
            </div>
            <div>
                <Button danger>Button Text</Button>
            </div>
            <div></div>
        </div>
    );
};

export default App;
