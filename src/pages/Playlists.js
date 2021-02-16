import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";
import SongsCard from "../components/SongsCard";
import PlaylistCard from "../components/PlaylistsCard";
import bgImage from "./sound-wave.png";
import { Link, navigate } from "@reach/router";

export default function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState([]);
	var [songs, setSongs] = useState({});
	var [playlists, setPlaylists] = useState([]);
	var [currentPlaylist, setCurrentPlaylist] = useState("");

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/me/playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => setPlaylists(response.data.items));
		},
		[token, setContent]
	);

	useEffect(
		function () {
			if (props.id)
				axios
					.get("https://api.spotify.com/v1/playlists/" + props.id + "/tracks", {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})
					.then((response) => setSongs(response.data));
		},
		[token, props.id, setSongs]
	);

	return (
		<>
			<TopNavigator title="PLAYLISTS" style={{ backgroundImage: `url(${bgImage})` }} />
			<PageHeading>Playlists</PageHeading>
			<div className="playlistCard__images">
				{playlists.map((list) => (
					<Link key={list.id} to={`/playlists/${list.id}`} onClick={() => setCurrentPlaylist(list.name)}>
						<img className="playlistCard__image" src={list.images[0].url} alt="" />{" "}
					</Link>
				))}
			</div>
			<span className="playlistsCard__header">{currentPlaylist}</span>
			<div className="songsCard">
				{songs.items?.map(({ track }) => (
					<SongsCard key={track.id} text={track.artists[0].name} header={track.name} time={track.duration_ms} />
				))}
				<a className="playlists__link" href="/">
					LISTEN ALL
				</a>
			</div>
			<Navigator />
		</>
	);
}
