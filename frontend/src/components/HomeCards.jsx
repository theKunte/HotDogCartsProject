import React from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';

function HomeCards() {
    return (
    <Container className="text-center howItworks">
        <h2>How it works</h2>
        <div>
        <p className="main-P">Let's be 'frank'. It's as easy as 1, 2, Hotdog! Simply follow the steps below to find which is the best selection for you, and your Kosher!  </p>
        </div>
        <Row className="mt-5">
            <Col xs={12} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>1</Card.Title>
                        <i class="fas fa-map-marked-alt"></i>
                        <Card.Subtitle className="mb-2 text-muted">Search by address</Card.Subtitle>
                        <Card.Text>Find all hot dog carts available in your area.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>2</Card.Title>
                        <i class="fas fa-check-square"></i>
                        <Card.Subtitle className="mb-2 text-muted">Select a cart</Card.Subtitle>
                        <Card.Text>We have the best hot dogs in the area.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col xs={12} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>3</Card.Title>
                        <i class="far fa-credit-card"></i>
                        <Card.Subtitle className="mb-2 text-muted">Order online</Card.Subtitle>
                        <Card.Text>It's quick, easy, fast and secure.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default HomeCards;
