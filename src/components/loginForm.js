import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import logo from '../logo.svg'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/users'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    state = {
        id: '',
    }
    handleChange = (event) => {
        event.preventDefault()
        const id = event.target.value
        this.setState({ id: id, })
    }
    handleSubmit = (event) => {
        const { dispatch, history } = this.props
        const { id } = this.state
        const back = this.props.location.state.referrer
        event.preventDefault()
        if (id) {
            dispatch(handleLogin(id))
            this.setState({ id: '' })
            history.push(back)
        }
    }
    render() {
        const { users } = this.props
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
                                <h6>Sign In</h6>

                            </Row>
                            <Row className="justify-content-center mt-3">
                                <Form onSubmit={this.handleSubmit}>
                                    <select className='form-control' onChange={this.handleChange}>
                                        <option>Select a User</option>
                                        {
                                            Object.values(users).map((user) => (
                                                <option key={user.id} value={user.id}>
                                                    {user.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <Button type='submit' size='sm' className='btn-block mt-3'>Login</Button>
                                </Form>
                            </Row>
                            <Row className="justify-content-center py-2">
                                <span>Don't have Account ?</span>
                                <Link to="/signup">
                                    <span className='px-2'>SignUp</span>
                                </Link>
                            </Row>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}
export default connect(mapStateToProps)(LoginForm)