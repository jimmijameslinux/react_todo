import "../components/Tasklist.css";

function Tasklist({ tasklist, indexval, deleteTask, completeTask, complete }) {
  const editTask = () => {
    console.log("edit task");
  };

  return (
    <div className="tasklists">
      <span>
        <b>{indexval + 1}.</b>
        {complete ? (
          <span>
            <s>{tasklist}</s>
          </span>
        ) : (
          <span>{tasklist}</span>
        )}
      </span>
      <div className="btns">
        <button onClick={editTask}>Edit</button>
        <button onClick={() => deleteTask(indexval)}>Delete</button>
        <button onClick={() => completeTask(indexval)}>Complete</button>
      </div>
    </div>
  );
}

export default Tasklist;
