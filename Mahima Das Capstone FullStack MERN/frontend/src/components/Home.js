import { useState, useEffect, useCallback } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FaSearch, FaStar, FaGamepad, FaHeart, FaTshirt, FaSmile, FaUsers, FaThList } from 'react-icons/fa';

function Home() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [minRating, setMinRating] = useState("");


  const fetchApps = useCallback(async () => {
    try {
      let query = `/apps?search=${search}`;
      if (genre) query += `&genre=${genre}`;
      if (minRating) query += `&minRating=${minRating}`;
      const res = await API.get(query);
      setApps(res.data);
    } catch (error) {
      console.error("Error fetching apps", error);
    }
  }, [search, genre,minRating]);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  const categories = [
    { id: "", label: "All", icon: <FaThList /> },
    { id: "games", label: "Games", icon: <FaGamepad /> },
    { id: "beauty", label: "Beauty", icon: <FaSmile /> },
    { id: "fashion", label: "Fashion", icon: <FaTshirt /> },
    { id: "health", label: "Health", icon: <FaHeart /> },
    { id: "social", label: "Social", icon: <FaUsers /> }
  ];

  return (
    <Container className="py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Discover Great Apps</h1>
        <p className="text-muted">Find the perfect application for your daily needs.</p>
      </div>

      {/*Search Bar*/}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <div className="position-relative">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <Form.Control
              type="text"
              placeholder="Search apps by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ps-5 py-2 rounded-pill shadow-sm border-0"
            />
          </div>
        </Col>
        <Col md={4} lg={3}>
          <div className="position-relative">
            <FaStar className="position-absolute top-50 start-0 translate-middle-y ms-3 text-warning" />
            <Form.Select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="ps-5 py-2 rounded-pill shadow-sm border-0 text-muted"
            >
              <option value="">All Ratings</option>
              <option value="5">5+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      {/*Category Filter Bar*/}
      <div className="d-flex flex-nowrap overflow-auto gap-2 mb-5 pb-2 px-2" style={{ WebkitOverflowScrolling: 'touch' }}>
        {categories.map((cat) => (
          <Button
            key={cat.id || 'all'}
            variant={genre === cat.id ? "primary" : "outline-secondary"}
            className="rounded-pill d-flex align-items-center gap-2 px-4 shadow-sm"
            onClick={() => setGenre(cat.id)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {cat.icon} {cat.label}
          </Button>
        ))}
      </div>

      <Row className="g-4">
        {apps.length > 0 ? (
          apps.map((app) => (
            <Col xs={12} sm={6} md={4} lg={3} key={app.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden transition-hover">
                <div className="bg-light position-relative" style={{ paddingTop: "56.25%" }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3">
                    {app.image ? (
                      <img
                        src={`http://localhost:5000/${app.image.replace(/\\/g, '/')}`}
                        alt={app.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    ) : (
                      <span className="text-muted small">No Image</span>
                    )}
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-5 text-truncate">{app.name}</Card.Title>
                  <Card.Text className="text-muted small mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {app.description}
                  </Card.Text>
                  
                  <div className="mt-auto d-flex justify-content-between align-items-center mb-3">
                    <Badge bg="light" text="dark" className="border text-capitalize px-2 py-1">
                      {app.category}
                    </Badge>
                    <span className="text-warning fw-bold d-flex align-items-center gap-1">
                      <FaStar /> {app.ratings || 0}
                    </span>
                  </div>
                  
                  <Button as={Link} to={`/app/${app.id}`} variant="primary" className="w-100 fw-semibold rounded-pill">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <div className="text-center py-5 text-muted">
              <h4>No applications found.</h4>
              <p>Try adjusting your search or category filter.</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;