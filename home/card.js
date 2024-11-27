import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Container, Row, Col,  } from 'react-bootstrap';


const StatisticCard = ({ icon, title, description, count }) => (
    <Card className="text-center shadow-lg">
        <Card.Body>
            <div className="text-blue-500 mb-4">
                <i className={`fas ${icon} fa-3x`}></i>
            </div>
            <Card.Title className="text-xl font-semibold text-blue-900">{title}</Card.Title>
            <Card.Text className="text-gray-500 mt-2">{description}</Card.Text>
            <Card.Text className="text-2xl font-bold text-blue-900 mt-2">{count}</Card.Text>
        </Card.Body>
    </Card>
);

const App = () => {
    const stats = [
        { icon: "fa-school", title: "Schools", description: "Onboarded School", count: "773656" },
        { icon: "fa-user-friends", title: "Volunteers", description: "Volunteers Registered", count: "511411" },
        { icon: "fa-child", title: "Children", description: "Children Impacted", count: "15460843" },
        { icon: "fa-hand-holding-heart", title: "CSR/NGO", description: "CSR/NGO Registered", count: "2811" },
    ];

    return (
        <Container className="my-4">
            <div className="text-center mb-4">
                <h2 className="display-4 text-blue-900">A School Volunteer Programme</h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
            </div>
            <Row className="justify-content-center">
                {stats.map((stat, index) => (
                    <Col xs={12} sm={6} md={3} key={index} className="mb-4">
                        <StatisticCard {...stat} />
                    </Col>
                ))}
            </Row>
           
        </Container>
    );
};



export default App;
