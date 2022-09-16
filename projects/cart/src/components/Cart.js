import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

function Cart() {
    return (
        <section className="cart-section">
            <h2 className="cart-title">Your Cart</h2>

            <div className="products" >
                <div className="product" >
                    <img className='product-img' src='./images/galaxy-a52.jpg' alt='phone' />
                    <div className="product-info">
                        <h3>Samsung Galaxy A 52</h3>
                        <p>$455.75</p>
                        <button className='btn-remove'>remove</button>
                    </div>
                    <div className="quantity">
                        <FaArrowAltCircleUp className='product-icon' />
                        <p className='count'>0</p>
                        <FaArrowAltCircleDown className='product-icon' />
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Cart;