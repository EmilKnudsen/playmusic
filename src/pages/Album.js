import AlbumCard from "../components/AlbumCard";
import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";

export default function Album() {
	return (
		<>
			<TopNavigator title="MUSIC" />
			<PageHeading>All Albums</PageHeading>
			<AlbumCard text="Featured Albums" view="View All" />

			<div className="albumCard__scroll">
				<AlbumCard image="./images/album1.png" />
				<AlbumCard image="./images/album2.png" />
				<AlbumCard image="./images/album3.png" />
			</div>

			<AlbumCard text="New Releases" view="View All" />

			<AlbumCard imageSingle="./images/album7.png" title="Old Town Road" artist="Billy Ray Cyrus" songs="12 Songs" />
			<AlbumCard imageSingle="./images/album4.png" title="Old Town Road" artist="Billy Ray Cyrus" songs="12 Songs" />
			<AlbumCard imageSingle="./images/album5.png" title="Old Town Road" artist="Billy Ray Cyrus" songs="12 Songs" />
			<AlbumCard imageSingle="./images/album6.png" title="Old Town Road" artist="Billy Ray Cyrus" songs="12 Songs" />
			<Navigator />
		</>
	);
}
