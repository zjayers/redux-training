import reducer from './reducer';

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // Call The Reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribers
    listeners.forEach((listener) => {
      listener();
    });
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
