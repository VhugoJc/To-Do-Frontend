//layout
import Layout from "../Layout";
// home components
import FilterControl from "../shared/FilterControl";
import ToDoList from "../shared/ToDoCard";
import MetricsCard from "../shared/MetricsCard";


const Home = () => {

    return (
        <Layout>
            <FilterControl />
            <ToDoList />
            <MetricsCard />
        </Layout>
    );
}

export default Home;