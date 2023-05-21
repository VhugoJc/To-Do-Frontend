import React, { createContext, useState } from 'react';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'done',
        priority: 'low',
    });

    const [todoData, setTodoData] = useState([
        {
            id: 1,
            name: 'Hugo',
            done: false,
            priority: "low",
            dueDate: "2023-05-21T15:29:27.524719",
        },
        {
            id: 2,
            name: 'Victor ',
            done: false,
            priority: "medium",
            dueDate: "2023-05-21T15:29:27.524719",
        }
    ])

    const [toDoEdit, setToDoEdit] = useState({
        key: 1,
        name: 'x',
        done: false,
        priority: "high",
        dueDate: "2023-05-21T15:29:27.524719",
    })

    return (
        <ToDoContext.Provider
            value={{
                filterData, setFilterData,
                todoData, setTodoData,
                toDoEdit, setToDoEdit,
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;