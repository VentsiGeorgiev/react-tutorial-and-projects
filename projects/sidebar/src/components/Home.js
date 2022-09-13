import HamburgerButton from './shared/HamburgerButton';
import { useGlobalContext } from '../context/context';

function Home() {

    const { openModal } = useGlobalContext();

    return (
        <main>
            <HamburgerButton />
            <button className='modal-btn' onClick={openModal}>Modal</button>
        </main>
    );
}

export default Home;