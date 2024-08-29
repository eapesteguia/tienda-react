import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarHeader from './components/NavbarHeader/NavbarHeader'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext'
import Alert from 'react-bootstrap/Alert'
import Checkout from './components/Checkout/Checkout'
import Container from 'react-bootstrap/Container'


function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavbarHeader />
        <Container>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='/*' element={<h1><Alert key='danger' variant='danger'>Error 404 no encontrado</Alert></h1>} />
        </Routes>
        </Container>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
