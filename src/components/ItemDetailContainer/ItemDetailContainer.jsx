import { useEffect, useState } from "react"
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Alert from 'react-bootstrap/Alert'
import { useNavigate, useParams } from "react-router-dom"
import { db } from '../../services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const productoRef = doc(db, "productos", id)
                const res = await getDoc(productoRef)
                const data = res.data()
                const productoFormateado = { ...data, id: res.id }
                setProducto(productoFormateado)

            } catch (error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }
        fetchProducto()
    }, [id])

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
                <h1><strong>Los <span className="c-verde">mejores productos</span> de San Juan</strong></h1>
            </div>
            <div className="card_detail_container">
                <ItemDetail producto={producto} />
            </div>
        </>
    )
}

export default ItemDetailContainer