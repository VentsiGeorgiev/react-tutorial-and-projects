import { useGlobalContext } from '../context';
import Article from './Article';

function News() {
    const { isLoading, news } = useGlobalContext();
    console.log('news');
    console.log(news);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    return (
        <sections className="news">
            {news.map((article) => (
                <Article key={article.objectID} article={article} />
            ))}
        </sections>
    );
}

export default News;