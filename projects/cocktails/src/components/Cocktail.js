function Cocktail({ cocktail }) {
    const { id, glass, image, info, name } = cocktail;
    return (
        <div className="cocktail">
            <img className="cocktail-image" src={image} alt={name} />
            <div className="cocktail-info">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
            </div>
        </div>

    );
}

export default Cocktail;