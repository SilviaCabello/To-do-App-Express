import { useState } from "react";
import './App.css';
import Input from './components/Input';
import TaskLIst from './components/TaskList';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleAddTask= (e, task) => {
    e.preventDefault()
    setToDoList((prevState) => [...prevState, task]);
}

  return (
    <div className="App">
      <Input handleAddTask={handleAddTask} />
      <TaskLIst/>   
    </div>
  );
}

export default App;
