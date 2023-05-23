import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './FilterControl.scss';
import useFilter from "../../Hooks/useFilter";
import { useEffect } from "react";

const FilterControl = () => {
    const {filterData, setFilterData} = useFilter();
    const [form] = Form.useForm();
    
    useEffect(()=>{
        form.setFieldsValue(filterData);
        // eslint-disable-next-line
    },[]);

    const onFinish = (value) => {
        setFilterData(value);
    }

    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card className="card-filter">
                        <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        >
                            <Row gutter={8}>
                                <Col className="card-filter-col" md={12} xs={24}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                    >
                                        <Input prefix={<SearchOutlined />} placeholder="What are you looking for?" />
                                    </Form.Item>
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <Form.Item
                                        label="Priority"
                                        name="priority"
                                    >
                                    <Select
                                        className="card-filter-select"
                                        options={[{ value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }, { value: 'all', label: 'All' }]}
                                    />
                                    </Form.Item>
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <Form.Item
                                        label="Status"
                                        name="status"
                                    >
                                        <Select
                                            className="card-filter-select"
                                            options={[{ value: 'done', label: 'Done' }, { value: 'undone', label: 'Undone' },{value:'all',label:'All'}]}
                                            />
                                        </Form.Item>
                                </Col>
                                <Col md={4} xs={24} className="card-filter-col">
                                    <Form.Item
                                        label=" "
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