import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarHeader from './components/NavbarHeader/NavbarHeader'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Alert from 'react-bootstrap/Alert';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavbarHeader />
    
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<h1><Alert key='danger' variant='danger'>Error 404 no encontrado</Alert></h1>} />
       
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
