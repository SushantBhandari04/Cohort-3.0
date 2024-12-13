import React from 'react';
import { useRecoilValue } from 'recoil';
import { checkoutSelector } from '../store/checkoutSelector';
import CartItems from './CartItems';
import AddItems from './AddItems';

function AmazonCheckout() {
  const { totalPrice, totalQuantity } = useRecoilValue(checkoutSelector);

  return (
    <div className="checkout">
      <CartItems />
      <div className="summary">
        <h2>Order Summary</h2>
        <p>Items: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
      <AddItems />
    </div>
  );
}

export default AmazonCheckout;
