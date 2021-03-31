import React, { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";
import Feed from "react-instagram-authless-feed";

/*
Props in this class
- 
*/

const Items = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col lg={4} className="box-shadow-list text-center mb-3 mr-1 ml-1 mt-2">
      <h4>{props.clubName}</h4>
      <Button variant="outline-dark text-center" onClick={handleShow}>
        {props.clubIG}
      </Button>
      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.clubName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>Click the picture to view it on Instagram!</p>
          <Feed
            userName={props.clubIG}
            className="Feed"
            classNameLoading="Loading"
            limit="1"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </Col>
  );
};

export default Items;
