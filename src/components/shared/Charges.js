import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import NumericInput from 'react-numeric-input';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Row, Col, Card } from "react-bootstrap";
function Charges(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Row>
        <Form>
          <Row className="mb-3">
            <Col md={2}>
              <Form.Label>Date</Form.Label>
            </Col>
            <Col md={2}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <Form.Label>Rooms</Form.Label>
            </Col>
            <Col md={2}>
            <NumericInput mobile className="form-control" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2} style={{ marginTop: 33 }}>
              <Form.Label>Persons</Form.Label>
            </Col>
            <Col md={2}>
              <Form.Label>Adults</Form.Label>

              <NumericInput mobile className="form-control" />
            </Col>
            <Col md={2}>
              <Form.Label>Child</Form.Label>

              <NumericInput mobile className="form-control" />
            </Col>
            <Col md={2}>
              <Form.Label>Infant</Form.Label>

              <NumericInput mobile className="form-control" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2} style={{ marginTop: 9 }}>
              <Form.Label>Contact Details</Form.Label>
            </Col>
            <Col md={2}>
             

              <Form.Control placeholder="Phone Number" />
            </Col>
            <Col md={2}>
              <Form.Control placeholder="Email" />

            </Col>
              <Row>
              <Col style={{ marginTop: 9,marginLeft:230 }}>
              <p>*Booking Information will be sent to above contact details</p>
              </Col>
          </Row>
          </Row>
        
        </Form>
      </Row>
    </div>
  );
}

export default Charges;
