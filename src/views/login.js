import React, { useCallback } from "react";
import firebase from "firebase";
import { Container, Form, Button, Jumbotron } from "react-bootstrap";
import Footer from "../components/footer";

const LoginApp = ({ history }) => {
  const loginUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/profile");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <div className="wrapper">
        <Container>
          {" "}
          <Jumbotron className="text-center">
            <h1>DSSS-APP Login Portal</h1>
            <p>Admin Functions</p>
            <Button
              className=" w-25"
              variant="outline-dark"
              onClick={() => {
                history.push("/");
              }}
            >
              Go to Home
            </Button>
          </Jumbotron>
          <Form onSubmit={loginUser} className="center">
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                id="email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group id="passGrp">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" id="loginBtn">
              Login
            </Button>{" "}
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default LoginApp;
