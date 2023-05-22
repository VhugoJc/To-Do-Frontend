import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {BASEURL} from '../config/url';
import { message } from 'antd';


const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [refresh,setRefresh] = useState(true);
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
    const postToDo = async(value) => {
        try {
            const response = await axios.post(BASEURL + '/todos',value);
            console.log(response);
            if(response?.data){
                message.success("To Do Created successfully");
                setRefresh(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTodos();
        setRefresh(false);
    },[filterData,refresh]);

    
    const [todoData, setTodoData] = useState([]);

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
                postToDo
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;