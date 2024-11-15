import './App.css'
import { useSetRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { counterAtom, evenSelector } from './Store/counter'

function App(){

  return <div>
    <RecoilRoot>
      <Buttons/>
      <Count/>
      <IsEven/>
    </RecoilRoot>
  </div>
  
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={ ()=>setCount(c=>c+2) }>Increase</button>
      <button onClick={ ()=>setCount(c=>c-1) }>Decrease</button>
    </div>
  )
}

function Count(){
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function IsEven(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "Even" : "Odd"}
  </div>
}

export default App