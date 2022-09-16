import { data } from './data';
import reducer from './reducer';
const { useContext, useReducer } = require('react');
const { createContext } = require('react');


const AppContext = createContext();
const initialState = {
    cart: data,
    amount: 0,
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


    return <AppContext.Provider
        value={{
            ...state,
            removeItem,
            increaseAmount,
            decreaseAmount,
        }}
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

