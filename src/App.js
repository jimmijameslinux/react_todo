import "./styles.css";
import { useState } from "react";
import Tasklist from "./components/Tasklist";

export default function App() {
  const [taskinput, setInput] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (taskinput.trim() !== "") {
      setTasklist([...tasklist, { text: taskinput, complete: false }]);
      console.log(tasklist);
      setInput("");
    }
  };

  const deleteTask = (indexval) => {
    const newTask = tasklist.filter((_, index) => index !== indexval);
    setTasklist([...newTask]);
  };

  const completeTask = (indexval) => {
    const newTask = tasklist.map((task, index) => {
      if (index === indexval) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasklist([...newTask]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="taskinput"
          id="taskinput"
          value={taskinput}
          placeholder="Enter the task"
          onChange={handleChange}
        />
        <input onClick={addTask} id="add" type="button" value="Add" />
      </form>
      <h3>Task List</h3>
      {tasklist.map((list, index) => (
        <Tasklist
          key={index}
          tasklist={list.text}
          indexval={index}
          deleteTask={deleteTask}
          completeTask={completeTask}
          complete={list.complete}
        />
      ))}
    </div>
  );
}
