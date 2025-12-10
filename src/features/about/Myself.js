import { Col, Row, Toast } from "react-bootstrap";
import "../../css/custom.css";
import Divider from "../../components/Divider";
import cvData from "../../assets/cv-data.json";

function About() {
  const personalInfo = cvData.personalInfo || {};
  const currentRole = cvData.experience?.[0] || {};

  return (
    <div className="toast-box">
      <Row>
        <Col>
          <Toast className="toast-dark m-1" key="myself">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Personal Information</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Name:{" "}
                </strong>
                {personalInfo.name || "Carlos Damasio"}
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Email:{" "}
                </strong>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email || "carlosadamasio@gmail.com"}</a>
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Phone:{" "}
                </strong>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone || "+447534255518"}</a>
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Nationality:{" "}
                </strong>
                {personalInfo.nationality || "Portuguese"}
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Currently Located:{" "}
                </strong>
                {personalInfo.location || "London, UK"}
              </p>
            </Toast.Body>
          </Toast>
        </Col>
        <Col>
          <Toast className="toast-dark m-1" key="job">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Current Position</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Company:{" "}
                </strong>
                {currentRole.company || "Sony Interactive Entertainment Europe"}
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Role:{" "}
                </strong>
                {currentRole.jobTitle || "Senior Platform Engineer"}
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Location:{" "}
                </strong>
                {currentRole.location || "London, UK"}
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Years Experience:{" "}
                </strong>
                10+
              </p>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
      <Divider />
      <Row className="justify-content-center align-items-center">
        <Col>
          <Toast className="toast-dark m-1" key="stack">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Primary Skills</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Areas:{" "}
                </strong>
                Business Intelligence, Data Engineering, Platform Engineering, Cloud Infrastructure
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Technologies:{" "}
                </strong>
                Terraform, Ansible, Docker, AWS, Python, Golang, SQL, React, MicroStrategy, Tableau
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Languages:{" "}
                </strong>
                Python, SQL, Golang, JavaScript, Bash
              </p>
            </Toast.Body>
          </Toast>
        </Col>
        <Col>
          <Toast className="toast-dark m-1" key="languages">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Languages</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Portuguese:{" "}
                </strong>
                Native
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  English:{" "}
                </strong>
                Fluent
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Spanish:{" "}
                </strong>
                Conversational
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Date of Birth:{" "}
                </strong>
                19th August 1987
              </p>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
export default About;
