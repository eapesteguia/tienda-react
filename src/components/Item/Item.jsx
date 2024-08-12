import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';


const Item = (props) => {

    const { producto } = props
    const { id, image, title, description, category, rating, price } = producto

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Subtitle> ${price} </Card.Subtitle>
                    <Card.Text> {description} </Card.Text>
                    <Link to={`/detalle/${id}`}><Button variant="primary">Ver detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
