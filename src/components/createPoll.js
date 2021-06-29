import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleCreatePoll } from '../actions/polls'

class CreatePoll extends React.Component {
    state = {
        option1: '',
        option2: ''
    }
    handleChange = (event) => {
        event.preventDefault()
        const option = event.target.name
        const value = event.target.value
        this.setState({
            [option]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { option1, option2 } = this.state
        const { dispatch, history, users } = this.props
        if (option1 && option2) {
            dispatch(handleCreatePoll({
                option1,
                option2,
            }, users.authedUser))
        }
        this.setState({ option1: '', option2: '' })
        history.push('/home')
    }
    render() {
        const { option1, option2 } = this.state
        return (
            <Container className='my-5' >
                <Row className="justify-content-center">
                    <Col className='border rounded py-3' lg={5}>
                        <Row className="justify-content-center border-bottom pb-2 px-3">
                            <h4>Create New Question</h4>
                        </Row>
                        <Col className='py-3 pb-4'>
                            <Row className="justify-content-start pl-3 pt-3">
                                <Col>
                                    <p>Complete the question:</p>
                                    <h4>Would you rather...</h4>
                                </Col>
                            </Row>
                            <Form onSubmit={this.handleSubmit}>
                                <Col className='py-3'>
                                    <Form.Control name="option1" placeholder="Option 1" value={option1} onChange={this.handleChange} />
                                </Col>
                                <Row className="justify-content-center">
                                    <h5>------ OR ------</h5>
                                </Row>
                                <Col className='py-3'>
                                    <Form.Control name="option2" placeholder="Option 2" value={option2} onChange={this.handleChange} />
                                </Col>
                                <Col className='py-3'>
                                    <Button type='submit' className='btn-block'>Submit</Button>
                                </Col>
                            </Form>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container >
        )
    }
}
function mapStateToProps({ users }) {
    return {
        users,
    }
}
export default connect(mapStateToProps)(CreatePoll)