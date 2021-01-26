import "./PlayerCard.css";

export default function PlayerCard ({bg, song, artist, start, end, image}) {
    return (
        <div className="playerCard>">
        <img className="playerCard__bg" src={bg} alt={song}/>
        <img className="playerCard__image" src={image} alt={song}/>
        <p className="playerCard__song">{song}</p>
        <p className="playerCard__artist">{artist}</p>
        <hr className="playerCard__line"/>
        <div className="playerCard__time">
        <p className="playerCard__timeStart">{start}</p>
        <p className="playerCard__timeEnd">{end}</p>
        </div>
        </div>
    )
}