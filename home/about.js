import React from 'react';  
import './about.css';
import { Container, Row, Col, Card,Button ,Image,} from 'react-bootstrap'; 

  const About=()=>{

  return (  
    <div className="container mx-auto my-8  ">  
       <Container className="py-7">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title className="text-gray-600 font-semibold">Welcome to Vidya school</Card.Title>
                            <Card.Subtitle className="text-primary mb-2">
                                Start Serving the Nation with Vidya school
                            </Card.Subtitle>
                            <div className="h-1 w-16 bg-orange-500 mt-2 mb-4"></div>
                            <Card.Text className="text-gray-700 mb-4">
                            Vidya school is an initiative taken by the Ministry of Education, Government of India with the aim to strengthen Schools through community and private sector involvement in schools across the country. This initiative would connect schools with varied volunteers from the Indian Diaspora namely, young professionals, retired teachers, retired Government officials, retired professionals, NGOs, Private Sector and Public Sector Companies, Corporate Institutions and many others.
                            </Card.Text>
                            <Button variant="warning">About us</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center mt-2">
                    <div className="position-relative"><h2>Vidya school</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0UesdpXwRHQ-kHUMBnI8tASy6Folnd4rVA&s" alt="Portrait of a distinguished person" className="img-fluid rounded-lg shadow-md " />
                        {/* <div className="position-absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 text-white p-3 rounded-bottom"> */}
                            <p className="mb-1">Inauguration of Vidya portal by</p>
                            <p className="font-weight-bold">Hon'ble Prime Minister of India</p>
                            <p className="font-weight-bold text-warning">SHRI NARENDRA MODI</p>
                            <p className="mb-0">on the occasion of Shikshak Parv 2021</p>
                        {/* </div> */}
                        {/* <div className="position-absolute top-50 start-50 translate-middle">
                            <i className="fas fa-play-circle text-danger display-4"></i>
                        </div> */}
                    </div>
                </Col>
            </Row>
        </Container>





        <Card  className="text-center" ><h1>VISION&MISSION</h1>
        <Container fluid className="bg-gradient min-vh-100 d-flex justify-content-center align-items-center text-white">
            <Row className="text-center">
              
                <Col md={6} className="mb-4"  >
                
                    <Card className="bg-transparent border-0">
                        <Image src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/mission-1495543562-2.jpg?0GhlXmd2ET58HHreHljoOBfmvYPaOzUb" roundedCircle className="border border-white mb-4 image-zoom"/>
                        <Card.Body>
                            <Card.Title className="h2 font-weight-bold">VISION</Card.Title>
                            <hr className="border-top border-warning mb-4" style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Text style={{fontSize:'20px'}}>
                            ​🇼​​🇪​ ​🇪​​🇳​​🇩​​🇪​​🇦​​🇻​​🇴​​🇺​​🇷​ ​🇹​​🇴​ ​🇧​​🇪​ ​🇹​​🇭​​🇪​ ​🇷​​🇮​​🇬​​🇭​​🇹​ ​🇲​​🇪​​🇳​​🇹​​🇴​​🇷​ ​🇫​​🇴​​🇷​ ​🇮​​🇮​​🇹​-​🇯​​🇪​​🇪​ ​🇦​​🇸​​🇵​​🇮​​🇷​​🇦​​🇳​​🇹​​🇸​, ​🇼​​🇭​​🇮​​🇱​​🇪​ ​🇦​​🇱​​🇸​​🇴​ ​🇭​​🇪​​🇱​​🇵​​🇮​​🇳​​🇬​ ​🇹​​🇭​​🇪​​🇲​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​ ​🇦​ ​🇬​​🇱​​🇴​​🇧​​🇦​​🇱​ ​🇵​​🇪​​🇷​​🇸​​🇵​​🇪​​🇨​​🇹​​🇮​​🇻​​🇪​, ​🇼​​🇮​​🇹​​🇭​ ​🇦​ ​🇰​​🇪​​🇪​​🇳​ ​🇮​​🇳​​🇹​​🇪​​🇷​​🇪​​🇸​​🇹​ ​🇮​​🇳​ ​🇨​​🇴​​🇲​​🇲​​🇺​​🇳​​🇮​​🇹​​🇾​ ​🇱​​🇮​​🇫​​🇪​. ​🇼​​🇪​ ​🇵​​🇷​​🇪​​🇵​​🇦​​🇷​​🇪​ ​🇸​​🇹​​🇺​​🇩​​🇪​​🇳​​🇹​​🇸​ ​🇫​​🇴​​🇷​ ​🇨​​🇴​​🇲​​🇵​​🇪​​🇹​​🇮​​🇹​​🇮​​🇻​​🇪​ ​🇪​​🇽​​🇦​​🇲​​🇸​ ​🇧​​🇾​ ​🇵​​🇷​​🇴​​🇻​​🇮​​🇩​​🇮​​🇳​​🇬​ ​🇮​​🇳​-​🇩​​🇪​​🇵​​🇹​​🇭​ ​🇰​​🇳​​🇴​​🇼​​🇱​​🇪​​🇩​​🇬​​🇪​ ​🇴​​🇫​ ​🇻​​🇦​​🇷​​🇮​​🇴​​🇺​​🇸​ ​🇸​​🇺​​🇧​​🇯​​🇪​​🇨​​🇹​​🇸​ ​🇦​​🇹​ ​🇦​​🇳​ ​🇮​​🇳​​🇹​​🇪​​🇷​​🇲​​🇪​​🇩​​🇮​​🇦​​🇹​​🇪​ ​🇱​​🇪​​🇻​​🇪​​🇱​.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="bg-transparent border-0">
                        <Image src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/vision-1495541721-2.jpg?nDRTFcTgD-M1qxhWJATaWUNtY2bgVkxU" roundedCircle className="border border-white mb-4 image-zoom" />
                        <Card.Body>
                            <Card.Title className="h2 font-weight-bold">MISSION</Card.Title>
                            <hr className="border-top border-warning mb-4" style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Text  style={{fontSize:'20px'}}>

                            ​🇴​​🇺​​🇷​ ​🇬​​🇴​​🇦​​🇱​ ​🇮​​🇸​ ​🇹​​🇴​ ​🇫​​🇴​​🇨​​🇺​​🇸​ ​🇴​​🇳​ ​🇹​​🇭​​🇪​ ​🇭​​🇴​​🇱​​🇮​​🇸​​🇹​​🇮​​🇨​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​​🇲​​🇪​​🇳​​🇹​ ​🇴​​🇫​ ​🇪​​🇦​​🇨​​🇭​ ​🇨​​🇭​​🇮​​🇱​​🇩​, ​🇦​​🇳​​🇩​ ​🇹​​🇴​ ​🇬​​🇮​​🇻​​🇪​ ​🇹​​🇭​​🇪​​🇲​ ​🇦​ ​🇨​​🇴​​🇲​​🇵​​🇪​​🇹​​🇮​​🇹​​🇮​​🇻​​🇪​ ​🇪​​🇩​​🇬​​🇪​ ​🇼​​🇮​​🇹​​🇭​ ​🇹​​🇭​​🇪​ ​🇭​​🇪​​🇱​​🇵​ ​🇴​​🇫​ ​🇦​​🇳​ ​🇪​​🇽​​🇹​​🇪​​🇳​​🇸​​🇮​​🇻​​🇪​ ​🇨​​🇺​​🇷​​🇷​​🇮​​🇨​​🇺​​🇱​​🇺​​🇲​ ​🇦​​🇳​​🇩​ ​🇩​​🇾​​🇳​​🇦​​🇲​​🇮​​🇨​ ​🇹​​🇪​​🇦​​🇨​​🇭​​🇮​​🇳​​🇬​ ​🇲​​🇪​​🇹​​🇭​​🇴​​🇩​​🇴​​🇱​​🇴​​🇬​​🇮​​🇪​​🇸​.                            </Card.Text>
                            {/* <Card.Text><strong>Morals:</strong> The ability to discriminate between right and wrong</Card.Text>
                            <Card.Text><strong>Values:</strong> The unique beliefs and feelings of an individual</Card.Text>
                            <Card.Text><strong>Ethics:</strong> The principles that define everyday behaviour</Card.Text>
                            <Card.Text><strong>Problem-solving Techniques:</strong> The skill to resolve difficult issues</Card.Text>
                            <Card.Text><strong>Positive Attitude:</strong> The highest indicator of a healthy personality</Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Card>





        <Container fluid className="bg-light min-vh-80 d-flex align-items-center justify-content-center">
            {/* <Jumbotron className="text-center"> */}
                <h2 className="display-">MANAGEMENT</h2>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Image 
                            src="management-1495541364-1.jpg" 
                            alt="Close-up of a person in a suit with hands clasped over a document" 
                            rounded 
                            className="border border-light shadow" 
                            width={700} 
                            height={700} 
                        />
                    </Col>
                </Row>
                <p className="lead">
                𝘖𝘶𝘳 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵’𝘴 𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘪𝘤 𝘷𝘪𝘴𝘪𝘰𝘯, 𝘥𝘦𝘵𝘦𝘳𝘮𝘪𝘯𝘢𝘵𝘪𝘰𝘯 𝘢𝘯𝘥 𝘭𝘦𝘢𝘥𝘦𝘳𝘴𝘩𝘪𝘱 𝘩𝘢𝘴 𝘦𝘯𝘢𝘣𝘭𝘦𝘥 𝘵𝘩𝘦𝘮 𝘵𝘰 𝘴𝘦𝘵 𝘯𝘦𝘸 𝘣𝘦𝘯𝘤𝘩𝘮𝘢𝘳𝘬𝘴, 𝘶𝘭𝘵𝘪𝘮𝘢𝘵𝘦𝘭𝘺 𝘳𝘦𝘴𝘶𝘭𝘵𝘪𝘯𝘨 𝘪𝘯 𝘢 𝘸𝘰𝘳𝘭𝘥-𝘤𝘭𝘢𝘴𝘴 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯 𝘴𝘺𝘴𝘵𝘦𝘮. 𝘛𝘢𝘬𝘪𝘯𝘨 𝘰𝘶𝘳 𝘧𝘰𝘶𝘯𝘥𝘦𝘳𝘴’ 𝘷𝘪𝘴𝘪𝘰𝘯 𝘧𝘶𝘳𝘵𝘩𝘦𝘳, 𝘰𝘶𝘳 𝘵𝘦𝘢𝘮 𝘰𝘧 𝘺𝘰𝘶𝘯𝘨, 𝘥𝘺𝘯𝘢𝘮𝘪𝘤, 𝘥𝘦𝘵𝘦𝘳𝘮𝘪𝘯𝘦𝘥 𝘭𝘦𝘢𝘥𝘦𝘳𝘴 𝘤𝘰𝘯𝘵𝘪𝘯𝘶𝘦 𝘵𝘰 𝘨𝘳𝘰𝘰𝘮 𝘰𝘶𝘳 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺 𝘰𝘧 𝘨𝘭𝘰𝘣𝘢𝘭 𝘭𝘦𝘢𝘳𝘯𝘦𝘳𝘴, 𝘵𝘩𝘳𝘰𝘶𝘨𝘩 𝘮𝘦𝘵𝘩𝘰𝘥𝘰𝘭𝘰𝘨𝘪𝘦𝘴 𝘵𝘩𝘢𝘵 𝘢𝘳𝘦 𝘢𝘯 𝘦𝘹𝘵𝘳𝘢𝘰𝘳𝘥𝘪𝘯𝘢𝘳𝘺 𝘣𝘭𝘦𝘯𝘥 𝘰𝘧 𝘤𝘰𝘯𝘷𝘦𝘯𝘵𝘪𝘰𝘯𝘢𝘭 𝘢𝘯𝘥 𝘤𝘰𝘯𝘵𝘦𝘮𝘱𝘰𝘳𝘢𝘳𝘺.                </p>
                
            {/* </Jumbotron> */}
        </Container>




        <Container fluid className="bg-light min-vh-80 d-flex align-items-center justify-content-center">
            {/* <Jumbotron className="text-center"> */}
                <p className="lead">
                𝘝𝘪𝘥𝘺𝘢 𝘴𝘤𝘩𝘰𝘰𝘭 𝘧𝘪𝘳𝘴𝘵 𝘴𝘶𝘳𝘧𝘢𝘤𝘦𝘥 𝘰𝘯 𝘵𝘩𝘦 𝘢𝘤𝘢𝘥𝘦𝘮𝘪𝘤 𝘩𝘰𝘳𝘪𝘻𝘰𝘯 𝘪𝘯 𝘵𝘩𝘦 𝘺𝘦𝘢𝘳 1986 𝘢𝘯𝘥 𝘸𝘪𝘵𝘩𝘪𝘯 𝘢 𝘴𝘱𝘢𝘯 𝘰𝘧 38 𝘺𝘦𝘢𝘳𝘴 𝘸𝘦𝘯𝘵 𝘰𝘯 𝘵𝘰 𝘣𝘦𝘤𝘰𝘮𝘦 𝘈𝘴𝘪𝘢'𝘴 𝘭𝘢𝘳𝘨𝘦𝘴𝘵 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯𝘢𝘭 𝘨𝘳𝘰𝘶𝘱. 𝘛𝘩𝘦 𝘱𝘢𝘴𝘵 𝘵𝘸𝘰 𝘢𝘯𝘥 𝘢 𝘩𝘢𝘭𝘧 𝘥𝘦𝘤𝘢𝘥𝘦𝘴 𝘸𝘪𝘵𝘯𝘦𝘴𝘴𝘦𝘥 𝘚𝘳𝘪 𝘊𝘩𝘢𝘪𝘵𝘢𝘯𝘺𝘢 𝘪𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘪𝘯𝘨 𝘯𝘰𝘷𝘦𝘭 𝘢𝘤𝘢𝘥𝘦𝘮𝘪𝘤 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘦𝘴 𝘵𝘩𝘢𝘵 𝘩𝘢𝘷𝘦 𝘩𝘦𝘭𝘱𝘦𝘥 𝘴𝘵𝘶𝘥𝘦𝘯𝘵𝘴 𝘦𝘯𝘵𝘦𝘳 𝘵𝘩𝘦 𝘯𝘢𝘵𝘪𝘰𝘯'𝘴 𝘱𝘳𝘦𝘮𝘪𝘦𝘳 𝘦𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨 𝘢𝘯𝘥 𝘮𝘦𝘥𝘪𝘤𝘢𝘭 𝘤𝘰𝘭𝘭𝘦𝘨𝘦𝘴. 𝘛𝘩𝘦 𝘮𝘢𝘯𝘯𝘦𝘳 𝘪𝘯 𝘸𝘩𝘪𝘤𝘩 𝘵𝘩𝘦 𝘎𝘳𝘰𝘶𝘱 𝘩𝘢𝘴 𝘵𝘳𝘢𝘯𝘴𝘧𝘰𝘳𝘮𝘦𝘥 𝘵𝘩𝘦 𝘰𝘶𝘵𝘭𝘰𝘰𝘬 𝘵𝘰𝘸𝘢𝘳𝘥𝘴 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘯𝘰𝘵𝘩𝘪𝘯𝘨 𝘴𝘩𝘰𝘳𝘵 𝘰𝘧 𝘦𝘹𝘦𝘮𝘱𝘭𝘢𝘳𝘺.  </p>              
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Image 
                            src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/our-journey-1499771100-1.jpg?DpkymeyKKWu8YZzikwMuoTi_B3-33gO5" 
                            alt="Close-up of a person in a suit with hands clasped over a document" 
                            rounded 
                            className="border border-light shadow" 
                            width={900} 
                            height={700} 
                        />
                    </Col>
                </Row>
                <h2 className="display-">Our Journy</h2>
                
            {/* </Jumbotron> */}
        </Container>

    </div>  
  );  
  }

export default About;