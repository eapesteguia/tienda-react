import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductos, getProductosPorCategoria } from '../../asyncMock'
import Item from '../Item/Item'
import Alert from 'react-bootstrap/Alert';
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)
  const { categoryName } = useParams()

  useEffect(() => {

    const fetchProductos = async () => {
      if (categoryName) {
        try {
          const res = await getProductosPorCategoria(categoryName)
          setProductos(res)
        } catch (error) {
          setError(error)
        } finally {
          setCargando(false)
        }
      } else {
        try {
          const res = await getProductos()
          setProductos(res)
        } catch (error) {
          setError(error)
        } finally {
          setCargando(false)
        }
      }
    }
    fetchProductos()
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
    <div className='card_list_container'>
      {productos.map((el) => {
        return (
          <Item key={el.id} producto={el} />
        )
      })}
    </div>
  )
}

export default ItemListContainer