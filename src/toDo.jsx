import React, { useState } from "react";
import { addTask, removeTask, changeTask } from "./todo/ToDo.slice";
import todoReducer from "./todo/ToDo.slice";
import { store } from "./store/store";
import { useDispatch, useSelector } from "react-redux";

function ToDo() {
  const lists = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div id='list'>
      <h1>TODO</h1>
      <ul>
        {lists.map((list, index) => {
          return (
            <div key={list.id}>
              <li
                style={
                  list.isDone
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {index + 1} - {list.name}
              </li>
              <button onClick={() => dispatch(removeTask(list.id))}>
                Remove
              </button>
              <button onClick={() => dispatch(changeTask(list.id))}>
                Done
              </button>
            </div>
          );
        })}
      </ul>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={() => dispatch(addTask(value))}>Add</button>
    </div>
  );
}
export default ToDo;
