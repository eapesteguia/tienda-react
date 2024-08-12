import React, { useState} from "react"
import Boton from '../Boton/Boton'
import './ItemCount.css'

const ItemCount = (id) => {
    
    const [count, setCount] = useState(1)

    const sumar = () => {
        if(count < 10)
            setCount(count + 1)
    }

    const restar = () => {
        if(count > 1)
            setCount(count -1)
    }

    const comprar = () => {
        console.log(`Compraste ${count} unidades del producto`)
  
    }

return (
    <div className="container">
        <Boton texto="-" variant="secondary" fn={restar} />
        <span>{count}</span>
        <Boton texto="+" variant="secondary" fn={sumar} />
        <Boton texto="Comprar" variant="success" fn={comprar} size="lg" />
    </div>
)
}

export default ItemCount