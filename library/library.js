import React, { useState } from "react";
import { Container, Row, Col,Card,Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaBook, } from "react-icons/fa";
import { Link } from "react-router-dom"; 


function Library() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>

<div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-success text-white p-3 ${isSidebarOpen ? "w-25" : "w-10"} transition-all`}
        style={{ minHeight: "100vh" }}
      >
        <Navbar.Brand className="text-white d-flex justify-content-between align-items-center">
          <h4 className={`${isSidebarOpen ? "" : "d-none"}`}>Library</h4>
          <Button variant="light" size="sm" onClick={toggleSidebar}>
            {isSidebarOpen ? "<" : ">"}
          </Button>
        </Navbar.Brand>
        <Nav className="flex-column mt-4">
          <Nav.Link as={Link} to="/booksreq" className="text-white d-flex align-items-center mb-3">
            <FaUsers className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Book request checking</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/availablebooks" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Availability Adding</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/fineadding" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2"/>
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Fine Adiing</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/finecollection" className="text-white d-flex align-items-center mb-3">
            <FaBook className="me-2" />
            <span className={`${isSidebarOpen ? "" : "d-none"}`}>Fine collection</span>
          </Nav.Link>

          
        </Nav>
      </div>

      <Container fluid>
    <Row>
        <Col md={12} className="position-relative">
            <img 
                src="https://img.freepik.com/free-photo/thoughtful-teenager-reading-near-female-friends_23-2147864026.jpg?ga=GA1.1.1570611293.1728987537&semt=ais_hybrid" 
                alt="People studying and discussing in a library" 
                className="img-fluid img-hover-effect w-100"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle" >
                <h1>Library</h1>
               <p> A teacher affects eternity; he can never tell where his influence stops." - Henry Adams.</p>
            </div>
        </Col>    
    </Row>
</Container>
      </div>

<br></br>


     

        <Container fluid>
            <Row>
                <Col md={6}>
                    <img 
                        src="https://static.wixstatic.com/media/ad420a_9787cb34fb4242fcb30f572c3e2afe9d~mv2.jpg/v1/crop/x_229,y_0,w_5301,h_3840/fill/w_1011,h_733,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1162510330_1_edited.jpg" 
                        alt="People studying and discussing in a library" 
                       className="img-fluid img-hover-effect"
                    />
                </Col>
                <Col md={6} className="bg-light-blue p-5 position-relative" style={{ backgroundColor: '#ADD8E6', padding: '1rem', borderRadius: '5px' }} >
                    {/* <Button 
                        variant="danger" 
                        className="position-absolute" 
                        style={{ top: '1rem', right: '1rem', width: '6rem', height: '6rem', borderRadius: '50%' }} >Donate</Button> */}
                    <h1 className="display-4 text-dark mb-4">Our Library</h1>
                    <p className="lead text-dark">
             
                 The school encourages every student to read additional books beyond the academic curriculum to supplement with what is learnt in the classroom. The school library is housed in a spacious room and is equipped with thousands of books in almost all academic and other curricular disciples. There are sections devoted to text books and reference books, fiction, drama, poetry, travelogues and many other topics.

                There are also hobby-related and activity-oriented books that promote self-study. Students are also provided with newspapers and additional reading materials to satisfy their quest for excellence. The library remains open on all working days during the school hours. Experienced and well qualified librarians manage it                    </p>
                </Col>
            </Row>
        </Container>
<br></br>


          <Container fluid>
            <Row>               
                <Col md={6} className="bg-light-blue p-5 position-relative" style={{ backgroundColor: '#FFB6C1', padding: '1rem', borderRadius: '5px' }}>
                    {/* <Button 
                        variant="danger" 
                        className="position-absolute" 
                        style={{ top: '1rem', right: '1rem', width: '6rem', height: '6rem', borderRadius: '50%' }} >Donate</Button> */}
                    <h1 className="display-4 text-dark mb-4">Supportive  Our Library</h1>
                    <p className="lead text-dark"  >
             
                    Our new library is a lot smaller. It is part of a group of libraries where I can go to the next town over and use their bigger library for free, but I really believe in investing in your own community so while I'm sure I will use the other libraries, I want to bloom where I'm planted so to speak. I want to be a force that helps this library grow and be a valued resource in the community, but I'm not sure how to do that as only a patron.</p>
                </Col>
                <Col md={6}>
                    <img 
                        src="https://static.wixstatic.com/media/ad420a_86b580bd511b47e382fe54d7db6ca6b0~mv2.jpg/v1/fill/w_844,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ad420a_86b580bd511b47e382fe54d7db6ca6b0~mv2.jpg" 
                        alt="People studying and discussing in a library" 
                        className="img-fluid" 
                    />
                </Col>
            </Row>
        </Container>

<br></br>

{/* logo */}

<Container >
    <Row>
        <Col md={12} className="text-center"  style={{ backgroundColor: '#ADD8E6', padding: '1rem', borderRadius: '5px' }}>
            <Card className="p-4">
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src="https://img.freepik.com/free-vector/hand-drawn-education-book-sketch-design_1035-19224.jpg?ga=GA1.1.1570611293.1728987537&semt=ais_hybrid"
                        alt="Library logo"
                        className="mx-auto mb-2"
                        style={{ width: '50%', maxWidth: '150px' }} // Adjust image size
                    />
                    <Card.Title className="h3 font-weight-bold text-dark mb-4"><h2>Your Safety Is Our Priority</h2></Card.Title>
                    <Card.Text className="text-muted">
                        To support physical distancing efforts, the library is operating with very limited staff and remains closed to the public.
                        to learn more about how we're keeping our library safe.At our library, your safety is our top priority. We are committed to creating a welcoming and secure environment for all patrons. From enhanced sanitation measures to well-trained staff ready to assist you, we strive to ensure that you feel comfortable and protected during your visit. Together, we can foster a space where learning and exploration thrive, knowing that your well-being is always at the forefront of our mission. Thank you for being a valued part of our community!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
<br></br>

</>

    );
}

export default Library;