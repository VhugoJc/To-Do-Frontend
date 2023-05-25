import React, { createContext, useEffect, useState } from 'react';
import { message } from 'antd';
import useModal from '../Hooks/useModal';
import { deleteToDoApi, getToDoApi, 
    postDoneTodoApi, 
    postToDoApi, putUnoneTodoApi, updateToDoApi 
} from '../Api/ToDoApi';
import { getMetricsApi } from '../Api/MetricsApi';

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

    const handleError = (error)=> {
        message.error("Error")
        console.log(error);
    }
    const getTodos = () => {
        getToDoApi(filterData, sortData, pagination.currentPage).then(result => {
            setTodoData(result.toDos);
            setpagination({
                totalPages: result.totalPages,
                currentPage: result.currentPage
            });
        }).catch(error => handleError(error));
    }

    const postToDo = (value) => {
        postToDoApi(value).then((response) => {
            message.success("To Do Created successfully");
            setRefresh(true);
            setIsOpen(false);
        }).catch((error) => handleError(error))
    }

    const deleteToDo = async (id) => {
        deleteToDoApi(id).then(() => {
            message.success("To Do Deleted successfully");
            setRefresh(true);
        }).catch(error => handleError(error));
    }

    const updateTodo =  (id, body) => {
        updateToDoApi(id,body).then(response=>{
            message.success('To Do updated');
            setRefresh(true);
            setIsOpen(false);
        }).catch(error=>handleError(error))
    }

    const doneTodo =  (id) => {
        postDoneTodoApi(id).then(()=>{
            getMetrics();
        }).catch(error=>handleError(error));
    }
    const undoneTodo =  (id) => {
        putUnoneTodoApi(id).then(()=>{
            getMetrics();
        }).catch(error=>handleError(error));
    }

    const getMetrics =  () => {
        getMetricsApi().then(response=>{
            setMetrics(response);
        }).catch(error=>{
            console.log(error);
        })
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