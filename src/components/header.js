import React from 'react'
import { Navbar, Nav, Container, Col, Row, Image } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLogout } from '../actions/users'

const Header = (props) => {
    const { user, dispatch } = props
    const logout = () => {
        dispatch(handleLogout())
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home" className='mx-2'>
                            Home
                        </Link>
                        <Link to="/add" className='mx-2' >
                            New Question
                        </Link>
                        <Link to='/leaderboard' className='mx-2'>Leader Board</Link>
                    </Nav>
                    <Col>
                        <Row className="justify-content-end" >
                            <Navbar.Text className='px-3'>
                                Hello,
                                {
                                    user ? ' ' + user.name : ' User'
                                }
                            </Navbar.Text>
                            {
                                user && user.pic ? <Image src={user.pic} alt='profile pic' className='rounded-circle' height={32} width={32} /> :
                                    <PersonCircle size={32} />
                            }
                            {
                                user ? <Nav.Item onClick={logout} className='mx-2 mt-1'>Logout</Nav.Item>
                                    :
                                    <Link to={user ? '#' : '/login'} className='mx-2 mt-1'>
                                        Login
                                    </Link>
                            }


                        </Row>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function mapStateToProps({ users }) {
    const userId = users.authedUser
    return {
        user: userId ? users[userId] : false
    }
}

export default connect(mapStateToProps)(Header)