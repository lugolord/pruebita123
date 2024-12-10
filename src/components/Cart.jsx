import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCart } from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'

function Cart () {
  const { cart, getTotal } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const name = e.target[1].value
    const phone = e.target[2].value

    const order = {
      buyer: { name, email, phone },
      total: getTotal(),
      items: cart,
      date: serverTimestamp()
    }

    createOrder(order)
  }

  return (
    <div className='d-flex'>
      <ListGroup className='w-50'>
        {cart.map(prod => (
          <ListGroup.Item key={prod.id}>{prod.name} x {prod.qty}</ListGroup.Item>
        ))}
      </ListGroup>

      <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>phone</Form.Label>
          <Form.Control type="text" placeholder="phone" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Cart
