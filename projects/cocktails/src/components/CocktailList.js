import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';

function CocktailList() {
    const { cocktails } = useGlobalContext();
    return (
        <section className='cockitals'>
            {cocktails.map((cocktail) => (
                <Cocktail key={cocktail.id} cocktail={cocktail} />
            ))}
        </section>
    );
}

export default CocktailList;