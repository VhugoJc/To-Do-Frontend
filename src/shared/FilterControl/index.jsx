import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './FilterControl.scss';

const FilterControl = () => {
    return (
        <div>
            <Row>
                <Col md={1} />
                <Col xs={24} md={22}>
                    <Card className="card-filter">
                        <Form>
                            <Row gutter={8}>
                                <Col className="card-filter-col" md={12} xs={24}>
                                    <p className="card-filter-label">Name</p>
                                    <Input prefix={<SearchOutlined />} placeholder="What are you looking for?" />
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <p className="card-filter-label">Priority</p>
                                    <Select
                                        className="card-filter-select"
                                        defaultValue={'Low'}
                                        options={[{ value: 'Low', label: 'Low' }, { value: 'High', label: 'High' }, { value: 'All', label: 'All' }]}
                                    />
                                </Col>
                                <Col md={4} xs={12} className="card-filter-col">
                                    <p className="card-filter-label">State</p>
                                    <Select
                                        className="card-filter-select"
                                        defaultValue={'Done'}
                                        options={[{ value: 'Done', label: 'Done' }, { value: 'Undone', label: 'Undone' },{value:'All',label:'All'}]}
                                    />
                                </Col>
                                <Col md={4} xs={24} className="card-filter-col">
                                    <p className="card-filter-hidden">Search</p>
                                    <Button className="card-filter-btn">Search</Button>
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