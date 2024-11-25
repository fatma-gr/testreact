
import { legacy_createStore } from 'redux';

const initialState = {
  users: [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ],
  message: '',
};
const reducer = (state = initialState, action) => {
  if (action.type === 'SET_MESSAGE') {
    return {
      ...state,
      message: action.payload, 
    };
  }

  return state;
};
const store = legacy_createStore(reducer);

export default store;
