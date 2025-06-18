import { produce } from "immer";
import {
  ADD_LOADER_BUTTON,
  REMOVE_LOADER_BUTTON,
  TOGGLE_THEME_MODE,
} from "../constants/uiConstants";

const initialState = {
  loaderBtn: [],
  themeMode: "dark",
};

const uiReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_LOADER_BUTTON:
        if (!draft.loaderBtn.includes(action.payload)) {
          draft.loaderBtn.push(action.payload);
        }
        break;

      case REMOVE_LOADER_BUTTON:
        draft.loaderBtn = draft.loaderBtn.filter(
          (btn) => btn !== action.payload
        );
        break;

      case TOGGLE_THEME_MODE:
        draft.themeMode = draft.themeMode === "light" ? "dark" : "light";
        break;

      default:
        break;
    }
  });

export default uiReducer;
