import React, { useState } from "react";
import { Button, Navbar, Nav,Container,Row,Col } from "react-bootstrap";
import { FaUsers, FaBook, } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccstaffHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white p-3 ${isSidebarOpen ? "w-25" : "w-10"} transition-all`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar.Brand className="text-white d-flex justify-content-between align-items-center">
          <h4 className={`${isSidebarOpen ? "" : "d-none"}`}>Account Staff</h4>
          <Button variant="light" size="sm" onClick={toggleSidebar}>
            {isSidebarOpen ? "<" : ">"}
          </Button>
        </Navbar.Brand>
        <Nav className="flex-column mt-4">
          <Nav.Link as={Link} to="/account management"  className="text-white d-flex align-items-center mb-3">
            <FaUsers className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Account Management</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/staffsalary"  className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Staff Salary</span>
          </Nav.Link>
          <Nav.Link  as={Link} to="/leavemarking" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2"/>
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Leave marking</span>
          </Nav.Link>
          <Nav.Link  as={Link} to="/adminnotificationview" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2"/>
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Admin notification view</span>
          </Nav.Link>
         
        </Nav>
      </div>

      <Container fluid>
    <Row>
        <Col md={12} className="position-relative">
            <img 
                src="https://img.freepik.com/free-photo/smiling-students-library_23-2148166358.jpg?ga=GA1.1.1570611293.1728987537&semt=ais_hybrid" 
                alt="People studying and discussing in a library" 
                className="img-fluid img-hover-effect w-100"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle" >
                {/* <h1>Accounts</h1> */}
                <h2>Accstaff</h2>
               <p>"There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do." —Derek Jeter
               </p>
            </div>
        </Col>    
    </Row>
</Container>



      </div>
  )
}
export default AccstaffHome;