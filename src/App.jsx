import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarHeader from './components/NavbarHeader/NavbarHeader'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarHeader />
      <ItemListContainer saludo={'Bienvenido a la tienda...'}/>
    </>
  )
}

export default App
