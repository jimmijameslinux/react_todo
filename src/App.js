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
    setTasklist([...tasklist, taskinput]);
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
      {tasklist.map((list, index) => {
        return <Tasklist tasklist={list} key={index} />;
      })}
    </div>
  );
}
