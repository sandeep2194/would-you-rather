import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PollsList from './pollsList'
import LoginForm from './loginForm'
import Results from './results'
import CreatePoll from './createPoll'
import SignUpForm from './signUp'
import { connect } from 'react-redux'

const routes = (props) => {
    const { isLoggedIn } = props
    return (
        <Switch>
            <Route exact path="/" >
                {
                    isLoggedIn
                        ? <Redirect to="/home" />
                        : <Redirect to='/login' />
                }
            </Route>
            <Route path="/home" component={PollsList}
            />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/create-poll" component={CreatePoll} />
            <Route path="/results/:pollId" component={Results} />
        </Switch>
    )
}
function mapStateToProps({ users }) {
    const userId = users.authedUser
    return {
        isLoggedIn: userId ? true : false
    }
}
export default connect(mapStateToProps)(routes)