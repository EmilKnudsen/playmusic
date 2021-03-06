import "./LoginCard.css";

export default function Login({ header, username, password, spotify }) {
	return (
		<>
			<h1 className="loginCard__header">{header}</h1>
			<p className="loginCard__username">{username}</p>
			<p className="loginCard__password">{password}</p>
			<a href="/" className="loginCard__spotifyLogin">
				{spotify}
			</a>
		</>
	);
}
