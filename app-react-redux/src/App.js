import React from 'react';
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
