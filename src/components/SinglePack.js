import React from "react";
import { Link } from "react-router-dom";
import "./pack.css";
import { Card, Row, Col, Button } from "react-bootstrap";
function CardItem(props) {
  return (
    <>
      <Row xs={1} md={1} className="g-4" style={{ marginTop: 20 }}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    style={{ height: 170, width: 250 }}
                    src="images/machu.jpg"
                  />
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <h4>Kajurna Beach</h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {Array.from({ length: 4 }).map((_, idx) => (
                            <i
                              class="fas fa-star"
                              style={{ color: "#ffe000" }}
                            ></i>
                          ))}
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Button variant="success" className="highlight_days">
                        3 Nights & 4 Days
                      </Button>
                    </Col>
                  </Row>
                  <Row className="IconsColmn">
                    <Col>
                      <Row>
                        <Col>
                          <i
                            class="fa fa-bed fa-2x"
                            size="6x"
                            aria-hidden="true"
                          ></i>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <span>Hotel</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <i
                            class="fa fa-plane fa-2x"
                            size="6x"
                            aria-hidden="true"
                          ></i>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <span>Tour</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <i
                            class="fa fa-cutlery fa-2x"
                            size="6x"
                            aria-hidden="true"
                          ></i>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <span>Meal</span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col className="ViewClass">
                    <Row>
                    <Col>
                    <Link  to="detailspage">
                      <Button  className="dealView">
                       View Deal
                      </Button>
                      </Link>
                    </Col>
                        </Row>
                    <Row >
                    <Col className="amount">
                   <h3>$6556</h3>
                    </Col>
                        </Row>
               
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CardItem;
