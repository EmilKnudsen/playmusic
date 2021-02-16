import { Link } from "@reach/router";
import "./Navigator.css";

export default function Navigator() {
	return (
		<div className="navigator">
			<Link className="navWifi" to="/">
				<i className="fas fa-wifi"></i>
			</Link>
			<Link className="navMic" to="/playlists">
				<i className="fas fa-microphone-alt"></i>
			</Link>
			<Link className="navPod" to="/">
				<i className="fas fa-podcast"></i>
			</Link>
			<Link className="navAdjust" to="/">
				<i className="fas fa-adjust"></i>
			</Link>
			<Link className="navCpg" to="/">
				<i className="fas fa-cog"></i>
			</Link>
		</div>
	);
}
