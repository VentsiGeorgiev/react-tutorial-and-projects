import { useGlobalContext } from '../context';
import CartItem from './CartItem';

function Cart() {
    const { cart } = useGlobalContext();
    return (
        <>
            <section className="cart-section">
                <h2 className="cart-title">Your Cart</h2>

                <div className="products" >
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>
            </section>
        </>
    );
}

export default Cart;