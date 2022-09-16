import { useGlobalContext } from '../context';
import CartItem from './CartItem';

function Cart() {
    const { cart, total, clearCart } = useGlobalContext();
    return (
        <>
            <section className="cart-section">
                <h2 className="cart-title">Your Cart</h2>
                {cart.length > 0 ? <><div className="products" >
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>

                    <div className='cart-total'>
                        <p>Total: ${total}</p>
                    </div>

                    <div className='btn-center'>
                        <button
                            className='btn-remove btn-clear'
                            onClick={() => clearCart()}
                        >
                            Clear card
                        </button>
                    </div></>
                    : <h3 className='cart-subtitle'>Your Cart Is Empty</h3>}


            </section>

        </>
    );
}

export default Cart;