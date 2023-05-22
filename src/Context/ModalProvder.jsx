import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("sssss");  
    return (
        <ModalContext.Provider
            value={{ 
                isOpen, setIsOpen,
                title, setTitle 
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
export default ModalContext;