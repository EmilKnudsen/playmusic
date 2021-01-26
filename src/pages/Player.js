import PlayerCard from "../components/PlayerCard";
import TopNavigator from "../components/TopNavigator";
import PlayerNav from "../components/PlayerNav";

export default function Player() {
    return (
        <>
            <TopNavigator transparent title="PLAYING" /> 
            <PlayerCard bg="./images/background.png" image="./images/playercard.png" song="Don't Call Me Up" artist="Mabel" start="0:00" end="3:40"/>
            <PlayerNav />
        </>
    )
}