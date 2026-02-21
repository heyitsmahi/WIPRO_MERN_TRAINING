import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../api";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .required("Full name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const Register = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

const handleRegister = async (values, { setSubmitting }) => {
    try {
      setServerError("");


      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: "user" 
      };

      await API.post("/auth/register", payload);
      alert("Registration successful! Please login.");
      navigate("/login");
      
    } catch (error) {
      setServerError(error.response?.data?.error || "Registration failed. Email might be taken.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center py-5" style={{ minHeight: "80vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={7} lg={6}>
          <Card className="shadow-sm border-0 rounded-lg">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Create an Account</h2>
              
              {serverError && <Alert variant="danger">{serverError}</Alert>}

              <Formik
                initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={RegisterSchema}
                onSubmit={handleRegister}
              >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="e.g., Jane Doe"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Type password again"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-2 fw-bold rounded-pill"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Account..." : "Sign Up"}
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="text-center mt-4 text-muted">
                Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login here</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;