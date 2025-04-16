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
Under Development        </p>
        {/*<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>*/}
        {/*  <Col md={4} className="project-card">*/}
        {/*    <ProjectCard*/}
        {/*      // imgPath={Le}*/}
        {/*      isBlog={false}*/}
        {/*      title="Techeazy Website Landing Page"*/}
        {/*      description="A website UI built using typescript."*/}
        {/*      ghLink="https://github.com/DhareshP/UI-design"*/}
        {/*      demoLink="techeazy.vercel.app"*/}
        {/*    />*/}
        {/*  </Col>*/}

        {/*  <Col md={4} className="project-card">*/}
        {/*    <ProjectCard*/}
        {/*      // imgPath={}*/}
        {/*      isBlog={false}*/}
        {/*      title="QuotesApp"*/}
        {/*      description="A live Quote generator, generating new quotes on every click, using the quotable api and Javascript. Options to post the quotes to twitter."*/}
        {/*      ghLink="https://github.com/DhareshP/Quotes-app"*/}
        {/*      demoLink="https://quotes-app-azure.vercel.app/"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </Container>
  );
}

export default Projects;
