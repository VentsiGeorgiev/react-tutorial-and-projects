import { useGlobalContext } from '../../context/context';
import styles from './MobileMenu.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import navLinksData from '../../data/data';

function MobileMenu() {

    const { isMobileMenuOpen, closeMobileMenu } = useGlobalContext();

    return (
        <>
            {isMobileMenuOpen &&
                <div className={styles['mob-menu']}>
                    <ul>
                        {navLinksData.map((item) => {
                            const { page, pageUrl, links } = item;

                            return (
                                <>
                                    <li className={styles['page-link-li']} >
                                        <a className={styles['page-link']} href={pageUrl}>{page}</a>
                                    </li>

                                    <div className={styles['links-wrapper']}>
                                        {links.map((item) => {
                                            const { icon, label, url } = item;
                                            return (<li>
                                                <a className={styles['page-sub-link']} href={url}>{icon} {label}</a>
                                            </li>);
                                        })}
                                    </div>
                                </>
                            );


                        })}
                    </ul>
                    <button className={`${styles['bnt-close']} btn`} onClick={closeMobileMenu}><AiOutlineClose /></button>

                </div>}
        </>
    );
}

export default MobileMenu;