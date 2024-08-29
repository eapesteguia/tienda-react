import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ordenID, setOrdenID] = useState("")
    const [isSubmiting, setIsSubmiting] = useState(false)

    const { cart, vaciarCarrito } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmiting(true)

        const usuario = {
            nombre,
            mail,
            direccion
        }

        const orden = {
            cart,
            usuario
        }

        const orderRef = collection(db, "ordenes")
        const orderID = await addDoc(orderRef, orden)
        setOrdenID(orderID)

        if (orderID) {
            vaciarCarrito()
            setNombre("")
            setMail("")
            setDireccion("")
            setIsSubmiting(false)
        }
    }

    if (ordenID) {
        return (
                 <div className="checkout_container m-3 p-2 rounded text-center">
                    <h2>¡Gracias por tu compra!</h2>
                    <h4>Tu número de orden es <span className="c-azul-2">{ordenID.id}</span></h4>
                    <p>Volver a la <a href="/">página principal</a></p>
                </div>
         )
    }

    return (
        <div className="checkout_container m-3 p-3 rounded">
            <h3 className="text-center mb-4">Ingresá tus datos para terminar la compra</h3>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <fieldset disabled={isSubmiting}>
                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" placeholder="Ingresá tu nombre y apellido" onChange={(e) => setNombre(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Ingresá tu dirección de email" onChange={(e) => setMail(e.target.value)} />
                        <Form.Text className="text-muted">Nunca vamos a compartir tu dirección de email.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicAddress">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control required type="text" placeholder="Ingresá tu dirección postal" onChange={(e) => setDireccion(e.target.value)} />
                    </Form.Group>
                    <Button className="btn btn-piste" variant="primary" type="submit">
                        Confirmar tu compra!
                    </Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default Checkout
