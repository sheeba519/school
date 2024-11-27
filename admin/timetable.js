import React from 'react';
import { Table } from 'react-bootstrap';

const Timetable = () => {
  const timetableData = [
    {
      day: 'Monday',
      departments: {
        Biology: { subjects: ['Math', 'Chemistry', 'Physics'], time: '9:00 AM - 10:00 AM' },
        'Computer Science': { subjects: ['Data Structures', 'Algorithms', 'Web Development'], time: '10:15 AM - 11:15 AM' },
        Commerce: { subjects: ['Accounting', 'Marketing', 'Finance'], time: '11:30 AM - 12:30 PM' },
      },
    },
    {
      day: 'Tuesday',
      departments: {
        Biology: { subjects: ['Biology', 'Geography', 'History'], time: '9:00 AM - 10:00 AM' },
        'Computer Science': { subjects: ['Networking', 'Operating Systems', 'Databases'], time: '10:15 AM - 11:15 AM' },
        Commerce: { subjects: ['Business Law', 'Economics', 'Management'], time: '11:30 AM - 12:30 PM' },
      },
    },
    {
      day: 'Wednesday',
      departments: {
        Biology: { subjects: ['Zoology', 'Botany', 'Microbiology'], time: '9:00 AM - 10:00 AM' },
        'Computer Science': { subjects: ['Machine Learning', 'AI', 'Cyber Security'], time: '10:15 AM - 11:15 AM' },
        Commerce: { subjects: ['Corporate Finance', 'E-Commerce', 'HR Management'], time: '11:30 AM - 12:30 PM' },
      },
    },
    {
      day: 'Thursday',
      departments: {
        Biology: { subjects: ['Genetics', 'Biochemistry', 'Ecology'], time: '9:00 AM - 10:00 AM' },
        'Computer Science': { subjects: ['Software Engineering', 'DevOps', 'Cloud Computing'], time: '10:15 AM - 11:15 AM' },
        Commerce: { subjects: ['Taxation', 'Audit', 'Investment'], time: '11:30 AM - 12:30 PM' },
      },
    },
    {
      day: 'Friday',
      departments: {
        Biology: { subjects: ['Anatomy', 'Physiology', 'Botany'], time: '9:00 AM - 10:00 AM' },
        'Computer Science': { subjects: ['Web Development', 'Mobile Apps', 'Cloud Computing'], time: '10:15 AM - 11:15 AM' },
        Commerce: { subjects: ['Financial Markets', 'International Business', 'Entrepreneurship'], time: '11:30 AM - 12:30 PM' },
      },
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Day</th>
          <th>Biology</th>
          <th>Computer Science</th>
          <th>Commerce</th>
        </tr>
      </thead>
      <tbody>
        {timetableData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.day}</td>
            <td>
              {entry.departments.Biology.subjects.join(', ')}<br />
              {entry.departments.Biology.time}
            </td>
            <td>
              {entry.departments['Computer Science'].subjects.join(', ')}<br />
              {entry.departments['Computer Science'].time}
            </td>
            <td>
              {entry.departments.Commerce.subjects.join(', ')}<br />
              {entry.departments.Commerce.time}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Timetable;
