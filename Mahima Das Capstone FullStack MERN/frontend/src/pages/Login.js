import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../api";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

const handleLogin = async (values, { setSubmitting }) => {
    try {
      setServerError("");
      const res = await API.post("/auth/login", values);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      

      if (res.data.role === "owner") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      setServerError(error.response?.data?.error || "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm border-0 rounded-lg">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Welcome Back</h2>
              
              {serverError && <Alert variant="danger">{serverError}</Alert>}

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
              >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="fw-semibold">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                        className="py-2"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                      <Form.Label className="fw-semibold">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                        className="py-2"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-2 fw-bold rounded-pill mb-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="text-center mt-3 text-muted">
                Don't have an account? <Link to="/register" className="text-decoration-none fw-bold">Sign up here</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;