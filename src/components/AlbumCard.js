import "./AlbumCard.css";

export default function Album({ image, imageSingle, title, text, view, artist, songs }) {
	return (
		<>
			<div className="albumCard__header">
				<p className="albumCard__text">{text}</p>
				<p className="albumCard__view">{view}</p>
			</div>

			<div className="albumCard__image">
				<img className="albumCard__images" src={image} alt="" />
			</div>

			<div className="albumCard__songs">
				<img className="albumCard__singleImg" src={imageSingle} alt="" />
				<div className="albumCard__single">
					<p className="albumCard__title">{title}</p>
					<p className="albumCard__artist">{artist}</p>
				</div>
				<p className="albumCard__time">{songs}</p>
			</div>
		</>
	);
}
