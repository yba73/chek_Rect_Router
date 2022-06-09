import React from "react";
import ReactStars from "react-rating-stars-component";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const Filter = (props) => {
  const ratingChanged = (newRating) => {
    props.getRate(newRating);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="filter">
      <div className="search">
        <Button
          style={{ backgroundColor: "#b42f00", borderColor: "#1d1d1d" }}
          variant="primary"
          onClick={handleShow}
        >
          Search
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Search Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                onChange={(e) => props.getSearch(e.target.value)}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Enter Movie Name </Form.Label>

                <Form.Control type="text" placeholder="Enter Movie Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Rating</Form.Label>
                <br />
                <ReactStars
                  className="stars"
                  edit={true}
                  Count={5}
                  isHalf={true}
                  color="black"
                  activeColor="orange"
                  value={1}
                  onChange={ratingChanged}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Filter;
