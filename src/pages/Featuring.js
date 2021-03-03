import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import FeaturedCard from "../components/FeaturedCard";

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/browse/featured-playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					setContent(response.data);

				});
		},
		[token, setContent]
	);

	return (
		<>
			<h1>Featured</h1>
			{content.playlists?.items.map(function (item) {
				return (
					<div key={item.name} className="featuring">
						<FeaturedCard image={item.images[0].url} title={item.name} track={item.type} />
					</div>
				);
			})}
		</>
	);
}
