import "./styles.css";
import { useState, useRef } from "react";
import Tasklist from "./components/Tasklist";

export default function App() {
  const [taskinput, setInput] = useState("");
  const [editinput, setEditinput] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const dialogRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEChange = (e) => {
    setEditinput(e.target.value);
  };

  const addTask = () => {
    if (taskinput.trim() !== "") {
      setTasklist([...tasklist, { text: taskinput, complete: false }]);
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

  const editTask = (indexval) => {
    setEditIndex(indexval);
    setEditinput(tasklist[indexval].text);
    dialogRef.current?.showModal();
  };

  const confirmEditTask = () => {
    if (editinput.trim() !== "") {
      const newTask = tasklist.map((task, index) => {
        if (index === editIndex) {
          return { ...task, text: editinput };
        }
        return task;
      });
      setTasklist([...newTask]);
      dialogRef.current?.close();
    }
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          name="taskinput"
          id="taskinput"
          value={taskinput}
          placeholder="Enter the task"
          onChange={handleChange}
          autoFocus
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
          editTask={() => editTask(index)}
          complete={list.complete}
        />
      ))}
      <dialog ref={dialogRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            confirmEditTask();
          }}
        >
          <input
            type="text"
            name="editinput"
            id="editinput"
            value={editinput}
            placeholder="Edit the task"
            onChange={handleEChange}
            autoFocus
          />
          <button onClick={confirmEditTask}>Confirm</button>
          <button
            onClick={() => {
              dialogRef.current?.close();
            }}
          >
            Cancel
          </button>
        </form>
      </dialog>
    </div>
  );
}
