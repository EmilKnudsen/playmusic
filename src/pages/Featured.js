import FeaturedCard from "../components/FeaturedCard";
import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";

export default function Featured() {
    return (
        <>
            <TopNavigator title="FEATURED" /> 
            <PageHeading>Featured</PageHeading>
            <div className="featuredCard__scroll">
            <FeaturedCard image="./images/featured1.png" title="The Greatest Showman" track="Soundtrack"/>
            <FeaturedCard image="./images/featured2.png" title="Mr Creep Man" track="Soundtrack"/>  
            </div>
            <Navigator />
        </>
    )
}