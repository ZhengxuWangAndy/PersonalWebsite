import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import UmpScores from "../../Assets/Projects/UmpScores.png";
import suicide from "../../Assets/Projects/suicide.png";
import Atos from "../../Assets/Projects/Atos.png";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

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

          {/* project: BU Spark & UmpScores */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={UmpScores} alt="card-img" />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Software Engineer Intern"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"BU Spark & UmpScores"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong style={{ color: "white" }}>
                    {"Front-end: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>
                    {"React-redux"}</strong> {" ("} <strong style={{ color: "limegreen" }}>{"JavaScript"} </strong>{" Framework). "}
                  {"Create a new table get backend"} <strong style={{ color: "limegreen" }}>{"RestfulAPI"}</strong>{" data. "}

                  <br />
                  <strong style={{ color: "white" }}>
                    {"Back-end: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>
                    {"Flask (Python) "}</strong>{"with data stored in "}<strong style={{ color: "limegreen" }}>{"AWS. "}</strong>

                  {"Update the back-end using newer libraries make the app more scalability."}
                </Card.Text>
                {
                  <Button
                    variant="primary"
                    href={"https://www.umpscores.com/"}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"Website"}
                  </Button>
                }
              </Card.Body>
            </Card>
          </Col>

          {/* project: Atos work */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={Atos} alt="card-img" />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Data Engineer"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"Atos Technology Co. Ltd"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong style={{ color: "white" }}>
                    {"Front-end: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>
                    {"React-redux"}</strong> {" ("} <strong style={{ color: "limegreen" }}>{"JavaScript"} </strong>{" Framework). "}
                  {"Create a new table get backend"} <strong style={{ color: "limegreen" }}>{"RestfulAPI"}</strong>{" data. "}

                  <br />
                  <strong style={{ color: "white" }}>
                    {"Back-end: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>
                    {"Flask (Python) "}</strong>{"with data stored in "}<strong style={{ color: "limegreen" }}>{"AWS. "}</strong>

                  {"Update the back-end using newer libraries make the app more scalability."}
                </Card.Text>

                {"\n"}
                {"\n"}
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open(Atos)}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"Open Image"}
                  </Button>
                }
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
