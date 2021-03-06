import React, { Fragment } from 'react'
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { updatePoll, handlePollToServer } from '../actions/polls'
import { updatePollsAnswered } from '../actions/users'
import { Link } from 'react-router-dom'
import { incrementScore } from '../actions/leaderBoard'

class PollItem extends React.Component {
    state = {
        option1: false,
        option2: true
    }
    handleChange = () => {
        this.setState((prevState) => ({
            option1: !prevState.option1,
            option2: !prevState.option2
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, poll, loggedInUser } = this.props
        const { option1, option2 } = this.state
        let option = null
        if (option1) {
            option = 0
        } else if (option2) {
            option = 1
        }
        dispatch(updatePoll(option, poll.id))
        dispatch(updatePollsAnswered(loggedInUser.id, poll.id))
        dispatch(incrementScore(loggedInUser.id))
        dispatch(handlePollToServer(option, poll.id, loggedInUser.id))
    }
    render() {
        const { poll, user, polls_answered } = this.props
        const { option1, option2 } = this.state
        const { name, pic } = user
        return (
            <Container className="border px-0 rounded my-2" >
                <Col className='border rounded-top'>
                    <h4 className='m-2 px-3'>{name + " asks"}</h4>
                </Col>
                <Row className='justify-content-center align-items-center '>
                    <Col lg={3} className='m-2 px-3 border-right'>
                        <Row className='justify-content-center'>
                            {pic ?
                                <Image src={pic} height={72} width={72} className='rounded-circle' alt='profile pic' />
                                :
                                <PersonCircle size={72} />
                            }
                        </Row>
                    </Col>
                    <Row className='justify-content-center '>
                        <Col className='pt-2'>
                            <Link to={`/questions/${poll.id}`}>
                                <h4>Would you rather?</h4>
                            </Link>
                            <Form onSubmit={this.handleSubmit}>
                                {
                                    !polls_answered.includes(poll.id) ?
                                        <Fragment>
                                            <Form.Check
                                                name='options'
                                                id='option1'
                                                type='radio'
                                                label={poll.option1}
                                                checked={option1}
                                                onChange={this.handleChange}
                                            />
                                            <Form.Check
                                                name='options'
                                                id='option2'
                                                type='radio'
                                                label={poll.option2}
                                                checked={option2}
                                                onChange={this.handleChange}
                                            />

                                        </Fragment> :
                                        <p>.....</p>
                                }
                                {
                                    !polls_answered.includes(poll.id) ?
                                        <Button type='submit' className='my-2'>Submit</Button>
                                        : <Link to={`/results/${poll.id}`}>
                                            <Button type='button' className='my-2'>View Results</Button>
                                        </Link>
                                }
                            </Form>
                        </Col>
                    </Row>
                </Row>
            </Container>
        )
    }
}
function mapStateToProps({ users, polls }, props) {
    const question_id = props.match ? props.match.params.question_id : false
    //  console.log(props.match.params.question_id)
    const pollFromUrl = polls[question_id]
    const user = question_id ? users[pollFromUrl.authorId] : users[props.poll.authorId]
    const userId = users.authedUser
    const loggedInUser = users[userId]
    return {
        user,
        loggedInUser,
        polls_answered: loggedInUser.polls_answered,
        poll: question_id ? pollFromUrl : props.poll
    }
}
export default connect(mapStateToProps)(PollItem)