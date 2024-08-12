import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import Boton from '../Boton/Boton'
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ producto, mostrarAnterior, mostrarSiguiente }) => {

    const { id, image, title, description, category, rating, price } = producto

    return (
        <div>
            <Card className="text-center" style={{ width: '28rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Header>Detalle de producto</Card.Header>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Subtitle> ${price} </Card.Subtitle>
                    <Card.Text> {description} </Card.Text>
                    <Button onClick={() => mostrarAnterior()} variant="primary">Anterior</Button>
                    <Button onClick={() => mostrarSiguiente()} variant="primary">Siguiente</Button>
                    <ItemCount id={id} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
