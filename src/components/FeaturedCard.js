import './FeaturedCard.css';
import PageHeading from "./PageHeading";

export default function Featured() {
    return (
        <article className="featured">
            <PageHeading>Featured</PageHeading>

            <div className="featuredImgbox">
            <p className="featuredTitle">The Greatest <br/> Showman</p>
            <p className="featuredSoundtrack">Soundtrack</p>
            <img className="featuredImage" src="./images/featured1.png" alt=""/>
            </div>
            <img className="featuredImage"  src="./images/featured2.png" alt=""/>
        </article>
    )
}