import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";  
import { FaStackOverflow } from "react-icons/fa"

function HomeBtns() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={0} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span> Me </span> 
            </h1>
            <p className="home-about-body" style={{fontSize: "2.2em "}}>
              I am a developer with a focus on learning new technologies
                            <br />
              <br />I am fluent in
                <b> Javascript and the GARMEN Stack </b>
              <br />
              <br />
              My interests are building new&nbsp;
                <b>web technologies and products </b>
                in areas related to creating better tools for people.
              <br />
              <br />
              I also apply my passion for developing with <b>Node.js</b> and<b>
              &nbsp;Javascript Frameworks
                </b>
              &nbsp;like
                <b> React.js</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>Email - MaxJLanfear@gmail.com </p>   
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MLanfear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/max-lanfear-b7a4b6175/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/20908212/dafunk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                  </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBtns;