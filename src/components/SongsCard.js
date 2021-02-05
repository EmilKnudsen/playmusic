import { Link } from "@reach/router"
import "./SongsCard.css"

export default function Songs({header, text, time, id}) {
    return (
        <div className="songsCard__songs">
            <Link className="songsCard__play" to={`/player/${id}`}><i className="fas fa-play"></i></Link>
        <div className="songsCard__text">
            <p className="songsCard__header">{header}</p>
            <p className="songsCard__text">{text}</p>
        </div>
        <p className="songsCard__time">{time}</p>
        </div>
    )
}