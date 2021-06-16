import React from 'react'
import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap'
import { PollItem } from './pollItem'

export const PollsList = (props) => {
    return (
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col lg={5}>
                    <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab" className="mb-3">
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                            <PollItem />
                        </Tab>
                        <Tab eventKey="answered" title="Answered Questions">
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}