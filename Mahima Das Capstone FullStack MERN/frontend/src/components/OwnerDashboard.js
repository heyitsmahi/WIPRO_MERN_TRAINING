import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import API from "../api";
import { Container, Row, Col, Card, Form, Button, Table, Badge, Alert } from 'react-bootstrap';
import { FaBullhorn, FaPlusCircle, FaDownload, FaCommentDots, FaEdit } from 'react-icons/fa';

function OwnerDashboard() {
  const [myApps, setMyApps] = useState([]);
  const [newApp, setNewApp] = useState({ name: "", description: "", version: "1.0", genre: "games", category: "games" });
  const [image, setImage] = useState(null);
  const [announceAppId, setAnnounceAppId] = useState("");
  const [announceMessage, setAnnounceMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const fetchMyApps = async () => {
    try {
      const res = await API.get("/apps/owner");
      setMyApps(res.data);
    } catch (error) {
      console.error("Error fetching owner apps", error);
    }
  };

  useEffect(() => {
    fetchMyApps();
  }, []);

  const handleCreateApp = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        Object.keys(newApp).forEach(key => formData.append(key, newApp[key]));
        formData.append("appImage", image); 

        await API.post("/apps/create", formData, { headers: { "Content-Type": "multipart/form-data" } });
        setStatusMsg({ type: "success", text: "App created successfully!" });
        setNewApp({ name: "", description: "", version: "1.0", genre: "games", category: "games" });
        setImage(null);
        fetchMyApps();
    } catch (error) {
        setStatusMsg({ type: "danger", text: error.response?.data?.error || "Failed to create app." });
    }
  };

  const handleAnnounce = async (e) => {
    e.preventDefault();
    try {
        await API.post("/notifications/announce", { appId: announceAppId, message: announceMessage });
        setStatusMsg({ type: "success", text: "Update announced successfully!" });
        setAnnounceMessage(""); 
        setAnnounceAppId("");   
    } catch (error) {
        setStatusMsg({ type: "danger", text: error.response?.data?.error || "Failed to announce." });
    }
  };

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4 border-bottom pb-2 text-primary">Owner Dashboard</h2>

      {statusMsg.text && (
        <Alert variant={statusMsg.type} onClose={() => setStatusMsg({ type: "", text: "" })} dismissible>
          {statusMsg.text}
        </Alert>
      )}

      <Row className="mb-5 g-4">
        {/* Add App Form */}
        <Col lg={7}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Header className="bg-white border-0 pt-4 pb-0">
              <h5 className="fw-bold d-flex align-items-center gap-2"><FaPlusCircle className="text-primary"/> Add New Application</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleCreateApp}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control required placeholder="App Name" value={newApp.name} onChange={e => setNewApp({...newApp, name: e.target.value})} />
                  </Col>
                  <Col md={6}>
                    <Form.Select onChange={e => setNewApp({...newApp, category: e.target.value, genre: e.target.value})} value={newApp.category}>
                      <option value="games">Games</option>
                      <option value="beauty">Beauty</option>
                      <option value="fashion">Fashion</option>
                      <option value="health">Health</option>
                      <option value="social">Social</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12}>
                    <Form.Control required placeholder="Brief Description" value={newApp.description} onChange={e => setNewApp({...newApp, description: e.target.value})} />
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-muted mb-1">Upload App Icon</Form.Label>
                      <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" variant="primary" className="fw-bold w-100">Create Application</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Announce Form */}
        <Col lg={5}>
          <Card className="border-0 shadow-sm border-start border-4 border-info h-100">
            <Card.Header className="bg-white border-0 pt-4 pb-0">
              <h5 className="fw-bold d-flex align-items-center gap-2"><FaBullhorn className="text-info"/> Announce Update</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleAnnounce} className="d-flex flex-column h-100">
                <Form.Select className="mb-3" value={announceAppId} onChange={(e) => setAnnounceAppId(e.target.value)} required>
                    <option value="">-- Choose an App --</option>
                    {myApps.map(app => <option key={app.id} value={app.id}>{app.name}</option>)}
                </Form.Select>
                <Form.Control as="textarea" className="mb-3 flex-grow-1" placeholder="e.g., Version 2.0 is live!" value={announceMessage} onChange={(e) => setAnnounceMessage(e.target.value)} required style={{ resize: "none" }} />
                <Button type="submit" variant="success" className="fw-bold mt-auto">Send Announcement</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <h4 className="fw-bold mb-3">My Applications</h4>
      <Card className="border-0 shadow-sm overflow-hidden">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="table-light">
            <tr>
              <th className="py-3 px-4">App Name</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-center">Downloads <FaDownload className="text-muted ms-1"/></th>
              <th className="py-3 text-center">Reviews <FaCommentDots className="text-muted ms-1"/></th>
              <th className="py-3 text-end px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myApps.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-4 text-muted">You haven't added any apps yet.</td></tr>
            ) : (
              myApps.map((app) => (
                <tr key={app.id}>
                  <td className="fw-bold px-4">{app.name}</td>
                  <td>
                    <Badge bg={app.isVisible ? 'success' : 'danger'} className="px-2 py-1 bg-opacity-75">
                      {app.isVisible ? 'Public' : 'Hidden'}
                    </Badge>
                  </td>
                  <td className="text-center fw-semibold text-primary">{app.downloadCount || 0}</td>
                  <td className="text-center fw-semibold text-info">{app.reviews ? app.reviews.length : 0}</td>
                  <td className="text-end px-4">
                    <Button as={Link} to={`/edit-app/${app.id}`} variant="outline-dark" size="sm" className="rounded-pill px-3">
                      <FaEdit className="me-1"/> Edit
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default OwnerDashboard;