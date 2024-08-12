import { useEffect, useState } from "react"
import './ItemDetailContainer.css'
import { getProducto } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Alert from 'react-bootstrap/Alert'
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();
    
    const mostrarSiguiente = () => {
        let ruta = id*1 + 1
        navigate(`/detalle/${ruta}`)
    }
    const mostrarAnterior = () => {
        if(id > 0){
            let ruta = id*1 - 1
            navigate(`/detalle/${ruta}`)
        }   
    }

    useEffect(() => {

        const fetchProducto = async () => {
            try{
                const res = await getProducto(id)
                setProducto(res)
            } catch (error){
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
        <div className="card_detail_container">
        <ItemDetail producto={producto} mostrarAnterior={mostrarAnterior} mostrarSiguiente={mostrarSiguiente}/>
        </div>
    )
}

export default ItemDetailContainer