import { useContext } from "react";
import FilterContext from "../Context/FilterProvider";

const useFilter = () => {
    return useContext(FilterContext);;
}
 
export default useFilter;