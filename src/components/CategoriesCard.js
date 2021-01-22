import "./CategoriesCard.css"

export default function Categories({title}) {
    return (
            <div className="categoriesCard__category">
            <p className="categoriesCard__title">{title}</p>
            <a className="categoriesCard__show" href="/"><i class="fas fa-ellipsis-h"></i></a>
            </div>
    )
}