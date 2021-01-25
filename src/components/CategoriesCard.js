import "./CategoriesCard.css"

export default function Categories({title}) {
    return (
        <>
            <div className="categoriesCard__category">
            <p className="categoriesCard__title">{title}</p>
            <summary className="categoriesCard__show"><i class="fas fa-ellipsis-h"></i></summary>
            <details>
            <p>test</p>
            </details>
            </div>
        </>
    )
}