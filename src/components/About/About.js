import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
// import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/home.svg";
import myPic from "../../Assets/avatar3.jpg";
// import Toolstack from "./Toolstack";


import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiDocker,
  DiDjango,
} from "react-icons/di";

import {
  SiPytorch,
  SiMicrosoftazure,
  SiOracle,
  SiPostgresql,
  SiTypescript,
  SiCplusplus,
  SiMicrosoftsqlserver,
  SiAmazonaws,
  SiMongodb,
  SiNeo4J,
  SiElasticsearch,
  SiVuedotjs,
  SiTensorflow,
  SiSpring,
  SiFlask,
  SiQt,
  SiKubernetes,
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGo
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={myPic} alt="about" className="img-fluid" style={{
              maxWidth: "70%",
              height: "auto"
            }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <h2>Languages</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            <p style={{ fontSize: '18px' }}>Python</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJava />
            <p style={{ fontSize: '18px' }}>Java</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <p style={{ fontSize: '18px' }}>JavaScript</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
            <p style={{ fontSize: '18px' }}>TypeScript</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiCplusplus />
            <p style={{ fontSize: '18px' }}>C++</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiGo />
            <p style={{ fontSize: '18px' }}>Golang</p>
          </Col>
        </Row>
        <h2>Frameworks & Libraries</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <p style={{ fontSize: '18px' }}>React</p>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiVuedotjs />
            <p style={{ fontSize: '18px' }}>Vue.js</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
            <p style={{ fontSize: '18px' }}>PyTorch</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
            <p style={{ fontSize: '18px' }}>TensorFlow</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSpring />
            <p style={{ fontSize: '18px' }}>Spring Boot</p>
          </Col>
        </Row>
        <h2>Databases</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
            <p style={{ fontSize: '18px' }}>MySQL</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOracle />
            <p style={{ fontSize: '18px' }}>Oracle DB</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
            <p style={{ fontSize: '18px' }}>PostgreSQL</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftsqlserver />
            <p style={{ fontSize: '18px' }}>SQL Server</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMongodb />
            <p style={{ fontSize: '18px' }}>MongoDB</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNeo4J />
            <p style={{ fontSize: '18px' }}>Neo4J</p>
          </Col>
        </Row>
        <h2>Cloud Services</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftazure />
            <p style={{ fontSize: '18px' }}>Microsoft Azure</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
            <p style={{ fontSize: '18px' }}>AWS</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes />
            <p style={{ fontSize: '18px' }}>Kubernetes</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiElasticsearch />
            <p style={{ fontSize: '18px' }}>ElasticSearch</p>
          </Col>
        </Row>
        <h2>Tools</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            <p style={{ fontSize: '18px' }}>Git</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
            <p style={{ fontSize: '18px' }}>Docker</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFlask />
            <p style={{ fontSize: '18px' }}>Flask</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiDjango />
            <p style={{ fontSize: '18px' }}>Django</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiQt />
            <p style={{ fontSize: '18px' }}>QT-C++</p>
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
            <p style={{ fontSize: '18px' }}>Linux</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
            <p style={{ fontSize: '18px' }}>VS code</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
            <p style={{ fontSize: '18px' }}>Postman</p>
          </Col>
        </Row>
        {/* <Techstack /> */}

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1> */}
        {/* <Toolstack /> */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
