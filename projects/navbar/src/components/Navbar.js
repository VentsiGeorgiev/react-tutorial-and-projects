import { useState } from 'react';

function Navbar() {

    const [show, setShow] = useState(false);

    return (
        <header>
            <section className="header">
                <section className="header-wrapper">
                    {/* logo */}
                    <div>
                        <h1 className='logo'>VG</h1>
                    </div>
                    {/* header - links */}
                    <nav className="header-links">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/Contacts">Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    {/* hamburger - icon */}
                    <div
                        onClick={() => setShow((prevState) => !prevState)}
                        className={`${!show ? 'icon' : 'icon-close'}`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                {/* mobile - nav - links */}
            </section>
            <nav className={`${show ? 'mob-nav-links' : 'hide'}`}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/Contacts">Contacts</a>
                    </li>
                </ul>
            </nav>





            {/* navigation links - home,about etc. */}

            {/* socia; */}
        </header>
    );
}

export default Navbar;