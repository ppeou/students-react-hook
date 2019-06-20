import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './redux/store';
import AppNav from './components/AppNav'

function App() {
  return (
    <AppStore>
      <div className="App">
        <AppNav/>
      </div>
    </AppStore>
  );
}

export default App;
