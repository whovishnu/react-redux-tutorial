import { ADD, DELETE } from "./list.types";

export const addNewTODO = (data) => {
  return {
    type: ADD,
    payload: data
  };
};

export const deleteTODO = (index) => {
  return {
    type: DELETE,
    payload: index
  };
};
