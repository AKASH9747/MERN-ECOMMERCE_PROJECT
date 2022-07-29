import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );

    // Saving email to local storage
    window.localStorage.setItem("emailForRegistration", email);

    // Clearing the state
    setEmail("");
  };

  return (
    <Container>
      <Row className="justify-content-md-center text-center align-items-center mt-5">
        <Col xs={12} md={6}>
          <h1 className="mb-2">REGISTER</h1>

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                style={{ border: "solid red 2px" }}
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterScreen;
