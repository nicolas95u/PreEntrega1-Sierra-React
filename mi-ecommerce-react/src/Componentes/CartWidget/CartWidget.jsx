import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="./img/carrito.png"
        alt="carrito"
        style={{ width: '30px', margin: '20px' }}
      />
      <strong style={{ color: 'black' }}>3</strong>
    </div>
  );
}

export default CartWidget;
