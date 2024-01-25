import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getUnProducto } from "../../asyncmock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then(res => setProducto(res))
      .catch(error => console.log(error));
  }, [idItem]);

  return (
    <div>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
