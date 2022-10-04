import React from "react";
import Container from "react-bootstrap/Container";
import Todoitem from "./Todoitem";
import Card from "react-bootstrap/Card";

export default function Todos({ todos, ondelete }) {
  return (
    <Container className="min-vh-100">
      {todos.length === 0 ? (
        <Card className="my-3">
          <Card.Body>There is no Todos present.</Card.Body>
        </Card>
      ) : (
        todos.map((todo) => {
          return <Todoitem todo={todo} key={todo.sr_no} ondelete={ondelete} />;
        })
      )}
    </Container>
  );
}
