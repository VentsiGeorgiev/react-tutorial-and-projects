import { useGlobalContext } from '../context';

function News() {
    const { message } = useGlobalContext();
    return (

        <div>
            <h3>{message}</h3>
        </div>
    );
}

export default News;