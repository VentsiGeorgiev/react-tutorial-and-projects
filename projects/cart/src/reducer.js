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
                return { ...cartItem, amount: cartItem.amount++ };
            }
            return cartItem;
        });
        return { ...state, cart: tempCart };
    }
    if (action.type === 'DECREMENT_AMOUNT') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount-- };
                }
                return cartItem;
            })
            .filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart };
    }
};

export default reducer;