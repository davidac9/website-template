import React from 'react';
import routes from './routes'
import './App.scss';
import  Nav  from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
