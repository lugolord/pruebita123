import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

function CartWidget () {
  const { getQuantity } = useContext(cartContext)

  return (
    <Button 
      variant='light'
      as={Link}
      to='/cart'
    >
      🛒 {getQuantity()}
    </Button>
  )
}

export default CartWidget
