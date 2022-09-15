import FoodMenu from './components/FoodMenu';
import { data } from './data';

function App() {
    return (
        <main>
            <section className="menu">

                <h2 className="title">Our Menu</h2>
                <div className="divider"></div>
                <section>
                    <h3>Categories</h3>
                    <FoodMenu foodItems={data} />
                </section>
            </section>
        </main>
    );
}

export default App;
