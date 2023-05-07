import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (
        <>
            <Button
                className="mr-2"
                loading={results.isLoading}
                onClick={handleRemoveAlbum}
            >
                <GoTrashcan />
            </Button>
            {album.title}
        </>
    );
    return (
        <ExpandablePanel header={header}>
            List of photos in this album.
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
