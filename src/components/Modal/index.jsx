import React from 'react'
import {Modal as ModalAntd} from 'antd';

function Modal({open, setOpen,children, title="New Modal"}) {

    const handleCancel = () => {
        setOpen(false);
    };
    
    return (
        <>
            <ModalAntd
                title={title}
                open={open}
                footer={null}
                onCancel={handleCancel}
            >
                {children}
            </ModalAntd>
        </>
    )
}

export default Modal