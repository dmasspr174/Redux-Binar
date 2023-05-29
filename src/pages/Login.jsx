import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/auth";
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                we'll never share youre email with anyone else
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPasswod(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">or</h3>
          <div className="d-flex justify-content-center align-items-center">
            <GoogleLogin buttonText={"Login With Google"} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
