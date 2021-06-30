import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const Results = (props) => {
    return (
        <Container className='my-5'>
            <Row className="justify-content-center">
                <Col className='border rounded py-3' lg={5}>
                    <Row className="justify-content-start border-bottom pb-2 px-3">
                        <h5>asked By Tyler</h5>
                    </Row>
                    <Col className='py-3 pb-4'>
                        <Row>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
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

function mapStateToProps({ polls }, props) {
    const { pollId } = props.match.params
    return {
        poll: polls[pollId]
    }
}

export default connect(mapStateToProps)(Results)