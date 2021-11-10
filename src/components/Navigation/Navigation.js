import React from "react";
import { Link } from "react-router-dom";
import civilization from "../../images/civilization.jpg";
import structures from "../../images/structures.jpg";
import units from "../../images/units.jpg";
import technologies from "../../images/technology.jpeg";
import  "./Navigation.scss";
import { Carousel } from 'react-bootstrap';


//slidesPlugin(2)
const Navigation = () => {
  return (
    <Carousel className="home__navigation" slide={false} fade={false} pause={false}>
      <Carousel.Item interval={6000}>
        <Link to="/civilizations">
          <img className="d-block w-100" src={civilization} alt="Civilizations"></img>
        </Link>
        <Carousel.Caption>
          <h3>Civilizations</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <Link to="/structures">
          <img className="d-block w-100" src={structures} alt="Structures"></img>
        </Link>
        <Carousel.Caption>
          <h3>Structures</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <Link to="/units">
          <img className="d-block w-100"src={units} alt="Units"></img>
        </Link>
        <Carousel.Caption>
          <h3>Units</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <Link to="/technologies">
          <img className="d-block w-100" src={technologies} alt="Technologies"></img>
        </Link>
        <Carousel.Caption>
          <h3>Technologies</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
};

export default Navigation;
