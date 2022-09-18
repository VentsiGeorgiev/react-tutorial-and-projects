import { useGlobalContext } from '../context';

function Article({ article }) {
    const { removeArticle } = useGlobalContext();
    return (
        <div className='article'>
            <h4>{article.title}</h4>
            <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
            <button className='remove' onClick={() => removeArticle(article.objectID)}>remove</button>
        </div>
    );
}

export default Article;