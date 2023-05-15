import { Col, Statistic } from "antd";
import "./MetricsCard.scss";

const MetricsByPriority = ({title, value}) => {
    return (
        <Col md={8} xs={24}>
            <div className={"metrics-card-byPriority-"+title}>
                <Statistic title={title} value={value}/>
            </div>
        </Col>
    );
}

export default MetricsByPriority;