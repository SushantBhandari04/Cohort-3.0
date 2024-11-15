import { useState } from "react"

// Basic todo app using react

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym regularly",
    done: false
  }])

  function addTodo(){
    let newArr = [...todos,{
      title: document.getElementById("title").value,
      description: document.getElementById("description").value
    }]

    setTodos(newArr);
  }

  return ( 
  <div>
    <input type="text" id="title" placeholder="Title" />
    <input type="text" id="description" placeholder="Description" />
    <button onClick={ addTodo }>Add todo</button>
    
    { todos.map((todo) => (
      <Todo 
        title = {todo.title}
        description = {todo.description}
        done = {todo.done}
      />
    ))
    }
  </div>
  );
}

function Todo(props){
  return (
    <div>
      <h2>{ props.title }</h2>
      <h2>{ props.description }</h2>
      <h2>{ props.done? "Task is done" : "Task is not done" }</h2>
    </div>
  )
}

export default App
