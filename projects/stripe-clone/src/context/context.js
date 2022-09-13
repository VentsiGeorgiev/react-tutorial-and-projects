import { useState } from 'react';
import { useContext } from 'react';

const { createContext } = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isMobileMenuOpen,
                openMobileMenu,
                closeMobileMenu
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };