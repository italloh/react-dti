import React from 'react';
import { Provider } from 'react-redux'
import AppBar from './layout/AppBar'
import store from './store/index'
import './App.css';
import TodoContainer from './todo/todoContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar />
        <p>
          <TodoContainer />
        </p>
      </div>
    </Provider>
  );
}

export default App;
