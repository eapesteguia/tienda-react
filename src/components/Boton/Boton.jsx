import { useState } from 'react'
import './Boton.css'
import Button from 'react-bootstrap/Button'

const Boton = ({texto, fn, variant}) => {

    return (
        <>
            <Button variant={variant} onClick={ () => fn() } > {texto} </Button>
        </>
    )
}

export default Boton