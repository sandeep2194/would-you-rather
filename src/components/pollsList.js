import React from 'react'
import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap'
import PollItem from './pollItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const PollsList = (props) => {
    const { polls } = props
    return (
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col lg={5}>
                    <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab" className="mb-3">
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                            {
                                Object.values(polls).length > 0 ?
                                    Object.values(polls).map((poll, i) => (
                                        <PollItem poll={poll} key={i} />
                                    ))
                                    :
                                    <Row className='justify-content-center '>
                                        <span >No Questions</span>
                                        <Link to="/create-poll">
                                            <span className='px-2'> Create a Question</span>
                                        </Link>
                                    </Row>
                            }
                        </Tab>
                        <Tab eventKey="answered" title="Answered Questions">
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ polls }) {
    return {
        polls,
    }
}

export default connect(mapStateToProps)(PollsList)