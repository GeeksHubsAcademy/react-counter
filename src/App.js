import React from 'react';
import './App.css';
import Counter from './Counter.jsx'
function App() {
  return (
    <div className="App">
     Aplicacion
     <Counter inicial={7} step={2}/>
     <Counter inicial={9}/>
    </div>
  );
}

export default App;
