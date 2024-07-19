import { Col, Row, Toast } from "react-bootstrap";
import "../../css/custom.css";
import Divider from "../../components/Divider";

function About() {
  return (
    <div className="toast-box">
      <Row>
        <Col>
          <Toast className="toast-dark m-1" key="myself">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Myself</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Name:{" "}
                </strong>
                Carlos Damasio
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Email:{" "}
                </strong>
                carlosadamasio@gmail.com
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  From:{" "}
                </strong>
                Palmela, Portugal
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Located:{" "}
                </strong>
                London, UK
              </p>
            </Toast.Body>
          </Toast>
        </Col>
        <Col>
          <Toast className="toast-dark m-1" key="job">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Job</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Company:{" "}
                </strong>
                Sony Interactive Entertainment
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Role:{" "}
                </strong>
                Senior Platform Engineer
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Fields:{" "}
                </strong>
                Cloud Computing and Data Analytics
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Years Experience:{" "}
                </strong>
                +10
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
              <strong className="me-auto">Stack</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark ">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Areas:{" "}
                </strong>
                Data Visualisation, Data Engineering, AWS, IaC & CI/CD
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Technologies:{" "}
                </strong>
                Terraform, Docker, SQL & NoSQL Databases, Packer, Docker,
                Ansible, React
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Languages:{" "}
                </strong>
                Python, SQL, Golang, JS
              </p>
            </Toast.Body>
          </Toast>
        </Col>
        <Col>
          <Toast className="toast-dark m-1" key="favourites">
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Favourites</strong>
            </Toast.Header>
            <Toast.Body className="toast-dark">
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Books:{" "}
                </strong>
                Lord of The Rings, The Expanse, Freakonomics
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Hobbies:{" "}
                </strong>
                Squash, Gaming, Traveling, Reading, Concerts
              </p>
              <p>
                <strong className="me-auto text-nowrap overflow-hidden">
                  Music:{" "}
                </strong>
                AC/DC, Buddy Rich, Morphine, Tool
              </p>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
export default About;
