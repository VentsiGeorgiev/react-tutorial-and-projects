import { useGlobalContext } from '../context/context';
import CloseButton from './shared/CloseButton';

function Sidebar() {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            < section className='sidebar-wrapper' >
                <div className="sidebar-header">
                    <h1 className='logo'>Logo</h1>
                    <CloseButton onClick={closeSidebar} />
                </div>
                <nav className='sidebar-nav'>
                    <ul>
                        <li>
                            <a className='sidebar-nav-link' href="/">Home</a>
                        </li>
                        <li>
                            <a className='sidebar-nav-link' href="/">About</a>
                        </li>
                        <li>
                            <a className='sidebar-nav-link' href="/">Products</a>
                        </li>
                        <li>
                            <a className='sidebar-nav-link' href="/">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </section >

        </aside >
    );
}

export default Sidebar;