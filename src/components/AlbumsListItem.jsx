import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
    const header = <div>{album.title}</div>;
    return (
        <ExpandablePanel header={header}>
            List of photos in this album.
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
