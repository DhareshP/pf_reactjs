import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Dharesh Polishi </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            <br />
            I am pursuing a degree in Computer Science from MIT
            World Peace University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Calisthenics
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Push your limits and build something that will make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dharesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
