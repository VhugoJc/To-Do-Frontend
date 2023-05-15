import { Card, Col, Row, Statistic } from "antd";
import "./MetricsCard.scss";

import MetricsByPriority from "./MetrixByPriority";

const MetricsCard = () => {
    return (
        <Row className="metrics">
            <Col md={1} />
            <Col xs={24} md={22}>
                <Row gutter={8}>
                    <Col md={8} xs={24}>
                        <Card className="metrics-card">
                            <Statistic title="Average time to finish tasks" value="22:15 minutes" />
                        </Card>
                    </Col>
                    <Col md={16} xs={24}>
                        <Card className="metrics-card">
                            <p>Average time to finish tasks by priority:</p>
                            <Row>
                            <MetricsByPriority title={"Low"} value={"22:15 minutes"}/>
                            <MetricsByPriority title={"Medium"} value={"22:15 minutes"}/>
                            <MetricsByPriority title={"High"} value={"22:15 minutes"}/>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default MetricsCard;

