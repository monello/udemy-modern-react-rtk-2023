function ProfileCard({ title, handle, image }) {
    return <div>
        <div><img src={image} alt={title} /></div>
        <div>The title is: {title}</div>
        <div>The handle is: {handle}</div>
    </div>;
}

export default ProfileCard;
