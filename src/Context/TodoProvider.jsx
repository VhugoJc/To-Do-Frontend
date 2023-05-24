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
    const [pagination, setpagination] = useState({
        totalPages: 1,
        currentPage: 1
    })

    const [toDoEdit, setToDoEdit] = useState({
        id: null,
        name: '',
        done: false,
        priority: "",
        dueDate: "",
    })
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'all',
        priority: 'all'

    });
    const [sortData, setSortData] = useState({
        sortByDate: null,
        sortByPriority: null
    });

    const [metrics, setMetrics] = useState({
        high: 0,
        low: 0,
        medium: 0,
        total: 0
    });

    // Functions:
    const getTodos = async () => {
        const {
            name, priority, status
        } = filterData;
        const {
            sortByDate, sortByPriority
        } = sortData;

        let params = "?";
        if (name !== "") {
            params += "name=" + name + "&";
        }
        if (priority !== 'all') {
            params += "priority=" + priority + "&";
        }
        if (status !== "all") {
            params += "status=" + status + "&";
        }
        if (sortByDate !== null) {
            params += "sortByDate=" + sortByDate + "&";
        }
        if (sortByPriority !== null) {
            params += "sortByPriority=" + sortByPriority + "&";
        }
        params += "page=" + pagination.currentPage;

        try {
            const response = await axios.get(BASEURL + '/todos' + params);
            if (response?.data) {
                setTodoData(response.data.toDos);
                setpagination({
                    totalPages: response.data.totalPages,
                    currentPage: response.data.currentPage
                }
                )
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
            const response = await axios.put(BASEURL + '/todos/' + id, body);
            if (response?.data) {
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
            // message.success('To Do marked as done');
            getMetrics();
        } catch (error) {
            console.log(error);
            message.error('Error');
        }
    }
    const undoneTodo = async (id) => {
        try {
            await axios.put(BASEURL + '/todos/' + id + '/undone');
            // message.success('To Do marked as undone');
            getMetrics();
        } catch (error) {
            console.log(error);
            message.error('Error');
        }
    }

    const getMetrics = async () => {
        try {
            const response = await axios.get(BASEURL + '/metrics');
            if (response?.data) {
                const low = response.data.lowPriorityMinutes;
                const medium = response.data.mediumPriorityMinutes;
                const high = response.data.highPriorityMinutes;
                const total = response.data.totalMinutes;

                setMetrics({
                    low,
                    medium,
                    high,
                    total
                })
            }
        } catch (error) {
            message.error('Error');
        }
    }
    useEffect(() => {
        getTodos();
        setRefresh(false);
        getMetrics();
        // eslint-disable-next-line
    }, [filterData, refresh]);

    return (
        <ToDoContext.Provider
            value={{
                filterData, setFilterData,
                todoData, setTodoData,
                toDoEdit, setToDoEdit,
                postToDo, deleteToDo,
                updateTodo, doneTodo,
                undoneTodo,
                metrics, setRefresh,
                pagination, setpagination,
                sortData, setSortData
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;