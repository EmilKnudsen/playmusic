import querystring from "querystring";

export default function Login() {
    var queryParameters = querystring.stringify({
        response_type: "code",
        client_id: "08daff713cef430b86db5e9db1a30b1b",
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:8888/callback",
        state: "asdasdasdakosadfsdafasdfdsfadsasdasdfasd"
    });
    return (
        <>
            <h1>Login</h1>
            <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with spotify</a>
        </>
    )
}