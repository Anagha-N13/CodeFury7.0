import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// Sample data for educational resources
const resources = [
    {
        id: 1,
        title: 'Basic First Aid',
        description: 'Learn the essentials of first aid, including how to handle common injuries and emergencies.',
        link: '/resources/first-aid'
    },
    {
        id: 2,
        title: 'Emergency Preparedness Plan',
        description: 'Understand how to create a comprehensive emergency preparedness plan for your family.',
        link: '/resources/preparedness-plan'
    },
    {
        id: 3,
        title: 'Disaster Response Techniques',
        description: 'Explore techniques and strategies for effective disaster response and management.',
        link: '/resources/response-techniques'
    },
    // Add more resources as needed
];

const EducationalResources = () => {
    return (
        <Container>
            <h1 className="my-4">Educational Resources</h1>
            <Row>
                {resources.map(resource => (
                    <Col md={4} key={resource.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{resource.title}</Card.Title>
                                <Card.Text>{resource.description}</Card.Text>
                                <Button variant="primary" href={resource.link}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default EducationalResources;
