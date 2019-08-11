import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

// We created a high order function due to the fact that we're using redux-thunk
// We're doing a curry/closure

/**
 * Out of the box, redux wouldn't understand this because we're not returning an object
 * as it expects for an action. We're returning a function and this functions, isn't going
 * to mean anything to it.
 *
 * By adding redux-thunk middleware, we're now listening to actions and anytime the requestRobots
 * action gets triggered it's going to return a function and trigger redux-thunk and redux-thunk
 * is going to say: Oh, this is a function I'm going to give you, here is the dispatch so you can
 * actually call some actions, and we can finally run our actions like this.
 */
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err }));
};
