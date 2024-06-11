function Tasklist({
  tasklist,
  indexval,
  deleteTask,
  completeTask,
  editTask,
  complete,
}) {
  return (
    <div className={`tasklists ${complete && "green"}`}>
      <span>
        <b>{indexval + 1}.</b>
        <span>{tasklist}</span>
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
