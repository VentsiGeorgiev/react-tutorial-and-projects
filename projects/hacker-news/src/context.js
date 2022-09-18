import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
    SET_LOADING,
} from './actions';

const AppContext = createContext();

const initialState = {
    isLoading: true,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = () => {
        dispatch({ type: SET_LOADING });

    };

    useEffect(() => {
        fetchData();
    }, []);

    return <AppContext.Provider
        value={{
            ...state,
        }}
    >
        {children}
    </AppContext.Provider>;

};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext };
export { AppContext, AppProvider };