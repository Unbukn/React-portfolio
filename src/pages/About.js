import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://imgur.com/cAa1adD.jpg">
        {/* <h3>Greetings, I'm</h3>
        <h4>A FULL STACK DEVELOPER</h4> */}
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Mr. Hudgins is a driven System Design Engineer with over six years of experience in system design, software development, testing, certification, and functional audit support to several significant United States Navy submarine programs.Mr. Hudgins is committed to solving problems even when presented with complex challenges introduced by working in unique environments.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
