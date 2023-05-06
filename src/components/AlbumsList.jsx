import React from "react";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    let content;
    if (isLoading) {
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error loading albums</div>;
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>;
            return (
                <ExpandablePanel key={album.id} header={header}>
                    List of photos in this album
                </ExpandablePanel>
            );
        });
    }

    return (
        <div>
            <div>Albums for {user.name}</div>
            {content}
        </div>
    );
};

export default AlbumsList;
