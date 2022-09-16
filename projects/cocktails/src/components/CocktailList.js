import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';

function CocktailList() {
    const { isLoading, cocktails } = useGlobalContext();

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <section className='cockitals'>
            {cocktails.length > 1
                ? cocktails.map((cocktail) => (
                    <Cocktail key={cocktail.id} cocktail={cocktail} />
                ))
                : <h3>No Cocktails</h3>}
        </section>
    );
}

export default CocktailList;