import { useGlobalContext } from '../../context/context';

function CloseButton() {
    const { closeSidebar } = useGlobalContext();
    return (
        <div className="close-btn" onClick={closeSidebar}>
            <div></div>
            <div></div>
        </div>
    );
}

export default CloseButton;