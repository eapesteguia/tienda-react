import React, { useContext } from 'react'
import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CartContext)

    const { id, image, title, description, category, sale, price } = producto

    const handleComprar = (count) => {
        agregarAlCarrito({ ...producto, quantity: count })
    }

    return (
        <div>
            <Card className="itemdetail text-center" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Header>${price} x {sale}</Card.Header>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <ItemCount id={id} handleComprar={handleComprar} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
