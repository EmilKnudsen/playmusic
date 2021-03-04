import querystring from "querystring";
import LoginCard from "../components/LoginCard";

var uri;

if (window.location.href.includes("netlify")) {
	uri = "https://iplaymusic-emilk.netlify.app/callback";
} else {
	uri = "http://localhost:8888/callback";
}

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "08daff713cef430b86db5e9db1a30b1b",
		scope: "user-read-private user-read-email",
		redirect_uri: uri,
		state: "asdasdasdakosadfsdafasdfdsfadsasdasdfasd",
	});
	return (
		<>
			<LoginCard header="Login" />

			<div className="loginCard__user">
				<form>
					<label>Username</label>
					<input type="text" id="user" placeholder="Enter your username" />

					<label>Password</label>
					<input type="text" id="user" placeholder="Enter your password" />
				</form>
			</div>
			<a className="loginCard__login" href={`https://accounts.spotify.com/authorize?${queryParameters}`}>
				LOG IN
			</a>
			<a className="loginCard__spotify" href={`https://accounts.spotify.com/authorize?${queryParameters}`}>
				<i className="fab fa-spotify"></i>
			</a>
			<p className="loginCard__spotifyText">Spotify Login</p>
		</>
	);
}
