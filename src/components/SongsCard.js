import "./SongsCard.css"

export default function Songs({header, text, time}) {
    return (
        <div className="songsCard__songs">
            <a className="songsCard__play" href="/"><i class="fas fa-play"></i></a>
        <div className="songsCard__text">
            <p className="songsCard__header">{header}</p>
            <p class="songsCard__text">{text}</p>
        </div>
        <p className="songsCard__time">{time}</p>
        </div>
    )
}