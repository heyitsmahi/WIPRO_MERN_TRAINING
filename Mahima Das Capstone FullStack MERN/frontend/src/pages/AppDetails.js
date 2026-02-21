import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Badge, ListGroup, Alert } from "react-bootstrap";
import { FaStar, FaDownload, FaCalendarAlt, FaTag, FaInfoCircle, FaGamepad ,FaCommentDots} from "react-icons/fa";
import API from "../api";

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

const fetchAppDetails = async () => {
        try {
            const { data } = await API.get(`/apps/${id}`);
            setApp(data);
        } catch (error) {
            console.error("Error fetching app details", error);
        }
    };

    useEffect(() => {
        fetchAppDetails();
    }, [id]);

const handleDownload = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setErrorMsg("Please login as a user to download this app.");
                return;
            }
            
            await API.post(`/apps/download/${id}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            alert("App downloaded successfully!");
            fetchAppDetails(); 
        } catch (error) {
            setErrorMsg(error.response?.data?.error || "Failed to process download.");
        }
    };

const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setErrorMsg("Please login to submit a review.");
                return;
            }

            await API.post("/reviews", 
            { 
                appId: id,
                rating, 
                comment 
            }, 
            { headers: { Authorization: `Bearer ${token}` } }
        );
            
            setComment("");
            setRating(5);
            fetchAppDetails();
        } catch (error) {
            setErrorMsg(error.response?.data?.error || "Failed to submit review.");
        }
    };

    if (!app) return <Container className="py-5 text-center"><h4>Loading app details...</h4></Container>;

    return (
        <Container className="py-5">
            {errorMsg && <Alert variant="danger" onClose={() => setErrorMsg("")} dismissible>{errorMsg}</Alert>}
            
            <Row className="g-5">
                <Col lg={4}>
                    <Card className="border-0 shadow-sm text-center rounded-4 overflow-hidden mb-4">
                        <div className="bg-light p-4 d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                            {app.image ? (
                                <img 
                                    src={`http://localhost:5000/${app.image.replace(/\\/g, '/')}`} 
                                    alt={app.name} 
                                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                                />
                            ) : (
                                <span className="text-muted">No Image Available</span>
                            )}
                        </div>
                        <Card.Body className="pb-4">
                            <h2 className="fw-bold mb-1">{app.name}</h2>
                            <div className="d-flex justify-content-center gap-2 mb-3">
                                <Badge bg="primary" className="px-3 py-2"><FaTag className="me-1"/> {app.category}</Badge>
                                <Badge bg="secondary" className="px-3 py-2"><FaGamepad className="me-1"/> {app.genre}</Badge>
                            </div>
                            <h4 className="text-warning mb-4">
                                {"⭐".repeat(app.ratings || 0)} <span className="text-muted fs-6 ms-1">({app.reviews?.length || 0} reviews)</span>
                            </h4>
                            
                            <Button 
                                variant="success" 
                                size="lg" 
                                className="w-100 fw-bold rounded-pill shadow-sm"
                                onClick={handleDownload}
                            >
                                <FaDownload className="me-2" /> Download Now ({app.downloadCount || 0})
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm rounded-4">
                        <ListGroup variant="flush" className="rounded-4">
                            <ListGroup.Item className="py-3 d-flex justify-content-between align-items-center">
                                <span className="text-muted fw-semibold"><FaInfoCircle className="me-2"/> Version</span>
                                <span className="fw-bold">{app.version || "1.0.0"}</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="py-3 d-flex justify-content-between align-items-center">
                                <span className="text-muted fw-semibold"><FaCalendarAlt className="me-2"/> Released</span>
                                <span className="fw-bold">
                                    {app.releaseDate ? new Date(app.releaseDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : "N/A"}
                                </span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

                <Col lg={8}>
                    <div className="mb-5">
                        <h3 className="fw-bold mb-3 border-bottom pb-2">About this app</h3>
                        <p className="text-secondary fs-5" style={{ lineHeight: "1.8" }}>
                            {app.description}
                        </p>
                    </div>

                    <h3 className="fw-bold mb-4 border-bottom pb-2">User Reviews</h3>
                    
                    <Card className="border-0 shadow-sm rounded-4 mb-4 bg-light">
                        <Card.Body className="p-4">
                            <h5 className="fw-bold mb-3">Leave a Review</h5>
                            <Form onSubmit={handleReviewSubmit}>
                                <Row className="g-3 align-items-center mb-3">
                                    <Col xs="auto">
                                        <Form.Label className="mb-0 fw-semibold"> Rating:</Form.Label>
                                    </Col>
                                    <Col xs="auto">
                                        <Form.Select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="fw-bold text-warning border-0 shadow-sm">
                                            <option value="5">5 - Excellent ⭐⭐⭐⭐⭐</option>
                                            <option value="4">4 - Good ⭐⭐⭐⭐</option>
                                            <option value="3">3 - Average ⭐⭐⭐</option>
                                            <option value="2">2 - Poor ⭐⭐</option>
                                            <option value="1">1 - Terrible ⭐</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Tell us what you think..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                    className="mb-3 border-0 shadow-sm"
                                    style={{ resize: "none" }}
                                />
                                <Button variant="primary" type="submit" className="fw-bold px-4 rounded-pill">
                                    Submit Review
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <div className="d-flex flex-column gap-3">
                        {app.reviews && app.reviews.length > 0 ? (
                            app.reviews.map((rev, index) => (
                                <Card key={index} className="border-0 shadow-sm rounded-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h6 className="fw-bold mb-0 text-primary">{rev.user?.name || "Anonymous User"}</h6>
                                            <span className="text-warning">{"⭐".repeat(rev.rating)}</span>
                                        </div>
                                        <Card.Text className="text-secondary mb-0">{rev.comment}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center text-muted py-4">
                                <FaCommentDots size={40} className="mb-2 opacity-50" />
                                <p>No reviews yet. Be the first to review this app!</p>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AppDetails;