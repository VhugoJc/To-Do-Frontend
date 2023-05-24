import { useContext } from "react";
import ToDoContext from "../Context/TodoProvider";

const useFilter = () => {
    return useContext(ToDoContext);;
}
 
export default useFilter;