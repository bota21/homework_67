import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  POST_NOTE_SUCCESS,
  EDIT_NOTE,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_ABILITY,
  CURRENT_VALUE,
  CHANGE_VALUE,
} from "./actionTypes";

const initialState = {
  notes: [],
  note: "",
  loading: false,
  error: null,
  canEdit: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_VALUE:
      return { ...state, note: action.value };
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, notes: action.data, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case POST_NOTE_SUCCESS:
      return { ...state, loading: false };
    case EDIT_NOTE:
      return { ...state, canEdit: false, loading: true };
    case EDIT_NOTE_SUCCESS:
      return { ...state, canEdit: true, loading: false };
    case EDIT_NOTE_ABILITY:
      return { ...state, canEdit: false };
    case CHANGE_VALUE:
      return { ...state, canEdit: false };
    default:
      return state;
  }
};

export default reducer;
