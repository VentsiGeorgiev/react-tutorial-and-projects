import { data } from './data';
import reducer from './reducer';
const { useContext, useReducer, useEffect } = require('react');
const { createContext } = require('react');


const AppContext = createContext();
const initialState = {
    cart: data,
    amount: 0,
    total: 0,
    isLoading: false,
    isError: false,
    message: '',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const increaseAmount = (id) => {
        dispatch({ type: 'INCREMENT_AMOUNT', payload: id });
    };

    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREMENT_AMOUNT', payload: id });
    };

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
    }, [state.cart]);

    const clearCart = (id) => {
        dispatch({ type: 'CLEAR_CART' });
    };


    return <AppContext.Provider
        value={{
            ...state,
            removeItem,
            increaseAmount,
            decreaseAmount,
            clearCart,
        }}
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

