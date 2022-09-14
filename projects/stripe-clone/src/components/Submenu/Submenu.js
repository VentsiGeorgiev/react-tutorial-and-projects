import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';

function Submenu() {
    const { isSubmenuOpen } = useGlobalContext;


    return (
        <>
            {isSubmenuOpen ? <h3>True</h3> : <h3>False</h3>}
        </>
    );
}

export default Submenu;