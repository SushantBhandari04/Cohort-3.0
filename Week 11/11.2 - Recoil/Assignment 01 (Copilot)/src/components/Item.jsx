import React from 'react';
import { useRecoilState } from 'recoil';
import { itemAtomFamily } from '../store/itemAtomFamily';

function Item({ id }) {
  const [item, setItem] = useRecoilState(itemAtomFamily(id));

  function increase() {
    setItem((currentItem) => ({
      ...currentItem,
      quantity: currentItem.quantity + 1,
    }));
  }

  function decrease() {
    setItem((currentItem) => ({
      ...currentItem,
      quantity: currentItem.quantity > 0 ? currentItem.quantity - 1 : 0,
    }));
  }

  return (
    <div className="item">
      <img src={item.img} alt={item.title} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div className="quantity">
          <button onClick={decrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
