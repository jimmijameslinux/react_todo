import "../components/Tasklist.css";

const editTask = () => {
  console.log("edit task");
};

const deleteTask = () => {
  console.log("delete task");
};

const completeTask = () => {
  console.log("complete task");
};

function Tasklist({ tasklist }) {
  return (
    <div className="tasklists">
      <span>{tasklist}</span>
      <div className="btns">
        <button onClick={editTask}>Edit</button>
        <button onClick={deleteTask}>Delete</button>
        <button onClick={completeTask}>Complete</button>
      </div>
    </div>
  );
}

export default Tasklist;
