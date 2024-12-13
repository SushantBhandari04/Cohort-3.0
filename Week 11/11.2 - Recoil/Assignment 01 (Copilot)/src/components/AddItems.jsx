import React from 'react';
import { useSetRecoilState } from 'recoil';
import { itemAtomFamily } from '../store/itemAtomFamily';

function AddItems() {
  const setItem = useSetRecoilState(itemAtomFamily(Date.now()));

  function addItem() {
    const newItem = {
      id: Date.now(),
      title: "New Item",
      price: 50,
      quantity: 1,
      img: "https://via.placeholder.com/150"
    };
    // Set the new item state using the atom family
    setItem(newItem);
  }

  return (
    <div className="add-items">
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default AddItems;
