import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  POST_NOTE_SUCCESS,
  EDIT_NOTE_ABILITY,
  EDIT_NOTE,
  EDIT_NOTE_SUCCESS,
  CURRENT_VALUE,
  CHANGE_VALUE,
} from "./actionTypes";
import axios from "../axiosNote";

export const inputValue = (value) => {
  return { type: CURRENT_VALUE, value };
};
const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, data };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
const sendPostSuccess = () => {
  return { type: POST_NOTE_SUCCESS };
};
const editPost = () => {
  return { type: EDIT_NOTE };
};
const editPostSuccess = (value) => {
  return { type: EDIT_NOTE_SUCCESS, value };
};
export const editNoteAbility = () => {
  return { type: EDIT_NOTE_ABILITY };
};
export const changeInputValue = (value) => {
  return { type: CHANGE_VALUE, value };
};

export const fetchNotes = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axios.get("notes.json");
      let newNotes = Object.keys(response.data).map((id) => {
        let mark = response.data[id];
        mark.id = id;
        return response.data[id];
      });
      dispatch(fetchSuccess(newNotes));
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const postNote = (data) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axios.post("notes.json", data);
      dispatch(sendPostSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const removeNote = (id) => {
  return async (dispatch) => {
    dispatch(editPost());
    try {
      let response = await axios.delete("/notes/" + id + ".json");
      dispatch(editPostSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const editNote = (id, value) => {
  return async (dispatch) => {
    dispatch(editPost());
    try {
      value = { note: value };
      await axios.patch("/notes/" + id + ".json", value);
      dispatch(editPostSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
