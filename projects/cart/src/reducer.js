function reducer(state, action) {
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload)
        };
    }
};

export default reducer;