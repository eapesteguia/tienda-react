import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'


const Item = (props) => {

    const { producto } = props
    const { id, image, title, description, category, sale, price } = producto

    return (
        <div>
            <Card className='item' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Header>${price} x {sale}</Card.Header>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Link to={`/detalle/${id}`}><Button className="btn btn-piste" variant="primary">Ver detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
