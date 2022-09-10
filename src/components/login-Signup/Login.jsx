import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import login from "./login6.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-main d-flex justify-content-center  flex-wrap-wrap">
        <Row
          className="overflow-hidden d-flex justify-content-center align-items-center  mt-5"
          style={{ width: "80vw" }}
        >
          <Col>
            <img
              className="img-fluid login-Img "
              src={login}
              alt="ligin-img"
              style={{ width: "30rem" }}
            />
          </Col>

          <Col>
            <Card
              className="login-card"
              border="light"
              style={{ width: "30rem" }}
            >
              <Card.Header className="fs-2 d-flex justify-content-center">
                login
              </Card.Header>
              <Card.Body>
                <Row>
                  <FloatingLabel
                    className="g-3"
                    controlId="floatingInputGrid"
                    label="Email"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel
                    className="g-3"
                    controlId="floatingInputGrid"
                    label="Passowrd"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Row>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between ">
                <Link to="/">
                  <Button className="btn-lg px-5 btn-dark"> login</Button>
                </Link>
                <Link to="/Signup">
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

export default Login;
