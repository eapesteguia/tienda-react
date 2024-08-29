import {useState, useContext} from 'react';
import Boton from '../Boton/Boton'
import './ItemCount.css'
import Button from 'react-bootstrap/Button'
import {CartContext} from '../../context/CartContext';

const ItemCount = ({id, handleComprar}) => {
    
    const { mostrarCantidad } = useContext(CartContext)

    const [count, setCount] = useState(1)

    const sumar = () => {
        if(count < 10)
            setCount(count + 1)
    }

    const restar = () => {
        if(count > 1)
            setCount(count -1)
    }

return (
    <div>
        <p>Cantidad:</p>
        <Boton texto="-" variant="secondary" fn={restar} />
        <span className="px-2" >{count}</span>
        <Boton texto="+" variant="secondary" fn={sumar} />
        <div>
        <Button className="btn btn-piste px-5 my-3" onClick={()=> handleComprar(count)} variant="success">Comprar</Button>
        </div>
    </div>
)
}

export default ItemCount