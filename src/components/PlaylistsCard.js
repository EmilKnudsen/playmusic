import "./PlaylistsCard.css"

export default function Playlists({top, music}) {
    return (
        <>
            <div className="playlistsCard__category">
            <p className="playlistsCard__title">{top}</p>
            <p className="playlistsCard__music">{music}</p>
            </div>
        </>
    )
}