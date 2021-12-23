import { ADD, DELETE } from "./list.types";

const State = {
  todo: []
};

const reducer = (state = State, action) => {
  switch (action.type) {
    case ADD: {
      const newTODO = state.todo;
      newTODO.push(action.payload);
      return {
        ...state,
        todo: newTODO
        // [...state.todo,action.payload]
      };
    }
    case DELETE:{
       const newTODO = state.todo;
      newTODO.splice(action.payload,1);
      return {
         ...state,
        todo: newTODO
      };}
    default:
      return state;
  }
};

export default reducer;