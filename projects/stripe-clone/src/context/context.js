import { useState } from 'react';
import { useContext } from 'react';

const { createContext } = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isMobileMenuOpen,
                openMobileMenu,
                closeMobileMenu,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
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