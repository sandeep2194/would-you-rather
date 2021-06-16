import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'

export const PollItem = (props) => {
    return (
        <Container className="border px-0 rounded" >
            <Col className='border rounded-top'>
                <h4 className='m-2 px-3'>User</h4>
            </Col>
            <Row className='justify-content-center align-items-center '>
                <Col className='m-2 px-3 border-right'>
                    <Row className='justify-content-center'>
                        <PersonCircle size={72} />
                    </Row>
                </Col>
                <Col className='m-2 pt-2' sm={8}>
                    <h4>Would you rather?</h4>
                    <Form className='pb-2'>
                        <Form.Check
                            type='radio'
                            id='option1'
                            label='Eat Ice Cream'
                        />
                        <Form.Check
                            type='radio'
                            id='option2'
                            label='Eat Pan Cakes'
                        />
                    </Form>
                    <Button className='mb-2 btn-sm'>View Poll</Button>
                </Col>
            </Row>
        </Container>
    )
}