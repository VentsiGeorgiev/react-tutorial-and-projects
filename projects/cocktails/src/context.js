import { createContext, useContext, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('here');
            try {
                const res = await fetch(`${url}${searchTerm}`);
                const result = await res.json();

                if (result.drinks) {
                    const newCocktails = result.drinks.map((cocktail) => {
                        const {
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strGlass,
                        } = cocktail;

                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass,
                        };
                    });
                    setCocktails(newCocktails);
                } else {
                    setCocktails([]);
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [searchTerm]);


    return (
        <AppContext.Provider value={{
            isLoading,
            cocktails,
            setSearchTerm,
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