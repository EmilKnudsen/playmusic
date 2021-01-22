import CategoriesCard from "../components/CategoriesCard";
import Navigator from "../components/Navigator";
import TopNavigator from "../components/TopNavigator";
import PageHeading from "../components/PageHeading";

export default function Categories() {
    return(
        <>
            <TopNavigator title="CATEGORIES" />
            <PageHeading>Categories</PageHeading>
            <article className="categoriesCard">
            <CategoriesCard title="Alternative" />
            <CategoriesCard title="Blues" />
            <CategoriesCard title="Classical" />
            <CategoriesCard title="Country" />
            <CategoriesCard title="Dance" />
            <CategoriesCard title="Electronic" />
            <CategoriesCard title="Fitness & Workout" />
            <CategoriesCard title="Hip-Hop/Rap" />
            <CategoriesCard title="Industrial" />
            <Navigator />
            </article>
        </>
    )
}