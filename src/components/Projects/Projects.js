import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erp from "../../Assets/Projects/erp.png";
import edusense  from "../../Assets/Projects/edusense.png";
import health from "../../Assets/Projects/health.png";

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
              imgPath={edusense}
              isBlog={false}
              title="Edusense - AI Career Coach"
              description=" An AI-powered career coaching platform that helps users with resume building, interview preparation, and industry insights. Features include AI-generated content using Gemini API, secure authentication with Clerk, background jobs via Inngest, and performance tracking dashboards."
              ghLink="https://github.com/yashwinee123/Edusense"
              demoLink="https://edusense.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Personalized Health and Wellness Companion"
              description="AI-driven health and wellness platform that integrates biometric data to deliver personalized fitness, nutrition, and mental well-being recommendations using the MERN stack."
              ghLink="https://github.com/yashwinee123/health-backend "
              demoLink="https://www.linkedin.com/posts/yashwinee-bisen-244033248_internship-activity-7383130554629652480-RC7P"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="Enterprise Resource Planning (ERP) System"
              description="Full-stack ERP web application built  to manage employees, clients, tasks, billing, and role-based access control using the MERN stack."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

