import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

//style
import styles from './ModalElm.module.css';
import QuickViewProduct from './shared/QuickViewProduct';

//context
import { ModalContext } from '../context/ModalContextProvider';

const ModalElm = () => {
    const { showModal, setShowModal } = useContext(ModalContext);
    const handleRemoveModal = (event) => {
        if (event.target.dataset.modal === 'modal') {
            setShowModal(false)
        }
    }
    return createPortal(<div onClick={handleRemoveModal} className={`${styles.modalElm} ${showModal ? 'visible opacity-1' : 'invisible opacity-0'}`} data-modal='modal'><QuickViewProduct product={showModal} /></div>, document.getElementById('modal'))
};

export default ModalElm;