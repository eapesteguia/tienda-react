import React from 'react'
import './ItemListContainer.css'
import ProductCard from '../ProductCard/ProductCard';
import Alert from 'react-bootstrap/Alert';

const ItemListContainer = ({ saludo }) => {
    return (
    <div>
            <h2>{['success'].map((variant) => (
        <Alert key={variant} variant={variant}>
          {saludo}
        </Alert>
      ))}</h2>
        <div className='card_container'>
            <ProductCard CardTitle={'Producto 1'} CardText={'Producto 1: bueno, bonito y barato que vas a poder comprar en esta tienda hecha con React'} />
            <ProductCard CardTitle={'Producto 2'} CardText={'Producto 2: bueno, bonito y barato que vas a poder comprar en esta tienda hecha con React'} />
            <ProductCard CardTitle={'Producto 3'} CardText={'Producto 3: bueno, bonito y barato que vas a poder comprar en esta tienda hecha con React'} />
        </div>    
    </div>
    )
}

export default ItemListContainer
