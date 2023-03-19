import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <span className="square border border-5" alt="card-border">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button className="mx-2" variant="secondary" size='sm' href={props.link}  target="_blank">
          {"View Github Repo"}
          </Button>
          <Button className="mx-2" style={{}} size='sm' variant="secondary" href={props.link2} target="_blank">
          {"View Live"}
          </Button>
        </Card.Body>
      </span>
    </Card>
  );
}
export default ProjectCards;