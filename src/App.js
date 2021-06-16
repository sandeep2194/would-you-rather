import React, { Fragment } from 'react'
import { Header } from './components/header'
import { PollsList } from './components/pollsList'

function App() {
  return (
    <Fragment>
      <Header />
      <PollsList />
    </Fragment>
  );
}

export default App;
