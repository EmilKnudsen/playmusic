import "./FeaturedCard.css";

export default function Featured({ image, title, track }) {
	return (
		<article className="featuredCard">
			<img className="featuredCard__image" src={image} alt={title} />
			<div className="featuredCard__text">
				<p className="featuredCard__title">{title}</p>
				<p className="featuredCard__track">{track}</p>
			</div>
		</article>
	);
}
