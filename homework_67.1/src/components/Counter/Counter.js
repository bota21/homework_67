import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  addCounter,
  subtractCounter,
  fetchCounter,
  sendRequest,
} from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const VALUE = 20;

  const increase = () => dispatch(increaseCounter());
  const decrease = () => dispatch(decreaseCounter());
  const add = (value) => {
    dispatch(addCounter(value));
  };
  const subtract = (value) => {
    dispatch(subtractCounter(value));
  };

  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);

  useEffect(() => {
    return dispatch(sendRequest(counter));
  }, [counter]);

  return (
    <div className='Counter'>
      {loading ? <Spinner /> : null}
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button
        onClick={() => {
          add(VALUE);
        }}>
        Increase by {VALUE}
      </button>
      <button onClick={() => subtract(VALUE)}>Decrese by {VALUE}</button>
    </div>
  );
};

export default Counter;
