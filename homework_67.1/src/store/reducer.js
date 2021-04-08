import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  ADD_COUNTER,
  SUBTRACT_COUNTER,
  FETCH_COUNTER,
  FETCH_COUNTER_SUCCESS,
  FETCH_COUNTER_ERROR,
  SEND_COUNTER_SUCCESS,
} from "./actionTypes";

const initialState = {
  counter: 10,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case ADD_COUNTER:
      return { ...state, counter: state.counter + action.value };
    case SUBTRACT_COUNTER:
      return { ...state, counter: state.counter - action.value };
    case FETCH_COUNTER:
      return { ...state, loading: true };
    case FETCH_COUNTER_SUCCESS:
      return { ...state, counter: action.counter, loading: false };
    case FETCH_COUNTER_ERROR:
      return { ...state, error: action.error, loading: false };
    case SEND_COUNTER_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
