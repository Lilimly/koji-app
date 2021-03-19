import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import './css/App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;
