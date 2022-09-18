import { useGlobalContext } from '../context';

function News() {
    const { isLoading } = useGlobalContext();

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div>
            <h1>News</h1>
        </div>
    );
}

export default News;