import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './FilterControl.scss';
import useToDo from "../../hooks/useTodo";
import { useEffect } from "react";

const FilterControl = () => {
    const { filterData, setFilterData } = useToDo();
    const [form] = Form.useForm();


    const onClick = (value) => {
        setFilterData(value);
        
    }

    useEffect(()=>{
        console.log(filterData);
        form.setFieldsValue(filterData);
    },[])
    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card className="card-filter">
                        <Form
                            form={form}
                            onFinish={onClick}
                            layout="vertical"
                        >
                            <Row gutter={8}>
                                <Col className="card-filter-col" md={12} xs={24}>
                                    <Form.Item
                                        name={"name"}
                                        label={"Name"}
                                    >
                                        <Input prefix={<SearchOutlined />} placeholder="What are you looking for?" />
                                    </Form.Item>
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <Form.Item
                                        name={"priority"}
                                        label={"Priority"}
                                    >
                                        <Select
                                            className="card-filter-select"
                                            options={[{ value: 'Low', label: 'Low' }, { value: 'High', label: 'High' }, { value: 'all', label: 'All' }]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <Form.Item
                                    name={"status"}
                                    label={"Status"}
                                    >
                                    <Select
                                        className="card-filter-select"
                                        options={[{ value: 'Done', label: 'Done' }, { value: 'Undone', label: 'Undone' }, { value: 'all', label: 'All' }]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={4} xs={24} className="card-filter-col">
                                    <Form.Item
                                        label="  "
                                    >
                                        <Button htmlType="submit" className="card-filter-btn">Search</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                <Col md={1} />
            </Row>
        </div>
    );
}

export default FilterControl;