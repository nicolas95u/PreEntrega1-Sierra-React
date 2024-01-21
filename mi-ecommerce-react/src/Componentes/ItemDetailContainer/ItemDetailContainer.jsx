import React, { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res));
    }, [idItem]);

    return (
        <div>
            {producto ? (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            Precio: ${producto.precio}
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
