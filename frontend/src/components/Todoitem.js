import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Todoitem({ todo, ondelete }) {
  return (
    <Container>
      <Card className="text-center m-3 border-dark">
        <Card.Header className="h6">{todo.title}</Card.Header>
        <Card.Body>
          <Card.Text>{todo.desc}</Card.Text>
          <Button
            variant="danger btn-sm"
            onClick={() => {
              ondelete(todo);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Todoitem;
