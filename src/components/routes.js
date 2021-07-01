import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PollsList from './pollsList'
import LoginForm from './loginForm'
import Results from './results'
import CreatePoll from './createPoll'
import SignUpForm from './signUp'
import { connect } from 'react-redux'
import LeaderBoard from './leaderBoard'
import FourZeroFour from './404';
import Redirection from './Redirection'
import PollItem from './pollItem';

const routes = (props) => {
    const { isLoggedIn } = props
    return (
        <Switch>
            <Route exact path="/" >
                {
                    isLoggedIn
                        ? <Redirection to="/home" back='/' />
                        : <Redirection to='/login' back='/' />
                }
            </Route>
            <Route path="/home" component={PollsList}>
                {!isLoggedIn && <Redirection to="/login" back='/home' />}
            </Route>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/add" component={CreatePoll} >
                {!isLoggedIn && <Redirection to="/login" back='/add' />}
            </Route>
            <Route path="/results/:pollId" component={Results} >
                {!isLoggedIn && <Redirection to="/login" />}
            </Route>
            <Route path="/leaderboard" component={LeaderBoard} >
                {!isLoggedIn && <Redirection to="/login" back='/leaderboard' />}
            </Route>
            <Route path="/questions/:question_id" component={PollItem}>
                {!isLoggedIn && <Redirection to="/login" back='/home' />}
            </Route>
            <Route render={(props) => {
                return isLoggedIn ? <FourZeroFour /> : <Redirection to="/login" back={props.location.pathname} />
            }} />
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