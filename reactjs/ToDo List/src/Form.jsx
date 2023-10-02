import { useState } from "react"


export function Form(props){


  const [newTask, setNewTask] = useState("")


    const handleSubmit = (e)=> {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.onSubmit(newTask)
    
        setNewTask("")
      }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="task">New Task</label>
      <input type="text" id="task" value={newTask} onChange={e=>setNewTask(e.target.value)} />
    </div>
    <button className="btn" >Add New Task</button>
  </form>
    )
}