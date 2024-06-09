import "./styles.css";
import { useState } from "react";
import Tasklist from "./components/Tasklist";

export default function App() {
  const [taskinput, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {};
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
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
      <Tasklist tasklist={taskinput} />
    </div>
  );
}
