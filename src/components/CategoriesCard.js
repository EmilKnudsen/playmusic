import "./CategoriesCard.css";

export default function Categories({ title }) {
	return (
		<>
			<div className="categoriesCard__category">
				<p className="categoriesCard__title">{title}</p>
				<summary className="categoriesCard__show">
					<i className="fas fa-ellipsis-h"></i>
				</summary>
				<details>
					<summary>{title}</summary>
					<p>test</p>
				</details>
			</div>
		</>
	);
}
