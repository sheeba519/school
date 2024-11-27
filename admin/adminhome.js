import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Navbar, Nav ,Dropdown} from "react-bootstrap";
import { FaUsers, FaBook,FaBell, FaGraduationCap, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const AdminHomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-secondary text-white p-3 ${isSidebarOpen ? "w-25" : "w-10"} transition-all`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar.Brand className="text-white d-flex justify-content-between align-items-center">
          <h4 className={`${isSidebarOpen ? "" : "d-none"}`}>Admin</h4>
          <Button variant="light" size="sm" onClick={toggleSidebar}>
            {isSidebarOpen ? "<" : ">"}
          </Button>
        </Navbar.Brand>
        <Nav className="flex-column mt-4">
          <Nav.Link className="text-white d-flex align-items-center mb-3">
            <FaUsers className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Manage Students</span>
          </Nav.Link>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="teacher-dropdown" className="d-flex align-items-center">
              <FaBell className="me-2" />
              <span className={`${isSidebarOpen ? "" : "d-none"}`}>Teacher</span>
            </Dropdown.Toggle>
            <Dropdown.Menu  >
              <Dropdown.Item href="/teacherreg">Add Teacher</Dropdown.Item>
              <Dropdown.Item href="/viewtea">View Teacher</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="staff-dropdown" className="d-flex align-items-center">
              <FaBell className="me-2" />
              <span className={`${isSidebarOpen ? "" : "d-none"}`}>Staffs</span>
            </Dropdown.Toggle>
            <Dropdown.Menu  >
              <Dropdown.Item href="/staffreg">Add staff</Dropdown.Item>
              <Dropdown.Item href="#/action-2">View staff</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="notification-dropdown" className="d-flex align-items-center">
              <FaBell className="me-2" />
              <span className={`${isSidebarOpen ? "" : "d-none"}`}>Acc staff</span>
            </Dropdown.Toggle>
            <Dropdown.Menu  >
              <Dropdown.Item href="/accountreg">Add Acc staff</Dropdown.Item>
              <Dropdown.Item href="#/action-2">View Acc staff</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link as={Link} to="/library" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}> Library</span>
          </Nav.Link>
          {/* <Nav.Link className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>notification</span>
          </Nav.Link> */}
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="notification-dropdown" className="d-flex align-items-center">
              <FaBell className="me-2" />
              <span className={`${isSidebarOpen ? "" : "d-none"}`}>Notifications</span>
            </Dropdown.Toggle>
            <Dropdown.Menu  >
              <Dropdown.Item href="notification">Add Notification</Dropdown.Item>
              <Dropdown.Item href="#/action-2">View Notification</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link className="text-white d-flex align-items-center mb-3">
            <FaGraduationCap className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Graduations</span>
          </Nav.Link>
          <Nav.Link className="text-white d-flex align-items-center mb-3">
            <FaSignOutAlt className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Logout</span>
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4">
        <h2>Welcome, Admin!</h2>

        {/* Cards Section */}
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Students</Card.Title>
                <Card.Text>Total Enrolled: 250</Card.Text>
                <Button variant="primary" href="/manage-students">
                  Manage Students
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Courses</Card.Title>
                <Card.Text>Active Courses: 3</Card.Text>
                <Button variant="success" href="/courses">
                  View Courses
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Account Checking </Card.Title>
                <Card.Text>Upcoming: 10</Card.Text>
                <Button variant="warning" href="/account">
                  View Account
                </Button>
              </Card.Body>
            </Card>
          </Col> */}
          {/* <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Exam Announcement</Card.Title>
                <Card.Text>Upcoming: 10</Card.Text>
                <Button variant="secondary" href="/examannouncement">
                 View Notification
                </Button>
              </Card.Body>
            </Card>
          </Col> */}
          {/* <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Result Checking</Card.Title>
                <Card.Text>Upcoming: 10</Card.Text>
                <Button variant="success" href="/result">
                 View Result
                </Button>
              </Card.Body>
            </Card>
          </Col> */}
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>TimeTable Session</Card.Title>
                <Card.Text>Upcoming: 10</Card.Text>
                <Button variant="info" href="/timetable">
                View TimeTable
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Activities */}
        <Row className="mt-5">
          <Col>
            <h4>Recent Activities</h4>
            <ListGroup>
              <ListGroup.Item>John Doe enrolled in Mathematics</ListGroup.Item>
              <ListGroup.Item>Anna Smith completed English Literature</ListGroup.Item>
              <ListGroup.Item>Mark Spencer graduated with honors</ListGroup.Item>
              <ListGroup.Item>Admin updated the course list</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      
    </div>
  )
}







export default AdminHomePage;
