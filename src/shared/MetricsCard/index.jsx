import { Card, Col, Row, Statistic } from "antd";
import "./MetricsCard.scss";

import MetricsByPriority from "./MetrixByPriority";
import useTodo from "../../Hooks/useTodo";

const MetricsCard = () => {
    const {metrics} = useTodo();
    return (
        <Row className="metrics">
            <Col md={1} />
            <Col xs={24} md={22}>
                <Row gutter={8}>
                    <Col md={8} xs={24}>
                        <Card className="metrics-card">
                            <Statistic title="Average time to finish tasks" value={metrics.total+" minutes"} />
                        </Card>
                    </Col>
                    <Col md={16} xs={24}>
                        <Card className="metrics-card">
                            <p>Average time to finish tasks by priority:</p>
                            <Row>
                            <MetricsByPriority title={"Low"} value={metrics.low+" minutes"}/>
                            <MetricsByPriority title={"Medium"} value={metrics.medium+" minutes"}/>
                            <MetricsByPriority title={"High"} value={metrics.high+" minutes"}/>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default MetricsCard;

