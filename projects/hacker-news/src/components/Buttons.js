import { useGlobalContext } from '../context';

function Buttons() {
    const { page, nbPages, handlePage } = useGlobalContext();
    return (
        <section>
            <button onClick={() => handlePage('prev')}>prev</button>
            <p>{page + 1} of {nbPages}</p>
            <button onClick={() => handlePage('next')}>next</button>
        </section>
    );
}

export default Buttons;