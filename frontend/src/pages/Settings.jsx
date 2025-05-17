import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

const Settings = () => {
  return (
    <div className="mt-5 p-5">
      <h5 className="fw-semibold mb-4">Privacy Settings</h5>

      <Card className="mb-4 border-0 shadow-sm rounded-4 p-3 bg-white">
        <Card.Body>
          <h6 className="fw-semibold mb-3">Account Information</h6>

          <Row className="mb-3 align-items-center">
            <Col md={8}>
              <strong>Email Address</strong>
              <div className="text-muted">example@email.com</div>
            </Col>
            <Col md={4} className="text-md-end mt-2 mt-md-0">
              <Button variant="outline-primary" className="rounded-pill px-4">
                Change
              </Button>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={8}>
              <strong>Password</strong>
              <div className="text-muted">Last changed 30 days ago</div>
            </Col>
            <Col md={4} className="text-md-end mt-2 mt-md-0">
              <Button variant="outline-primary" className="rounded-pill px-4">
                Update
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
        <Card.Body>
          <h6 className="fw-semibold mb-3">Privacy Preferences</h6>

          <Row className="mb-3 align-items-center">
            <Col md={8}>
              <strong>Usage Analytics</strong>
              <div className="text-muted small">
                Allow McCarthy to collect data on which tools you use to improve
                recommendations.
              </div>
            </Col>
            <Col md={4} className="text-md-end mt-2 mt-md-0">
              <Form.Check
                type="switch"
                id="analytics-switch"
                checked={true}
                onChange={() => {}}
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={8}>
              <strong>Save Search History</strong>
              <div className="text-muted small">
                Lets us remember your searches to make finding tools easier next
                time.
              </div>
            </Col>
            <Col md={4} className="text-md-end mt-2 mt-md-0">
              <Form.Check
                type="switch"
                id="history-switch"
                checked={true}
                onChange={() => {}}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
