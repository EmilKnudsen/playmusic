import "./PlayerCard.css";

export default function PlayerNav() {
	return (
		<div className="playerNav">
			<a className="pnav" href="/">
				<i className="fas fa-step-backward"></i>
			</a>
			<a className="pnav" href="/">
				<i className="fas fa-backward"></i>
			</a>
			<a className="pnavPlay" href="/">
				<i className="fas fa-play"></i>
			</a>
			<a className="pnav" href="/">
				<i className="fas fa-forward"></i>
			</a>
			<a className="pnav" href="/">
				<i className="fas fa-step-forward"></i>
			</a>
		</div>
	);
}
