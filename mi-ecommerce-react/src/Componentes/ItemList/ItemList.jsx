import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ productos }) => {
  let navigate = useNavigate();
      const handleOnClick = (producto) => {
        navigate(`/item/${producto.id}`);
      }
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
            <Button variant="primary" onClick={()=>handleOnClick(producto)}>Ver detalles</Button>
          </Card.Body>
        </Card>
      ))}
      
    </div>
  );
}

export default ItemList;
