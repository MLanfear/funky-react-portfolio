import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import sphinx from "src/assets/images/sphinx.jpg";
import notakr from "./images/notakr.jpg";
import passgen from "./images/passgen.jpg";
import zookeepr from "./images/zookeepr.jpg";
import globogains from "./images/globogains.jpg"

function Projects() {
  return (
    <section>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My projects <strong>So Far! </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={10} className="project-card">
            <ProjectCard
              imgPath={globogains}
              isBlog={false}
              title="Globo Gains"
              description="A Gym buddy application made with the GARMEN stack based on the hit movie Dodgeball. Track your progress, share it in the community blog and see our list of recommended workouts! Created with HTML5, CSS3, JavaScript, Bootstrap, MongoDB, React, Apollo, GraphQL and JQuery. "
              link="https://github.com/palminski/perfidious-gains-goblins"
              link2="https://globogains.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sphinx}
              isBlog={false}
              title="The Lair of The Sphinx"
              description="Welcome to the Lair of the Sphinx. Within you will find myriad monsters with which to do battle. Unlike many monsters that will challenge adventurers physically, The ones within the Sphinx's lair challenge explorers mentally. Created with HTML5, CSS3, JavaScript, Bootstrap, Node, BCrypt, Express, MySQL, MySQL2, Sequelize and NanoID"
              link ="https://github.com/MLanfear/The-Lair-of-the-Sphinx"
              link2="https://the-lair-of-the-sphinx.herokuapp.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zookeepr}
              isBlog={false}
              title="Zookeepr App"
              description="Basic app designed for Zookeepers to track their employees and animals currently residing in the zoo. As well as track emotional states and patterns of those animals"
              link="https://github.com/MLanfear/zookeepr"
              link2="https://mlanfear.github.io/zookeepr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passgen}
              isBlog={false}
              title="Password Generator"
              description="Basic password generator that will generate a new randomized password that is saved by the click of a button for later use!"
              link="https://github.com/MLanfear/password-gen"
              link2="https://mlanfear.github.io/password-gen/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notakr}
              isBlog={false}
              title="Notataker"
              description="A node driven application deployed on Github that can be used to create, edit, save and delete notes persistently. Created with HTML5, CSS3, JavaScript, RESTful API's Node, and Express"
              link="https://github.com/MLanfear/Notetaker"
              link2="https://mlanfear.github.io/Notetaker/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;