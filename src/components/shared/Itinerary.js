import React from "react";

import { Accordion, Row, Col, Card } from "react-bootstrap";
function Itinerary(props) {
  return (
    <div>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Day #1</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xs={3}>
                    <Card.Img
                      variant="top"
                      style={{ height: 170, width: 250 }}
                      src="images/machu.jpg"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h3>Trevi Fountain of Rome</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 10 }}>
                      <Col md={1}>
                        <i
                          class="fa fa-bed fa-2x"
                          size="6x"
                          aria-hidden="true"
                        ></i>
                      </Col>
                      <Col md={2}>
                        <h6 style={{ marginLeft: -35, marginTop: 5 }}>
                          {" "}
                          Donna Laura Palace
                        </h6>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 10 }}>
                      <Col md={1}>
                        <i
                          class="fa fa-cutlery fa-2x"
                          size="6x"
                          aria-hidden="true"
                        ></i>
                      </Col>
                      <Col md={2}>
                        <h6 style={{ marginLeft: -35, marginTop: 5 }}>
                          {" "}
                          Food , Lunch & Dinner
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Day #2</Accordion.Header>
              <Accordion.Body>
              <Row>
                  <Col xs={3}>
                    <Card.Img
                      variant="top"
                      style={{ height: 170, width: 250 }}
                      src="images/machu.jpg"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h3>Trevi Fountain of Rome</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 10 }}>
                      <Col md={1}>
                        <i
                          class="fa fa-bed fa-2x"
                          size="6x"
                          aria-hidden="true"
                        ></i>
                      </Col>
                      <Col md={2}>
                        <h6 style={{ marginLeft: -35, marginTop: 5 }}>
                          {" "}
                          Donna Laura Palace
                        </h6>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 10 }}>
                      <Col md={1}>
                        <i
                          class="fa fa-cutlery fa-2x"
                          size="6x"
                          aria-hidden="true"
                        ></i>
                      </Col>
                      <Col md={2}>
                        <h6 style={{ marginLeft: -35, marginTop: 5 }}>
                          {" "}
                          Food , Lunch & Dinner
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default Itinerary;
