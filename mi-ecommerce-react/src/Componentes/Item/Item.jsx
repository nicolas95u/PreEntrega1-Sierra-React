import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>ID: {id} </p>
        <p>Precio: {precio} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
     
    </div>
  )
}

export default Item