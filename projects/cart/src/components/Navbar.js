import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <h2 className='logo'>useReducer</h2>
                </div>

                <div className='cart'>
                    <FaShoppingCart className='icon' />
                    <div className='items-count'>1</div>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;