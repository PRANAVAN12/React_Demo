import React from "react";
import { Card, Col, Row, Tab, Container } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import "./details.css";
import Itinerary from "../shared/Itinerary";
import Overview from "../shared/Overview";
import Charges from "../shared/Charges";

export default function DetailsPage() {
  const [key, setKey] = React.useState("home");
  return (
    <div className="container_details">
      <Row xs={1} md={1}>
        <Col xs={1} md={2}>
          <Card.Img
            variant="top"
            style={{ height: 300, width: 290, borderRadius: 5 }}
            src="images/machu.jpg"
          />
        </Col>
        <Col xs={1} md={4} className="tour_details">
          <Row>
            <Col>
              <h1 className="tour_header">Beach</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Casuarina Beach is in Karainagar, Jaffna District, Sri Lanka,
                about 20 kilometres (12 mi) from Jaffna. The Casuarina Beach in
                Karainagar is also called and written as Casoorina, Cashoorina
                and few other variants. This is considered to be the best beach
                in the Jaffna Peninsula with white sand. The beach got its name
                due to the casuarina trees along the beach.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {Array.from({ length: 4 }).map((_, idx) => (
                <i class="fas fa-star fa-2x" style={{ color: "#ffe000" }}></i>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="tab_items">
        <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="overview" title="Overview">
              <Card>
                <Container className="tabsdetail">
                  <Overview />
                </Container>
              </Card>
            </Tab>
            <Tab eventKey="itenearary" title="Itenearary">
            <Card>
                <Container className="tabsdetail">
              <Itinerary />
              </Container>
              </Card>
            </Tab>
            <Tab eventKey="charges" title="Charges">
            <Card>
                <Container className="tabsdetail">
              <Charges />
              </Container>
              </Card>
            </Tab>
            <Tab eventKey="ratings" title="Ratings">
              dggfhgtygb
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
