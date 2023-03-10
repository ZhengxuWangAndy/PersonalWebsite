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
import research from "../../Assets/Projects/research.jpg";

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
        <Row style={{ justifyContent: "center", paddingBottom: "1px" }}>

          {/* project: BU Spark & UmpScores */}
          <Col xs={12} sm={6} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={UmpScores} alt="card-img" />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Software Engineer Intern"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"BU Spark & UmpScores"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {"Provided accurate and transparent season long metrics and individual game performance measurements of baseball games."}
                  <br />
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
          <Col xs={12} sm={6} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={Atos} alt="card-img" style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Data Engineer"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"Atos Technology Co. Ltd"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong style={{ color: "white" }}>
                    {"Back-end: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"Springboot Admin"}</strong>{" starts the "} <strong style={{ color: "limegreen" }}> {"Neo4j and MySql"}</strong> {" databases, "}<strong style={{ color: "limegreen" }}>{"Nacos starts the Java-written RestfulAPI"}</strong>{" processor and data synchronization program, use "}<strong style={{ color: "limegreen" }}>{"docker"}</strong>{" to deploy."}
                  <br />
                  <strong style={{ color: "white" }}>
                    {"Frontend: "}</strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"VUE.js and AntV"}</strong>{" implement multi-level click expansion of nodes in the graph and file jumping."}
                  <br />
                  <strong style={{ color: "white" }}>{"Search Engine:"}</strong>
                  <br />
                  {"Optimized the "}<strong style={{ color: "limegreen" }}>{"ElasticSearch micro-service"}</strong>{", delivering KG-based search and recommendation functionality and implementing a scalable, distributed deployment. Connected the system to "}<strong style={{ color: "limegreen" }}>{"OracleDB"}</strong>{" to provide efficient data management and use "}<strong style={{ color: "limegreen" }}>{"Redis"}</strong>{" to accelerate high concurrency search speed."}
                </Card.Text>
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open("https://docs.google.com/document/d/13vf_hrTjylKOiNNaSsSu66Qfb9WAUkr4M1Uwl7ktNyg/edit?usp=sharing")}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"Demo document"}
                  </Button>
                }
              </Card.Body>
            </Card>
          </Col>

          {/* research project */}
          <Col xs={12} sm={6} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={research} alt="card-img" style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Research Assistant"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"Chinese Academy of Sciences"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <br />
                  {"MRI Brain Image Segmentation Assist Alzheimer’s Diagnosis"}
                  <br />
                  <br />
                  {"Added "}<strong style={{ color: "limegreen" }}>{"Self-Attention and Generalized-Dice Loss to PyTorch-based 3D-Unet model"}</strong>{" to segment the Hippocampus region and automatically quantify the degree of Hippocampal atrophy. The dice coefficient of the segmentation result exceeds 0.9."}
                  <br />
                  <br />
                  {"Completed the visualization of model prediction results using "}<strong style={{ color: "limegreen" }}>{"Matplotlib and FreeSurfer."}</strong>


                </Card.Text>
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open("https://drive.google.com/file/d/1WVqT6weYu9A2P0LqteIFvl5sVO8RiIn8/view")}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"PDF"}
                  </Button>
                }
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open("https://kns.cnki.net/kcms2/article/abstract?v=3uoqIhG8C44YLTlOAiTRKibYlV5Vjs7iJTKGjg9uTdeTsOI_ra5_XaTH7EbalgZBjFBbsEwRY2Nvn0CrlW-IRHBRCWY_UhRB&uniplatform=NZKPT")}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"CNKI"}
                  </Button>
                }
              </Card.Body>
            </Card>
          </Col>

          {/* research project */}
          <Col xs={12} sm={6} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={research} alt="card-img" style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title><strong style={{ color: "white" }}>{"Research Assistant"} </strong>
                  <br />
                  <strong style={{ color: "limegreen" }}>{"Chinese Academy of Sciences"}</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <br />
                  {"MRI Brain Image Segmentation Assist Alzheimer’s Diagnosis"}
                  <br />
                  <br />
                  {"Added "}<strong style={{ color: "limegreen" }}>{"Self-Attention and Generalized-Dice Loss to PyTorch-based 3D-Unet model"}</strong>{" to segment the Hippocampus region and automatically quantify the degree of Hippocampal atrophy. The dice coefficient of the segmentation result exceeds 0.9."}
                  <br />
                  <br />
                  {"Completed the visualization of model prediction results using "}<strong style={{ color: "limegreen" }}>{"Matplotlib and FreeSurfer."}</strong>


                </Card.Text>
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open("https://drive.google.com/file/d/1WVqT6weYu9A2P0LqteIFvl5sVO8RiIn8/view")}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"PDF"}
                  </Button>
                }
                {
                  <Button
                    variant="primary"
                    onClick={() => window.open("https://kns.cnki.net/kcms2/article/abstract?v=3uoqIhG8C44YLTlOAiTRKibYlV5Vjs7iJTKGjg9uTdeTsOI_ra5_XaTH7EbalgZBjFBbsEwRY2Nvn0CrlW-IRHBRCWY_UhRB&uniplatform=NZKPT")}
                    style={{ marginLeft: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"CNKI"}
                  </Button>
                }
              </Card.Body>
            </Card>
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
