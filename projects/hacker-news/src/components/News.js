import { useGlobalContext } from '../context';

function News() {
    const { isLoading, news } = useGlobalContext();

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div>
            {news.map((n) => {
                return <h4 key={n.objectID}>{n.title}</h4>;
            })}
        </div>
    );
}

export default News;