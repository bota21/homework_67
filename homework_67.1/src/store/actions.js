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
import axiosCounter from "../axiosCounter";
import axios from "axios";

export const increaseCounter = () => {
  return { type: INCREASE_COUNTER };
};
export const decreaseCounter = () => {
  return { type: DECREASE_COUNTER };
};
export const addCounter = (value) => {
  return { type: ADD_COUNTER, value };
};
export const subtractCounter = (value) => {
  return { type: SUBTRACT_COUNTER, value };
};

const fetchCounterRequest = () => {
  return { type: FETCH_COUNTER };
};
const fetchCounterSuccess = (counter) => {
  return { type: FETCH_COUNTER_SUCCESS, counter };
};
const fetchCounterError = (error) => {
  return { type: FETCH_COUNTER_ERROR, error };
};

const sendCounterSuccess = () => {
  return { type: SEND_COUNTER_SUCCESS };
};

export const fetchCounter = () => {
  return async (dispatch) => {
    dispatch(fetchCounterRequest());
    try {
      const response = await axiosCounter.get("counter.json");
      dispatch(fetchCounterSuccess(response.data));
    } catch (e) {
      dispatch(fetchCounterError(e));
    }
  };
};

let cancelToken;

export const sendRequest = (data) => {
  return async (dispatch) => {
    dispatch(fetchCounterRequest());
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    try {
      await axiosCounter.put("/counter.json", data, {
        cancelToken: cancelToken.token,
      });
      dispatch(sendCounterSuccess());
    } catch (e) {
      dispatch(fetchCounterError(e));
    }
  };
};
