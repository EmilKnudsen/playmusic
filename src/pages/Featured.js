import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";
import FeaturedCard from "../components/FeaturedCard";

export default function Featured() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response =>  {
			setContent(response.data)

		} );
	}, [token, setContent]);

	return (
		<>
                <TopNavigator title="FEATURED" /> 
                <PageHeading>Featured</PageHeading>
			{
				content.playlists?.items.map(function (item){
					return (
                        <>
                        <div className="featuredCard__scroll">
						<FeaturedCard image={item.images[0].url} title={item.name} track={item.type} />
                        </div>
                        </>
					)
				})
			}
                <Navigator />
		</>
	)
}