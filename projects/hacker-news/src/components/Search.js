import { useGlobalContext } from '../context';

function Search() {
    const { query, handleSearch } = useGlobalContext();
    return (
        <section className='search'>
            <form className='form'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className='form-input'
                    type="search"
                    name="search"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </form>
        </section>
    );
}

export default Search;