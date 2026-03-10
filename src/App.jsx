import { useSelector, useDispatch } from "react-redux"
import { addTask, deleteTask, completeTask, incompleteTask } from "./TodoSlice";
import { useState } from "react";

const App = () => {

  const [txtval, setTxtVal] = useState("");

  const task = useSelector(state => state.todo.task);

  const dispatch = useDispatch()

  let sno = 0;

  const ans = task.map((key, index) => {

    sno++;

    return (
      <tr
        key={index}
        style={{
          color: key.status ? "red" : "black",
          textDecoration: key.status ? "line-through" : "none"
        }}
      >
        <td>{sno}</td>
        <td>{key.work}</td>

        <td>
          <button onClick={() => dispatch(completeTask(index))}>
            Complete
          </button>
        </td>

        <td>
          <button onClick={() => dispatch(incompleteTask(index))}>
            Incomplete
          </button>
        </td>

        <td>
          <button onClick={() => dispatch(deleteTask(index))}>
            Delete
          </button>
        </td>

      </tr>
    )
  })

  return (
    <>
      <h1>To Do App</h1>

      Enter Task :
      <input
        type="text"
        value={txtval}
        onChange={(e) => setTxtVal(e.target.value)}
      />

      <button onClick={() => {
        dispatch(addTask({ work: txtval }))
        setTxtVal("")
      }}>
        Add Task
      </button>

      <hr />

      <table border="1">

        <tr>
          <th>SNO</th>
          <th>Task</th>
          <th>Complete</th>
          <th>Incomplete</th>
          <th>Delete</th>
        </tr>

        {ans}

      </table>

    </>
  )
}

export default App;