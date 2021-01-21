import TopHeading from "./TopHeading";
import "./TopNavigator.css";

export default function TopNavigator({title}) {
    return (
        <div className="topNavigator">
            <a href="/"><i class="fas fa-chevron-left"></i></a>
            <TopHeading>{title}</TopHeading>
            <a href="/"><i class="fas fa-search"></i></a>
         </div>
    )
}   