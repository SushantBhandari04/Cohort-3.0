import React from 'react';
import { ITEMS } from '../items';
import Item from './Item';

function CartItems() {
  return (
    <div className="cart-items">
      {ITEMS.map(item => (
        <Item key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default CartItems;
