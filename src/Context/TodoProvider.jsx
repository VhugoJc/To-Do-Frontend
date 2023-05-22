import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {BASEURL} from '../config/url';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'done',
        priority: 'low',
    });

    const getTodos = async() => {
        try {
            const response = await axios.get(BASEURL + '/todos');
            console.log(response);
            if(response?.data){
                setTodoData(response.data.toDos);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getTodos();
    },[filterData]);

    
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
        id: null,
        name: '',
        done: false,
        priority: "",
        dueDate: "",
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