import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASEURL } from '../config/url';
import { message } from 'antd';
import useModal from '../Hooks/useModal';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const { setIsOpen } = useModal();
    const [refresh, setRefresh] = useState(true);
    const [todoData, setTodoData] = useState([]);
    const [toDoEdit, setToDoEdit] = useState({
        id: null,
        name: '',
        done: false,
        priority: "",
        dueDate: "",
    })
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'done',
        priority: 'low',
    });
    // Functions:
    const getTodos = async () => {
        try {
            const response = await axios.get(BASEURL + '/todos');
            if (response?.data) {
                setTodoData(response.data.toDos);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const postToDo = async (value) => {
        try {
            const response = await axios.post(BASEURL + '/todos', value);
            if (response?.data) {
                message.success("To Do Created successfully");
                setRefresh(true);
                setIsOpen(false);
            }
        } catch (error) {
            console.log(error);
            message.error("Error");
        }
    }

    const deleteToDo = async (id) => {
        try {
            await axios.delete(BASEURL + '/todo/' + id);
            message.success("To Do Deleted successfully");
            setRefresh(true);
            setIsOpen(false);
        } catch (error) {
            console.log(error);
            message.error("Error");
        }
    }

    const updateTodo = async (id, body) => {
        try {
            const response = await axios.put(BASEURL + '/todos/'+id, body);
            if(response?.data){
                message.success('To Do updated');
                setRefresh(true);
                setIsOpen(false);
            }
        } catch (error) {
            console.log(error);
            message.error('Error');
        }
    }

    const doneTodo = async (id) => {
        try {
            await axios.post(BASEURL + '/todos/' + id + '/done');
            message.success('To Do marked as done');
        } catch (error) {
            console.log(error);
            message.error('Error');
        }
    }
    const undoneTodo = async (id) => {
        try {
            await axios.put(BASEURL + '/todos/' + id + '/undone');
            message.success('To Do marked as undone');
        } catch (error) {
            console.log(error);
            message.error('Error');
        }
    }
    useEffect(() => {
        getTodos();
        setRefresh(false);
    }, [filterData, refresh]);

    return (
        <ToDoContext.Provider
            value={{
                filterData, setFilterData,
                todoData, setTodoData,
                toDoEdit, setToDoEdit,
                postToDo, deleteToDo,
                updateTodo, doneTodo,
                undoneTodo
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;