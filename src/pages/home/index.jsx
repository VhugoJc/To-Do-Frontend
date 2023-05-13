import Layout from "../../Layout";
import FilterControl from "../../shared/FilterControl";
import ToDoList from "../../shared/ToDoCard";

const Home = () => {
    return (
        <Layout>
            <FilterControl/>
            <ToDoList/>
        </Layout>
    );
}

export default Home;