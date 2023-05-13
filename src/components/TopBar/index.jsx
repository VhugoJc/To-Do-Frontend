import { Col, Row } from 'antd';
import './TopBar.scss';

const Banner = () => {
    return (
        <div className="banner">
            <Row>
                <Col md={1} />
                <Col md={22}>
                    <p className='banner-title'>
                        My<strong>ToDo</strong>App
                    </p>
                </Col>
                <Col md={1} />
            </Row>
        </div>
    );
}

export default Banner;