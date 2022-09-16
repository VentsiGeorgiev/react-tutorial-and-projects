import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Cocktails</Link>
            </div>
            <nav>
                <menu className='menu-nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </menu>
            </nav>
        </header>
    );
}

export default Header;