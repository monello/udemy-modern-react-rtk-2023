import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
    const handleClick = () => {
        console.log("Click!!!");
    };
    return (
        <div>
            <h1 className="text-lg font-bold leading-10 underline">
                Variations
            </h1>
            <div>
                <Button onClick={handleClick}>
                    <GoBell className="mr-1" />
                    Default with Icon
                </Button>
            </div>
            <div>
                <Button className="mb-5" primary>
                    <GoCloudDownload /> Primary with Icon
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoDatabase />
                    Secondary with Icon
                </Button>
            </div>
            <div>
                <Button success>Success</Button>
            </div>
            <div>
                <Button warning>Warning</Button>
            </div>
            <div>
                <Button danger>Danger</Button>
            </div>
            <br />
            <h1 className="text-lg font-bold leading-10 underline">
                Rounded Style
            </h1>
            <div>
                <Button rounded>Default Rounded</Button>
            </div>
            <div>
                <Button primary rounded>
                    Primary Rounded
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    Secondary Rounded
                </Button>
            </div>
            <div>
                <Button success rounded>
                    Success Rounded
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    Warning Rounded
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    Danger Rounded
                </Button>
            </div>
            <br />
            <h1 className="text-lg font-bold leading-10 underline">
                Outline Style
            </h1>
            <div>
                <Button primary outline>
                    Default Outline
                </Button>
            </div>
            <div>
                <Button primary outline>
                    Primary Outline
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Secondary Outline
                </Button>
            </div>
            <div>
                <Button success outline>
                    Success Outline
                </Button>
            </div>
            <div>
                <Button warning outline>
                    Warning Outline
                </Button>
            </div>
            <div>
                <Button danger outline>
                    Danger Outline
                </Button>
            </div>
            <br />
            <h1 className="text-lg font-bold leading-10 underline">
                Rounded Outline Style
            </h1>
            <div>
                <Button primary rounded outline>
                    Default Rounded Outline
                </Button>
            </div>
            <div>
                <Button primary rounded outline>
                    Primary Rounded Outline
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
                    Secondary Rounded Outline
                </Button>
            </div>
            <div>
                <Button success rounded outline>
                    Success Rounded Outline
                </Button>
            </div>
            <div>
                <Button warning rounded outline>
                    Warning Rounded Outline
                </Button>
            </div>
            <div>
                <Button danger rounded outline>
                    Danger Rounded Outline
                </Button>
            </div>
        </div>
    );
};

export default ButtonPage;
