import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'

export const Header = () => {
    return (
        <Navbar bg='light' expand='sm'>
            <Container>
                <Nav>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#home'>New Question</Nav.Link>
                    <Nav.Link href='#home'>Leader Board</Nav.Link>
                </Nav>
                <Navbar className="justify-content-end">
                    <Navbar.Text className='px-3'>
                        Hello User
                    </Navbar.Text>
                    <PersonCircle size={32} />
                    <Nav.Link href='#logout'>Logout</Nav.Link>
                </Navbar>
            </Container>

        </Navbar>
    )
}

