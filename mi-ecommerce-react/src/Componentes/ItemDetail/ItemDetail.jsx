import React from "react";

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla voluptatibus, ducimus facere velit, porro delectus rerum atque, recusandae nisi enim totam corrupti eligendi dicta nihil aliquam et similique minima alias!</p>
        <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail