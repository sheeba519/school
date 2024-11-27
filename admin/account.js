import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AccountChecker = () => {
  const [studentId, setStudentId] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const [error, setError] = useState('');

  // Sample data to simulate an account database
  const accounts = [
    { id: '101', name: 'Alice Johnson', balance: 1500 },
    { id: '102', name: 'Bob Smith', balance: 1200 },
    { id: '103', name: 'Charlie Brown', balance: 900 },
  ];

  const handleCheckAccount = () => {
    const account = accounts.find(acc => acc.id === studentId);
    if (account) {
      setAccountDetails(account);
      setError('');
    } else {
      setError('Account not found.');
      setAccountDetails(null);
    }
  };

  return (
    <div>
      <h2>School Account Checker</h2>
      <Form>
        <Form.Group controlId="formStudentId">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter your Student ID"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCheckAccount}>
          Check Account
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      
      {accountDetails && (
        <Alert variant="success" className="mt-3">
          <strong>Name:</strong> {accountDetails.name}<br />
          <strong>Balance:</strong> ${accountDetails.balance}
        </Alert>
      )}
    </div>
  );
};

export default AccountChecker;
