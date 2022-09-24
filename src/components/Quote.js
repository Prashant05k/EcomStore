import Card from "react-bootstrap/Card";

function Quote() {
  return (
    <div className="container">
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Simplicity is the ultimate sophistication.{" "}
          </p>
          <footer className="blockquote-footer">
          Leonardo da Vinci
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Quote;
