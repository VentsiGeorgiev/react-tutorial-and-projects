import { useGlobalContext } from '../../context/context';

function MobileMenu() {

    const { isMobileMenuOpen, closeMobileMenu } = useGlobalContext();

    console.log(isMobileMenuOpen);
    return (
        <div>
            {isMobileMenuOpen ? <p>True</p> : <p>False</p>}
            <button onClick={closeMobileMenu}>Close</button>
        </div>
    );
}

export default MobileMenu;