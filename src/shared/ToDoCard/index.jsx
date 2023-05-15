import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import ToDoTable from "../../components/Tables/ToDoTable";
import Modal from "../../components/Modal";
import { useState } from "react";

const ToDoList = () => {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card>
                        <Col md={4} xs={24} className="card-filter-col">
                            <Button onClick={()=>setOpen(true)} className="card-filter-btn">
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
            {/* to-do Modal */}
            <Modal open={open} setOpen={setOpen} title="New To-Do Modal">
                Hola mundo
            </Modal>
        </div>
    );
}

export default ToDoList;