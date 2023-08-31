// CartPage.js
import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
