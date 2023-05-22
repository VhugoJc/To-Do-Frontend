import React from 'react'
import {Modal as ModalAntd} from 'antd';
import useModal from '../../Hooks/useModal';

function Modal({children}) {
    const {isOpen, setIsOpen, title}  = useModal();
    const handleCancel = () => {
        setIsOpen(false);
    };
    
    return (
        <>
            <ModalAntd 
                title={title}
                open={isOpen}
                footer={null}
                onCancel={handleCancel}
            >
                {children}
            </ModalAntd>
        </>
    )
}

export default Modal