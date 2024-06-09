import "../components/Tasklist.css";

function Tasklist({ tasklist }) {
  return (
    <div className="tasklists">
      <span>{tasklist}</span>
      <div className="btns">
        {/* <button>Edit</button>
        <button>Delete</button>
        <button>Complete</button> */}
      </div>
    </div>
  );
}

export default Tasklist;
