import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { connect } from 'react-redux'

class PollItem extends React.Component {


    render() {
        const { poll, user } = this.props
        return (
            <Container className="border px-0 rounded" >
                <Col className='border rounded-top'>
                    <h4 className='m-2 px-3'>{user.name + " asks"}</h4>
                </Col>
                <Row className='justify-content-center align-items-center '>
                    <Col className='m-2 px-3 border-right'>
                        <Row className='justify-content-center'>
                            <PersonCircle size={72} />
                        </Row>
                    </Col>
                    <Col className='m-2 pt-2' sm={8}>
                        <h4>Would you rather?</h4>
                        <Form>
                            <Form.Check
                                name='options'
                                type='radio'
                                label={poll.option1}
                                id={poll.option1}
                            />
                            <Form.Check
                                name='options'
                                type='radio'
                                label={poll.option2}
                                id={poll.option2}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
function mapStateToProps({ users }, props) {
    const user = users[props.poll.id]
    return {
        user,
    }
}
export default connect(mapStateToProps)(PollItem)