import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="WeatherApp"
              description="A realtime weather forcast application built using javascript and openweather api."
              ghLink="https://github.com/DhareshP/Weather"
              demoLink="https://weather-zeta-ecru.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="QuotesApp"
              description="A live Quote generator, generating new quotes on every click, using the quotable api and Javascript. Options to post the quotes to twitter."
              ghLink="https://github.com/DhareshP/Quotes-app"
              demoLink="https://quotes-app-azure.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
