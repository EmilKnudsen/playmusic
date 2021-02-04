import "./PlaylistsCard.css"

export default function Playlists({top, music, image, link}) {
    return (
        <>
            <div className="playlistsCard__category">
            <a href="/player"><img className="playlistsCard__image" src={image} alt=""/></a>
            <p className="playlistsCard__title">{top}</p>
            <p className="playlistsCard__music">{music}</p>
            </div>
        </>
    )
}