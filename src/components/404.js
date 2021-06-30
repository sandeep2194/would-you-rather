import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const FourZeroFour = (props) => {
    return (
        <Container className='my-5'>
            <Col lg={5}>
                <Row className='justify-content-center'>
                    <h6>Sorry Page not found</h6>
                </Row>
                <Row className='justify-content-center'>
                    <Link to="/" className='mx-3'>Home</Link>
                </Row>
            </Col>
        </Container>
    )
}

export default FourZeroFour