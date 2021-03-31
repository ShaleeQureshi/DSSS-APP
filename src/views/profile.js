import React, { useEffect } from "react";
import {
  Form,
  Button,
  Table,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import firebase from "firebase";
import Footer from "../components/footer";
import readData from "../scripts/functions/retrieve";

const ProfileApp = () => {
  useEffect(() => {
    readData();
  });
  const update = (event) => {
    event.preventDefault();
    var clubName = document.getElementById("clubName").value;
    var clubIG = document.getElementById("clubIG").value;
    var node = "clubs";

    firebase
      .database()
      .ref(`/${node}/${clubName}`)
      .update({
        clubName: clubName,
        clubIG: clubIG,
      })
      .then(() => {
        document.getElementsByTagName("table")[0].innerHTML = "";
        readData();
        document.getElementById("clubName").value = "";
        document.getElementById("clubIG").value = "";
      })
      .catch((error) => {
        alert(error);
      });
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You have been signed out");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="wrapper">
        <Container>
          <Jumbotron className="text-center">
            <h1>DSSS-APP Portal</h1>
            <p>Update / Query Database from here securely!</p>
            <Button
              className=" w-25"
              variant="outline-dark"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </Jumbotron>
          <Row className="mt-5">
            <Col>
              <Form onSubmit={update}>
                <h3>Update Database</h3>
                <Form.Group>
                  <Form.Label>Club Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter club name"
                    id="clubName"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Club Instagram Handle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Club Instagram Handle"
                    id="clubIG"
                  />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                  Update Database
                </Button>
              </Form>
            </Col>
            <Col>
              <span>
                {" "}
                <h3>Current Dataset</h3>
              </span>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Club Name</th>
                    <th>Club Instagram Name</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default ProfileApp;
