import React, { useEffect, useState } from "react";
import { Container, Table, Button, Spinner } from "react-bootstrap";

// import {  Navbar, Nav, Dropdown } from "react-bootstrap";
// import { FaUsers, FaBook,  FaSignOutAlt, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
// import { GiMoneyStack, GiBookshelf } from "react-icons/gi";
// import { CiCreditCard1 } from "react-icons/ci";
// import { MdNotificationsActive } from "react-icons/md";

function AdminViewTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/viewtea");
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
        } else {
          setError("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching:", error);
        setError("An error occurred while fetching.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <p>{error}</p>
      </Container>
    );
  }

  return (
<>


    <Container className="mt-4">
      <h2 className="text-center text-dark mb-4">Teachers List</h2>
      <Table striped bordered hover responsive className="shadow-sm bg-white rounded">
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Date of Joining</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id} className="text-center">
              <td>{teacher._id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.doj}</td>
              <td>{teacher.department}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => alert(`Delete action for ID: ${teacher._id}`)}
                  className="px-3 py-1"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
   
    </>
  );
}

export default AdminViewTeacher;