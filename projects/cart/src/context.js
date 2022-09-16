import { data } from './data';
import reducer from './reducer';
const { useContext, useReducer } = require('react');
const { createContext } = require('react');


const AppContext = createContext();
const initialState = {
    cart: data,
    isLoading: false,
    isError: false,
    message: '',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider
        value={{
            ...state,
        }}
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

