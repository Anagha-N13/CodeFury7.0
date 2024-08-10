import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/auth.css';
import axios from '../axios/axios'; // Add axios for API calls

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                // Make API call to register the user
                const response = await axios.post('/auth/register', {
                    username,
                    email,
                    password
                }, {
                    headers: {'Content-Type': 'application/json'}
                });

                console.log("Response from server:", response); // Debug the response

                // Handle the response from the server
                if (response.data.token) {
                    console.log("Token received:", response.data.token); // Debug the token
                    // Call the onRegister function with the necessary data
                    onRegister(username, email, response.data.token);
                } else {
                    alert("Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("There was an error registering the user:", error);
                alert("Error registering. Please try again.");
            }
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className='main-container'>
            <Container className="auth-container">
                <div className='sub-container'>
                    <Row className="justify-content-md-center ">
                        <Col >
                            <h2 className="text-center">Register</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicUsername" className='pb-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail" className='pb-3'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className='pb-3'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirmPassword" className='pb-3'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" block>
                                    Register
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Register;
