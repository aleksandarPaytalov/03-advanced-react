import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }

  throw new Error(`The action ${action.type} do not exist.`);
};

export default reducer;
