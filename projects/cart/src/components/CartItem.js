import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import { useGlobalContext } from '../context';

function CartItem({ item }) {
    const { id, title, price, amount, img } = item;
    const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
    return (
        <div className="product" >
            <img className='product-img' src={img} alt='phone' />
            <div className="product-info">
                <h3>{title}</h3>
                <p>${price}</p>
                <button
                    className='btn-remove'
                    onClick={() => removeItem(id)}
                >
                    remove
                </button>
            </div>
            <div className="quantity">
                <FaArrowAltCircleUp
                    onClick={() => increaseAmount(id)}
                    className='product-icon'
                />
                <p className='count'>{amount}</p>
                <FaArrowAltCircleDown
                    className='product-icon'
                    onClick={() => decreaseAmount(id)}
                />
            </div>
        </div>
    );
}

export default CartItem;