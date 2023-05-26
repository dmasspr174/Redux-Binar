import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-item-center">
            <Card className="text-center">
              <Card.Header>Dashboard</Card.Header>
              <Card.Body>
                <Card.Title>My Profile</Card.Title>
                <Card.Text>Hello, my name is {user?.name}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{user?.email}</Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
