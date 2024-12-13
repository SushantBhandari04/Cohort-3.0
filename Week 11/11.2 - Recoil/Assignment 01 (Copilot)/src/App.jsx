import React from 'react';
import AmazonCheckout from './components/AmazonCheckout';
import { RecoilRoot } from 'recoil';
import './AmazonCheckout.css';

function App() {
  return (
    <RecoilRoot>
      <AmazonCheckout />
    </RecoilRoot>
  );
}

export default App;
