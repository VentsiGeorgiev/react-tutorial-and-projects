import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

function CartItem({ item }) {
    const { title, price, amount, img } = item;
    return (
        <div className="product" >
            <img className='product-img' src={img} alt='phone' />
            <div className="product-info">
                <h3>{title}</h3>
                <p>${price}</p>
                <button className='btn-remove'>remove</button>
            </div>
            <div className="quantity">
                <FaArrowAltCircleUp className='product-icon' />
                <p className='count'>{amount}</p>
                <FaArrowAltCircleDown className='product-icon' />
            </div>
        </div>
    );
}

export default CartItem;