import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span>Max Lanfear aka DaFunk </span>
            from <span> Eugene, Or</span>
            <br />As a Full Stack Developer I enjoy using a muiltitude of technologies to bring a crisp and quality product to the client. Currently I have completed an intensive Full Stack Coding Certificate at the University of Oregon. I am gaining experience in the foundations of web development while honing my skills in HTML5, CSS, Bootstrap, and JavaScript, jQuery, MERN, MySQL, React and GraphQL.
            <br />
            <br />
            My other interests currently are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Streaming Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching NFL Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Building specialized PC's
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my Son
            </li>
            <li className="about-activity">
              <ImPointRight /> Embarking on new adventures such as coding! 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;