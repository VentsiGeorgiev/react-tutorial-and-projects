import { useState } from 'react';
import Categories from './components/Categories';
import FoodMenu from './components/FoodMenu';
import { data } from './data';

const allCategory = ['all', ...new Set(data.map((x) => x.category))];

function App() {

    const [foodItems, setFoodItems] = useState(data);
    const [categories, setCategories] = useState(allCategory);

    const filterMenu = (searchCategory) => {
        console.log('searchCategory - here');
        console.log(searchCategory);
        if (searchCategory === 'all') {
            setFoodItems(data);
            return;
        }
        const newItems = data.filter((x) => x.category === searchCategory);
        setFoodItems(newItems);

    };

    return (
        <main>
            <section className="menu">

                <h2 className="title">Our Menu</h2>
                <div className="divider"></div>
                <section>
                    <Categories categories={categories} filterMenu={filterMenu} />
                    <FoodMenu foodItems={foodItems} />
                </section>
            </section>
        </main>
    );
}

export default App;
