import React, { Fragment } from 'react'
import { Header } from './components/header'
import { PollsList } from './components/pollsList'
import { LoginForm } from './components/loginForm'

function App() {
  return (
    <Fragment>
      <Header />
      <LoginForm />
    </Fragment>
  );
}

export default App;
