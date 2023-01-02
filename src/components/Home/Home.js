import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBtns from "./HomeBtns";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container  className="home-content">
          <Row>
            <Col md={0} className="home-header">
              <h1 style={{ paddingTop: 30 }} md={0} className="heading">
              <br>
              </br> 
                <strong className="main-name"> Max Lanfear/DaFunk</strong>
              </h1>
              <h1 className="heading-name"> 
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
                
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeBtns />
    </section>
  );
}

export default Home;