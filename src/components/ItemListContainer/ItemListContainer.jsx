import React, { useContext, useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import Alert from 'react-bootstrap/Alert'
import { useParams } from "react-router-dom"
import Cart from '../Cart/Cart'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)
  const { categoryName } = useParams()

  const { cart } = useContext(CartContext)
  // console.log("Carrito:", cart)


  useEffect(() => {

    setCargando(true)
    const productosRef = collection(db, "productos")

    if (categoryName) {
      const prodsPorCategoria = query(productosRef, where("category", "==", categoryName))
      getDocs(prodsPorCategoria).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { ...data, id: doc.id }
        })
        setProductos(prods)
      }).finally(setCargando(false))
    } else {
      getDocs(productosRef).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { ...data, id: doc.id }
        })
        setProductos(prods)
      }).finally(setCargando(false))
    }
  }, [categoryName])


  if (cargando) {
    return (
      <h2>
        <Alert key='success' variant='success'>
          Cargando...
        </Alert>
      </h2>
    )
  }

  return (
    <>
      <div className='text-center my-4'>
        <label className="c-verde">Nuestros productos</label>
        <h1><strong>Pistachos y frutos secos sanjuaninos</strong></h1>
        <p>Compras por mayor y menor. Consule por promociones.</p>
      </div>
      <div className='card_list_container'>
        {productos.map((el) => {
          return (
            <Item key={el.id} producto={el} />
          )
        })}
      </div>
    </>
  )
}

export default ItemListContainer