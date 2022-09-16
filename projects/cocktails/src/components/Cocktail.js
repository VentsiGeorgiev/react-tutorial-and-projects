import { Link } from 'react-router-dom';

function Cocktail({ cocktail }) {
    const { id, glass, image, info, name } = cocktail;
    return (
        <div className="cocktail">
            <Link to={`/cocktail/${id}`} >
                <img className="cocktail-image" src={image} alt={name} />
                <div className="cocktail-info">
                    <h3>{name}</h3>
                    <h4>{glass}</h4>
                    <p>{info}</p>
                </div>
            </Link>
        </div>

    );
}

export default Cocktail;