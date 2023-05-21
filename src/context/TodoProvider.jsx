import React, { createContext,useState } from 'react';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'done',
        priority: 'low',
    });
    
    return (
        <ToDoContext.Provider
            value={{
                filterData, setFilterData,
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;