import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const styleContaine = {
    padding: '130px 0',
    height: 'calc(100vh - 56px)'
}

const LoginPage = () => (
    <Container style={styleContaine}>
        <Row style={{ margin: '0 auto'}}>
            <Col xs='2' sm='2' md='2' lg='4'></Col>
                <Col sm='8' md='8' lg='4'>
                    <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                    </Form>
                </Col>
            <Col xs='2' sm='2' md='2' lg='4'></Col>
        </Row>
    </Container>
   
)

export default LoginPage;