import React from 'react'
import './ProductCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard( {CardTitle, CardText}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Placeholder" />
        <Card.Body>
            <Card.Title> {CardTitle} </Card.Title>
            <Card.Text> {CardText} </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard
