import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import ToDoTable from "../../components/Tables/ToDoTable";

const ToDoList = () => {
    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card>
                        <Col md={4} xs={24} className="card-filter-col">
                            <Button className="card-filter-btn">
                                <PlusOutlined/> New ToDo
                            </Button>
                        </Col>
                        <Col md={24}>
                            <ToDoTable/>
                        </Col>
                    </Card>
                </Col>
                <Col md={1} />
            </Row>
        </div>
    );
}

export default ToDoList;