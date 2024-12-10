/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Item ({ item }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button as={Link} to={`/item/${item.id}`}>
            ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item
