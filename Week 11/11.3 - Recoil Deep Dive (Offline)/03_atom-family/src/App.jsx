import { RecoilRoot, useRecoilValue } from "recoil"
import { todosAtomFamily } from "./atomFamily"
import './App.css'

function App(){
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
    <Todo id={2}/>
  </RecoilRoot>
}

function Todo({id}){
  const todo = useRecoilValue(todosAtomFamily(id));

  return <div>
    {todo.title}
    {todo.description}
  </div>
}

export default App