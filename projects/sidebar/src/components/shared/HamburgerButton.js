import { useGlobalContext } from '../../context/context';

function HambButton() {
    const { openSidebar } = useGlobalContext();
    return (
        <div className="hamburger-button" onClick={openSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}

export default HambButton;