import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './ItemList.css'; 

const ItemList = ({ productos }) => {
  const navigate = useNavigate();

  const handleVerDetalles = (id) => {
    
    navigate(`/item/${id}`);
  };

  return (
    <div className="contenedorProductos">
      {productos.map(prod => (
        <Card key={prod.id} className="producto-card">
          <Card.Img variant="top" src={prod.img} className="producto-imagen" />
          <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text>
              Precio: ${prod.precio}
            </Card.Text>
            <Button variant="primary" onClick={() => handleVerDetalles(prod.id)}>
              Ver detalles
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemList;
