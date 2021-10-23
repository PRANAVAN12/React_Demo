import React from "react";

import { Form, Row, Col, Dropdown, Button } from "react-bootstrap";
function FilterBar(props) {
  return (
    <div  style={{marginLeft:255}}>
      <Row>
        <Row xs={1} md={1} style={{ marginRight: 50 }}>
          <Col md={2}>
            <Form.Group
              as={Col}
              controlId="formGridState"
              placeholder="Country"
            >
              <Form.Select>
                <option disabled>Country</option>
                <option>India</option>
                <option>Malaysia</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group
              as={Col}
              controlId="formGridState"
              placeholder="Country"
            >
              <Form.Select>
                <option disabled>Month</option>
                <option>January</option>
                <option>Feburary</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={2}>
          <Form.Group
              as={Col}
              controlId="formGridState"
              placeholder="Duration"
            >
              <Form.Select>
                <option disabled>Duration</option>
                <option>15 Days</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
          <Form.Group
              as={Col}
              controlId="formGridState"
              placeholder="Duration"
            >
              <Form.Select>
                <option disabled>Average Price</option>
                <option>100/=</option>
                <option>150/=</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={1} md={1}>
            <Button variant="secondary">
              <i class="fas fa-search"></i>
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default FilterBar;
