import { useGlobalContext } from '../context';

function Buttons() {
    const { page, nbPages, handlePage, isLoading } = useGlobalContext();
    return (
        <section className='buttons'>
            <button className='btn' disabled={isLoading} onClick={() => handlePage('prev')}>prev</button>
            <p>Page {page + 1} of {nbPages}</p>
            <button className='btn' disabled={isLoading} onClick={() => handlePage('next')}>next</button>
        </section>
    );
}

export default Buttons;