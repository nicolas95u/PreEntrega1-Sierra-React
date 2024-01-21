import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error));
  }, [idCategoria]);

  return (
    <div>
      <h2>Mis Productos</h2>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
