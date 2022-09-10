import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import login from "./login6.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="signup-main d-flex justify-content-center  flex-wrap-wrap">
        <Row
          className="overflow-hidden d-flex justify-content-center align-items-center  mt-5"
          style={{ width: "80vw" }}
        >
          <Col>
            <img
              className="img-fluid signup-Img "
              src={login}
              alt="ligin-img"
              style={{ width: "30rem" }}
            />
          </Col>

          <Col>
            <Card
              className="signup-card"
              border="light"
              style={{ width: "30rem" }}
            >
              <Card.Header className="fs-2 d-flex justify-content-center ">
                Signup
              </Card.Header>
              <Card.Body>
                <Row className="mb-4">
                  <Col className="sm-12">
                    <FloatingLabel controlId="floatingInputGrid" label="Name">
                      <Form.Control type="name" placeholder="Name" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="DOB">
                      <Form.Control type="date" placeholder="DOB" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="">
                  <Col className="">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Email address"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col className="">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Phone no."
                    >
                      <Form.Control type="number" placeholder="12345 67890" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <FloatingLabel
                    className="g-3"
                    controlId="floatingInputGrid"
                    label="Address"
                  >
                    <Form.Control type="Address" placeholder="Address" />
                  </FloatingLabel>
                  <FloatingLabel
                    className="g-3"
                    controlId="floatingInputGrid"
                    label="Land mark"
                  >
                    <Form.Control type="Address" placeholder="Address" />
                  </FloatingLabel>
                  <FloatingLabel
                    className="g-3"
                    controlId="floatingInputGrid"
                    label="password"
                  >
                    <Form.Control type="password" placeholder="password" />
                  </FloatingLabel>
                </Row>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Link to="/">
                  <Button className="btn-lg px-5 btn-dark"> Signup</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Signup;
