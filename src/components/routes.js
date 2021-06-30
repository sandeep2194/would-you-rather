import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PollsList from './pollsList'
import LoginForm from './loginForm'
import Results from './results'
import CreatePoll from './createPoll'
import SignUpForm from './signUp'
import { connect } from 'react-redux'
import LeaderBoard from './leaderBoard'
import FourZeroFour from './404';
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
            <Route path="/home" component={PollsList}>
                {!isLoggedIn && <Redirect to="/login" />}
            </Route>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/create-poll" component={CreatePoll} >
                {!isLoggedIn && <Redirect to="/login" />}
            </Route>
            <Route path="/results/:pollId" component={Results} >
                {!isLoggedIn && <Redirect to="/login" />}
            </Route>
            <Route path="/leader-board" component={LeaderBoard} >
                {!isLoggedIn && <Redirect to="/login" />}
            </Route>
            <Route component={FourZeroFour} />
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