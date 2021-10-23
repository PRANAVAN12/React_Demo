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
            <SinglePack
              src="images/cherry.jpg"
              text="The Cherry Blossom season in Japan 
                        is an extremely beautiful site and it is 
                        an ideal time to visit the country."
              label="Japan"
              path="/packages"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
