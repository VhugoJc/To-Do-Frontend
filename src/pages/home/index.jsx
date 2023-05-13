import FilterControl from "../../components/FilterControl";
import ToDoList from "../../components/ToDoCard";
import TopBar from "../../components/TopBar";

const Home = () => {
    return (
        <div>
            <TopBar />
            <FilterControl/>
            <ToDoList/>
        </div>
    );
}

export default Home;