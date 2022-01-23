import { useCallback, useEffect, useState } from "react";
import Child from "./Components/Child";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [showType, setShowType] = useState("all");

  useEffect(() => {
    setTodo("");
  }, [todoList]);

  const handleItemClick = useCallback(
    (index) => {
      todoList[index] = {
        ...todoList[index],
        complete: !todoList[index].complete
      };
      setTodoList([...todoList]);
    },
    [todoList]
  );

  const handleShowType = (type) => {
    setShowType(type);
  };

  return (
    <div className="App">
      <h2>React Hooks</h2>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() =>
          todo.length && setTodoList([...todoList, { name: todo }])
        }
      >
        Add
      </button>
      <ul>
        {todoList.map((item, index) =>
          showType === "all" ||
          (showType === "complete" && item.complete) ||
          (showType === "uncomplete" && !item.complete) ? (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              style={{
                textDecorationLine: item.complete ? "line-through" : "none"
              }}
            >
              {item.name}
            </li>
          ) : null
        )}
      </ul>
      Show :
      <span
        className={showType === "all" ? "" : "selected"}
        onClick={() => handleShowType("all")}
      >
        All
      </span>
      ,
      <span
        className={showType === "complete" ? "" : "selected"}
        onClick={() => handleShowType("complete")}
      >
        Complete
      </span>
      ,
      <span
        className={showType === "uncomplete" ? "" : "selected"}
        onClick={() => handleShowType("uncomplete")}
      >
        Uncomplete
      </span>
      <Child />
    </div>
  );
}
