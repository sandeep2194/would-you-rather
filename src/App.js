import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes'
import Header from './components/header'

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    </Router>
  );
}

export default App;
