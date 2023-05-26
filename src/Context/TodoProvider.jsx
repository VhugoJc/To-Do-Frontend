import React, { createContext, useEffect, useState } from 'react';
import { message } from 'antd';
import useModal from '../Hooks/useModal';
import { deleteToDoApi, getToDoApi, 
    postDoneTodoApi, 
    postToDoApi, putUnoneTodoApi, updateToDoApi 
} from '../Api/ToDoApi';
import { getMetricsApi } from '../Api/MetricsApi';
import useFilter from '../Hooks/useFilter';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    //use state hooks
    const [refresh, setRefresh] = useState(true);
    const [todoData, setTodoData] = useState([]);
    const [toDoEdit, setToDoEdit] = useState({
        id: null,
        name: '',
        done: false,
        priority: "",
        dueDate: "",
    })

    const [metrics, setMetrics] = useState({
        high: 0,
        low: 0,
        medium: 0,
        total: 0
    });

    //custom hooks
    const { setIsOpen } = useModal();
    const {filterData,sortData,
        pagination, setpagination
    } = useFilter();

    // private function to hanle errors
    const handleError = (error)=> {
        message.error("Error")
        console.log(error);
    }

    //public funtions to use API
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
                todoData, setTodoData,
                toDoEdit, setToDoEdit,
                postToDo, deleteToDo,
                updateTodo, doneTodo,
                undoneTodo,
                metrics, setRefresh,
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;