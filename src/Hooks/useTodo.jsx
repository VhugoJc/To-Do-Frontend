import { useContext } from "react";
import ToDoContext from "../Context/TodoProvider";

const useTodo = () => {
    return useContext(ToDoContext);;
}
 
export default useTodo;