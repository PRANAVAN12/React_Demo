import React from "react";
import "../../App.css";
import SinglePack from "../../components/SinglePack";
import FilterBar from "../shared/FilterBar";
import { Dropdown, Col, Row, Button } from "react-bootstrap";

export default function Products() {
  return (
    <div className="cards">
      <h1>Explore the world with us</h1>
      <FilterBar />

      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <Row xs={1} md={1} className="g-4" style={{ marginTop: 20 }}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <SinglePack 
               src="images/cherry.jpg"
               title='Japan'
               days='4 Days & 2 Nights'
               amount='550'
                  
                  />
                </Col>
              ))}
            </Row>
          </ul>
        </div>
      </div>
    </div>
  );
}
