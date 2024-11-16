import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil"
import { todosAtomFamily } from "./todosAtom"
import './App.css'

function App(){
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
    <Todo id={2}/>
  </RecoilRoot>
}

function Todo({id}){
  // const todo = useRecoilValue(todosAtomFamily(id));

  // loadables
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if(todo.state == "loading"){
    return <div>
      Loading...
    </div>
  }
  else if(todo.state == "hasValue"){
      return <div>
      {todo.title}
      {todo.description}
    </div>
  }
  else if(todo.state == "hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }

  
}

export default App