import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function Addtodo({ addtodo }) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      return (
        alert("Title or Description can not be blank.")
      );
    }
    addtodo(title, desc);
    settitle("");
    setdesc("");
  };

  return (
    <Container className="my-4 border rounded border-dark">
      <Form className="text-center" onSubmit={submit}>
        <Form.Label className="m-3 h5">Add New Todo</Form.Label>
        <Form.Group controlId="Addtodo">
          <Form.Control
            className="mb-3"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="title"
            placeholder="Enter Title"
          />
          <Form.Control
            className="mb-3"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            type="todo"
            placeholder="Enter Todo"
          />
        </Form.Group>
        <Button className="btn-sm m-2" variant="success" type="submit">
          Add Todo
        </Button>
      </Form>
    </Container>
  );
}

export default Addtodo;
