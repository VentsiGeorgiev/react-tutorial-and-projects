import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    return <AppContext.Provider
        value={{ message: 'hello from context' }}
    >
        {children}
    </AppContext.Provider>;

};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext };
export { AppContext, AppProvider };