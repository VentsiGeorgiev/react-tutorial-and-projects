import navLinksData from '../../data/data';
import styles from './Navbar.module.css';
import { FiMenu } from 'react-icons/fi';
import { useGlobalContext } from '../../context/context';

function Navbar() {
    const { openMobileMenu, openSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        console.log('here');
        openSubmenu();
    };

    return (
        <header className={`${styles.header} container`}>
            <div>
                <h1 className={styles.logo}>stripe 2.0</h1>
            </div>

            <div onClick={openMobileMenu} className={styles['mobile-icon-box']}>
                <FiMenu className={styles['mobile-icon']} />
            </div>



            <nav className={styles.navigation}>
                <ul>
                    {navLinksData.map((data, index) => (
                        <li key={index}>
                            <a
                                onMouseOver={displaySubmenu}
                                className={styles['nav-links']}
                                href={data.pageUrl}
                            >
                                {data.page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles['sign-in']}>
                <button className={`btn ${styles['btn-sign-in']}`}>Sign in</button>
            </div>
        </header >
    );
}

export default Navbar;