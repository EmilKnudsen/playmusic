import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";
import SongsCard from "../components/SongsCard";

export default function Songs() {
	return (
		<>
			<TopNavigator title="MUSIC" />
			<PageHeading>All Songs</PageHeading>
			<div className="songsCard">
				<SongsCard header="Old Town Road" text="Billy Ray Cyrus" time="3 : 56" />
				<SongsCard header="Don’t Call Me Up" text="Mabel" time="2 : 46" />
				<SongsCard header="Let Me Down Slowly" text="Alec Benjamin" time="2 : 46" />
				<SongsCard header="Paradise" text="Bazzi" time="4 : 12" />
				<SongsCard header="Sucker" text="Jonas Brothers" time="3 : 12" />
				<SongsCard header="Kill This Love" text="BLACKPINK" time="3 : 56" />
				<SongsCard header="Kill This Love" text="BLACKPINK" time="2 : 47" />
			</div>
			<Navigator />
		</>
	);
}
