function Categories({ categories, filterMenu }) {
    return (
        <div>
            {categories.map((category, index) => (
                <button
                    className="btn-menu"
                    type="button"
                    key={index}
                    onClick={() => filterMenu(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;