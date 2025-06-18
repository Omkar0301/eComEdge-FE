import { produce } from "immer";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from "../constants/userConstants";

const initialState = {
  data: [],
  error: null,
};
const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        draft.data = action.payload;
        draft.error = null;
        break;

      case FETCH_DATA_FAILURE:
        draft.error = action.payload;
        break;

      default:
        break;
    }
  });

export default userReducer;
