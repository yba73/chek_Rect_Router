import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const Add = ({ getAdd }) => {
  const [show, setShow] = useState(false);
  const [inputgroup, setInputgroup] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlchange = (e) => {
    setInputgroup({ ...inputgroup, [e.target.name]: e.target.value });
  };

  const wrapper = (e) => {
    listChanged();
    handleClose();
  };

  const listChanged = () => {
    getAdd(inputgroup);
    setInputgroup({
      // title: "Movie Title",
      // etoile: 1,
    });
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "#b42f00", borderColor: "#1d1d1d" }}
        variant="primary"
        onClick={handleShow}
      >
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Movie Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Name"
                autoFocus
                name="title"
                onChange={handlchange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating </Form.Label>
              <Form.Control
                name="rating"
                onChange={handlchange}
                type="email"
                placeholder="Rating out of 10"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Star </Form.Label>
              <Form.Control
                type="email"
                placeholder="Rating out of 5"
                autoFocus
                name="etoile"
                onChange={handlchange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description..."
                rows={3}
                name="description"
                onChange={handlchange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Photo </Form.Label>
              <Form.Control
                type="email"
                placeholder="URL Photo"
                autoFocus
                name="img"
                onChange={handlchange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              getAdd(inputgroup);
              wrapper();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Add;
