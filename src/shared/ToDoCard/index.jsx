import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import ToDoTable from "../../components/Tables/ToDoTable";
import Modal from "../../components/Modal";
import { useState } from "react";
import ToDoForm from "../../components/Forms/ToDoForm";
import useTodo from "../../Hooks/useTodo";

const ToDoList = () => {
    const [open, setOpen] = useState(false);
    const {setToDoEdit}=useTodo();

    const setTodoData = () => {
        setToDoEdit({
            id: null,
            name: '',
            done: false,
            priority: "",
            dueDate: "",
        });
        setOpen(true);
    }

    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card>
                        <Col md={4} xs={24} className="card-filter-col">
                            <Button onClick={()=>setTodoData()} className="card-filter-btn">
                                <PlusOutlined/> New ToDo
                            </Button>
                        </Col>
                        <Col md={24}>
                            <ToDoTable setOpen={setOpen}/>
                        </Col>
                    </Card>
                </Col>
                <Col md={1} />
            </Row>
            {/* to-do Modal */}
            <Modal open={open} setOpen={setOpen} title="New ToDo">
                <ToDoForm/>
            </Modal>
        </div>
    );
}

export default ToDoList;