import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { PersonCircle } from 'react-bootstrap-icons'
import Result from './resultItem'
const Results = (props) => {
    const { name, pic } = props.user
    return (
        <Container className='my-5'>
            <Row className="justify-content-center">
                <Col className='border rounded py-3' lg={5}>
                    <Row className="justify-content-start border-bottom pb-2 px-3">
                        <h5>{name + ' asks'}</h5>
                    </Row>
                    <Col className='py-3 pb-4'>
                        <Row className="justify-content-center align-items-center">
                            <Col sm={3} className='m-2 px-3 border-right'>
                                <Row className="justify-content-center">
                                    {pic ?
                                        <Image src={pic} height={72} width={72} className='rounded-circle' alt='profile pic' />
                                        :
                                        <PersonCircle size={72} />
                                    }
                                </Row>
                            </Col>
                            <Col>
                                <Result poll={props.poll} />
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

function mapStateToProps({ polls, users }, props) {
    const { pollId } = props.match.params
    const poll = polls[pollId]
    const user = users[poll.authorId]
    return {
        poll,
        user,
    }
}

export default connect(mapStateToProps)(Results)