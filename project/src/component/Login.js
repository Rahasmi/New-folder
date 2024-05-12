// LoginModal.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// const Navigate=useNavigate();



const LoginModal = ({show, onHide}) => {
  const [showModal, setShowModal] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', {email, password}).then(response => {
      if (response.status === 200) {
        // Redirect to the homepage after successful login
        setShowModal(false);
        setLoggedIn(true);
        navigate('/'); // Navigate to the homepage
      }
      // Handle other responses if needed
    })
    .catch(error => {
      // Handle login errors
      console.error('Login error:', error);
    });
    // Add your login logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <>
    {showModal && ( <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            {loggedIn? 'Logout': 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>)}
    </>
  );
};

export default LoginModal;
