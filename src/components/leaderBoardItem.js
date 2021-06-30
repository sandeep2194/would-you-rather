import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { PersonCircle } from 'react-bootstrap-icons'

const LeaderBoardItem = (props) => {
    const { user, totalPolls, board } = props
    const { name, pic, polls_answered } = user
    const unanswered = totalPolls - polls_answered.length
    return (
        <Container className="border px-0 rounded my-3">
            <Row className='py-3'>
                <Col sm={3} className='m-2 px-3 border-right'>
                    <Row className='justify-content-center'>
                        {pic ?
                            <Image src={pic} height={72} width={72} className='rounded-circle' alt='profile pic' />
                            :
                            <PersonCircle size={72} />
                        }
                    </Row>
                </Col>
                <Col className='m-2 px-3 border-right'>
                    <h4>{name}</h4>
                    <h6>{'Answered Questions: ' + polls_answered.length}</h6>
                    <h6>{'Unanswered Questions: ' + unanswered}</h6>
                </Col>
                <Col sm={3} className='my-2'>
                    <h6 className='text-center'>Score</h6>
                    <div className='rounded-circle bg-primary mx-4 py-1'>
                        <h5 className='text-center text-white'>{board.score * 10}</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ users, polls }, props) {
    const user = users[props.board.userId]
    const totalPolls = Object.keys(polls).length
    return {
        user,
        totalPolls
    }
}
export default connect(mapStateToProps)(LeaderBoardItem)