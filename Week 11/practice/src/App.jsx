import { atomFamily, RecoilRoot, selectorFamily, useRecoilValue, useRecoilValueLoadable } from "recoil"
import { TODOS } from "./todos"
import { Suspense } from "react";

function App(){
  return <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
    <Todo id={1}/>
    <Todo id={2}/>
    <Todo id={2}/>
    </Suspense>
  </RecoilRoot>
}

const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: id => async ({get})=> {
      await new Promise(r=>setTimeout(r,3000)); 
      const todo = await fetch(`https://jsonplaceholder.typicode.com/toos/${id}`);
      if(!todo.ok){
        throw new Error("Error");
      }
      const data = await todo.json();
      console.log(data);
      return data;
    }
  })
})

function Todo({id}){
  const todo = useRecoilValueLoadable(todoAtomFamily(id));

  if(todo.state=="hasError"){
    return "Error while fetching."
  }
  else if(todo.state=="hasValue"){
    return <div>
    {todo.contents.title}
  </div>
  }

  
}

export default App