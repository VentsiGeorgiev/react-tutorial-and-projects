import { useGlobalContext } from '../context';

function Search() {
    const { query, handleSearch } = useGlobalContext();
    return (
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
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