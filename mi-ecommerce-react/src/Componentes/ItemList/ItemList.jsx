import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos">
      {productos.map(producto => (
        <Card key={producto.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              Precio: ${producto.precio}
            </Card.Text>
            <Button variant="primary">Ver detalles</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemList;
