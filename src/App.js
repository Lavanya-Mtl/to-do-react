import Form from "./components/Form";
import Todo from "./components/Todo"
import {nanoid} from "nanoid";
import {useState} from 'react';
const DATA = [
  {id: 'task-1', task: 'Learn React', isComplete: false},
  {id: 'task-2', task: 'Check Email', isComplete: true},
  {id: 'task-3', task: 'Have Dinner', isComplete: false}
];

function App() {
  const [tasks, setTasks] = useState(DATA);
  function addTask(task) {
    //alert(task);
    const newTask = {id:`todo-${nanoid()}`,task,isComplete: false};
    setTasks([...tasks,newTask]);
  }
  function toggleCheckbox(id) {
    const updatedTasks = tasks.map((task)=>{
        if(task.id === id) {
          return {...task, isComplete: !task.isComplete}
        }
        return task;
    });
    setTasks(updatedTasks);
    
  }
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task)=>id!==task.id);
    setTasks(updatedTasks);
  }
return (
  <div>
    <h1>To do</h1>
    <Form addTask={addTask}/>
    <ul>
      {
      tasks.map((todo)=> {
        return(
        <Todo id={todo.id} task={todo.task} isComplete={todo.isComplete} key={todo.id} toggleCheckbox={toggleCheckbox} delTask={deleteTask}/>
        );
      })
    }
    </ul>
  </div>
);
}

export default App;
