import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";
import SongsCard from "../components/SongsCard";
import PlaylistCard from "../components/PlaylistsCard";

export default function Playlists() {
    return (
        <>
        <TopNavigator title="PLAYLISTS" />
        <PageHeading>Playlists</PageHeading>
        <div className="songsCard">
        <span className="playlistsCard__header"><PlaylistCard top="Top 50" music="Rock Ballads"/></span>
        <SongsCard header="Old Town Road" text="Billy Ray Cyrus" time="3 : 56"/>
        <SongsCard header="Don’t Call Me Up" text="Mabel" time="2 : 46"/>
        <SongsCard header="Let Me Down Slowly" text="Alec Benjamin" time="2 : 46"/>
        <SongsCard header="Here With Me" text="Marshmello" time="3 : 37"/>
        <SongsCard header="Paradise" text="Bazzi" time="3 : 12"/>
        <SongsCard header="Let Me Down Slowly" text="Alec Benjamin" time="4 : 12"/>
        </div>
        <a className="playlists__link" href="/">LISTEN ALL</a> 
        <Navigator />
        </>
    )
}