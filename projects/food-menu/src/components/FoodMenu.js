function FoodMenu({ foodItems }) {
    return (
        <section className="food-menu">
            {foodItems.map((item, index) => {
                const { name, price, image, description } = item;
                return (
                    <article key={index} className="food-card">
                        <header>
                            <img className="image" src={image} alt={name} />
                        </header>
                        <div className="food-info">
                            <h3 className="food-name">{name}</h3>
                            <h3 className="food-price">${price}</h3>
                            <p className="food-description">{description}</p>
                        </div>

                    </article>
                );
            })}
        </section>
    );
}

export default FoodMenu;