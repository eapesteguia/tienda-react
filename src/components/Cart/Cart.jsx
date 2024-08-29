import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import './Cart.css'

const Cart = () => {

  const { cart, vaciarCarrito } = useContext(CartContext)

  const carritoAgrupado = cart.reduce((acc, curr) => {
    const cantidadDeItems = acc.findIndex(producto => producto.id === curr.id)
    if (cantidadDeItems !== -1) {
      acc[cantidadDeItems].quantity += curr.quantity
    } else {
      acc.push({...curr})
    }
    return acc
  }, [])

  return (
    <>
      <div className="cart_container">
        {
          carritoAgrupado?.map(e => {
            return (
              <CartItem key={e.id} producto={e} cantidad={e.quantity} />
            )
          })
        }
      </div>
      <div align="center">
        {cart.length > 0 && <Button className='mx-2' variant="secondary" onClick={vaciarCarrito}>Vaciar carrito</Button>}
        {cart.length > 0 ? <Button className='mx-2' as={Link} to="/checkout" variant="success">Finalizar compra</Button>
          : <h2><Alert key='success' variant='danger'>Tu carrito está vacío</Alert></h2>}
      </div>
    </>
  )

}

export default Cart