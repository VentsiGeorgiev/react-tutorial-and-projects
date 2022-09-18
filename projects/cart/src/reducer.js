function reducer(state, action) {
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload)
        };
    }
    if (action.type === 'INCREMENT_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem;
        });
        return { ...state, cart: tempCart };
    }
    if (action.type === 'DECREMENT_AMOUNT') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
                return cartItem;
            })
            .filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart };
    }

    if (action.type === 'GET_TOTAL') {
        let { total, amount } = state.cart.reduce((acc, curr) => {
            const { price, amount } = curr;
            const itemTotal = price * amount;
            acc.total += itemTotal;
            acc.amount += amount;
            return acc;
        }, { total: 0, amount: 0 });

        total = total.toFixed(2);

        return { ...state, total, amount };
    }

    if (action.type === 'CLEAR_CART') {
        return {
            ...state, cart: []
        };
    }
};

export default reducer;