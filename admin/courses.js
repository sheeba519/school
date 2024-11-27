import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const courses = [
  { id: 1, title: "Bilogy Science", description: "Learn the basics of bilogy science.", HOD: "Devasir" },
  { id: 2, title: "Computer Science", description: "Deep dive into computer", HOD: "sanu sir" },
  { id: 3, title: "Commerce", description: "State management with commerce", HOD: "Lvanya miss" },
];

const CourseList = () => {
  return (
    <Container>
      <h1 className="my-4">Available Courses</h1>
      <Row>
        {courses.map(course => (
          <Col key={course.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  {course.description}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">HOD: {course.HOD}</small>
                </Card.Text>
                <Button variant="primary">View Course</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;
