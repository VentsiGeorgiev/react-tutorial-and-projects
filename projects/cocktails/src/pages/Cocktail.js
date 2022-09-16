import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Cocktail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        async function getCocktail() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setLoading(false);
                    setCocktail(newCocktail);
                } else {
                    setLoading(false);
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getCocktail();
    }, [id]);




    if (loading) {
        return <h3 className='loading'>Loading...</h3>;
    }

    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>;
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail;

        return (
            <section className="cocktail-details">
                <img className="details-image" src={image} alt={name} />

                <div className="cocktail-info" >
                    <p><span>Name</span> {name}</p>
                    <p><span>Category</span> {category}</p>
                    <p><span>Glass</span> {info}</p>
                    <p><span>Instructions</span> {instructions}</p>
                    <p><span>Ingredients</span> {ingredients.join(', ')}</p>
                </div>
            </section>
        );
    }
}
export default Cocktail;