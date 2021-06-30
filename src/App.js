import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes'
import Header from './components/header'
import { handleInitialData } from './actions/initialData'
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Routes />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
