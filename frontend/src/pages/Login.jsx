import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/auth.css';
import axios from '../axios/axios';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/auth/login', { email, password });

            if (response.data.token) {
                Cookies.set('authToken', response.data.token, { expires: 7 });
                Cookies.set('username', email);
                // onLogin(response.data.token);
                navigate('/home'); // Redirect to a dashboard or home page
            } else {
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            setError("Error logging in. Please try again.");
        }
    };

    return (
        <div className='main-container'>
            <Container className="auth-container">
                <div className='sub-container'>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <h2 className="text-center">Login</h2>
                            <Form onSubmit={handleSubmit}>
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

                                {error && <p className="text-danger text-center">{error}</p>}

                                <Button variant="primary" type="submit" block>
                                    Login
                                </Button>

                                <Form.Text className="text-center mt-3">
                                    Don't have an account? <Link to="/">Register</Link>
                                </Form.Text>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;
