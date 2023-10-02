import { useState } from "react"
import "./style.css"
import { Form } from "./Form"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((currentTodos)=>{
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed:false},
      ]
    })
  }

  

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id ){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }


  return (
    <> 
    <Form onSubmit={addTodo}/>
    
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Tasks"}
    {todos.map(todo => {
      if (todo.title !==""){
      return (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} 
          onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
        </label>
    
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
     )}
    })}
  </ul>
  
  </>
 
  )
  
}

export default App
