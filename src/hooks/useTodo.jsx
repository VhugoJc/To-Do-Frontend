import { useContext } from "react";
import ToDoContext from "../context/TodoProvider";

const useToDo = () => {
    return useContext(ToDoContext);
}

export default useToDo;