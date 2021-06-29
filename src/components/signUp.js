
import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { handleSignup } from '../actions/users'
import logo from '../logo.svg'
import { connect } from 'react-redux'

class SignUpForm extends React.Component {
    state = {
        name: '',
        pic: '',
    }
    handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { name, pic } = this.state
        const { dispatch, history } = this.props
        dispatch(handleSignup({ name, pic }))
        this.setState({ name: '', pic: '' })
        history.push('/login')
    }
    render() {
        return (
            <Container className='my-5'>
                <Row className="justify-content-center">
                    <Col className='border rounded py-3' lg={5}>
                        <Row className="justify-content-center border-bottom pb-2">
                            <h4>Welcome to Would you rather App</h4>
                        </Row>
                        <Col className='py-3 pb-4'>
                            <Row className="justify-content-center mt-3">
                                <Image src={logo} height={100} />
                            </Row>
                            <Row className="justify-content-center">
                                <h6>Sign Up</h6>

                            </Row>
                            <Row className="justify-content-center mt-3">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Control name="name" placeholder="your name" type="text" value={this.state.name} onChange={this.handleChange} className="my-3" />
                                    <Form.Control name="pic" placeholder="your profile pic url" type="text" value={this.state.pic} onChange={this.handleChange} className="my-3" />
                                    <Button size='sm' type='submit' className='btn-block mt-3'>SignUp</Button>
                                </Form>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(SignUpForm)