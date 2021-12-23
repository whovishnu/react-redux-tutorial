import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseCounter,
  decreaseCounter
} from "./redux/Counter/counter.action";
import { addNewTODO, deleteTODO } from "./redux/List/list.action";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { todo } = useSelector((state) => state.list);

  return (
    <div className="App">
      <h1>Hello Daffodil</h1>
      <button
        onClick={() => {
          dispatch(increaseCounter());
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch(decreaseCounter());
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          dispatch(addNewTODO(`count_${count}`));
        }}
      >
        insert
      </button>
      <button
        onClick={() => {
          dispatch(deleteTODO(count));
        }}
      >
        delete
      </button>
      <h2> count : {count}</h2>
      {JSON.stringify(todo)}
    </div>
  );
}
