import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

function Search() {

    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="form-input"
                    type="search"
                    name="name"
                    id="name"
                    ref={searchValue}
                    onChange={searchCocktail}
                />
            </form>
        </div>
    );
}

export default Search;