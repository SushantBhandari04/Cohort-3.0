interface TodoType{
  title: string,
  description: string,
  done: boolean
}

function App(){
  const todo1:TodoType = {
    title: "Gym",
    description: "Gym",
    done: false
    }

  return <div>
    <Todo todo={todo1}/>
  </div>
}


function Todo({todo}:{todo: TodoType}){
  return <div>
    {todo.title}
    {todo.description}
  </div>
}
export default App;