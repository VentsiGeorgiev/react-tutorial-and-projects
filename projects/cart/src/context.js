const { useContext } = require('react');
const { createContext } = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider
        value='my-app'
    >
        {children}
    </AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

