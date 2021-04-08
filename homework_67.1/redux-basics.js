const redux = require("redux");

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return {...state, counter: state.counter + 1};
  } else if (action.type === "ADD_COUNTER") {
    return {...state, counter: state.counter + action.value};
  }
  return state;
};

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log("[Subscribe]", store.getState());
});

console.log("Before", store.getState());

store.dispatch({type: "INCREMENT_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 10});

console.log("After", store.getState());