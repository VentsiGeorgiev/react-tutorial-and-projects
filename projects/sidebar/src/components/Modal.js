import { useGlobalContext } from '../context/context';
function Modal() {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div className={`${isModalOpen ? 'modal show-modal' : 'modal'}`}>
            <h3 className="modal-msg">Welcome Message</h3>
            <button className="btn-modal" onClick={closeModal}>x</button>
        </div>
    );
}

export default Modal;