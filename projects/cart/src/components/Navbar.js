import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../context';

function Navbar() {
    const { amount } = useGlobalContext();
    return (
        <header>
            <nav>
                <div>
                    <h2 className='logo'>useReducer</h2>
                </div>

                <div className='cart'>
                    <FaShoppingCart className='icon' />
                    <div className='items-count'>{amount}</div>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;