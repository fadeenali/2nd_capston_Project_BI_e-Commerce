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
              <div className="fs-2 d-flex justify-content-center">login</div>
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
              <div className="row d-flex justify-content-center border-bottom ">
                <Link to="/">
                  <Button className="col-lg-12 btn-lg px-5 btn-dark">
                    {" "}
                    login
                  </Button>
                </Link>
                <div className="col-lg-12 text-center my-4 ">
                  forget password?{" "}
                </div>
              </div>
              <div className="signuppage row  d-flex justify-content-center  text-center flex-wrap my-3">
                <div className="col-lg-6">
                  <Link to="/Signup">
                    <Button className="px-5 btn-success">
                      create a new account
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
