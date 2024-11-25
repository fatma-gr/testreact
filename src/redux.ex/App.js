import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from './store';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const message = useSelector(state => state.message); 

  const handleLogin = (e) => {
    e.preventDefault();
    const users = store.getState().users;
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      store.dispatch({
        type: 'SET_MESSAGE',
        payload: 'valid name et pwd'
      });
    } else {
      store.dispatch({
        type: 'SET_MESSAGE',
        payload: 'Invalid name et password.'
      });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Check User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
