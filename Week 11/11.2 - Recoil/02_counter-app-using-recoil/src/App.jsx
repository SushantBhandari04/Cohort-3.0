import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import { counterAtom } from './Store/Atoms/counter';

function App(){
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  return (
    <>
      <CurrentCount/>
      <Increase/>
      <Decrease/>
    </>
  )
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);

  return (
    <h1>{count}</h1>
  )
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(c=>c+1);
  }

  return (
    <button onClick={increase}>Increase</button>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  function decrease(){
    setCount(c=>c-1);
  }

  return (
    <button onClick={decrease}>Decrease</button>
  )
}

export default App