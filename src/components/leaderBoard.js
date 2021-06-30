import React from 'react';
import { connect } from 'react-redux'
import LeaderBoardItem from './leaderBoardItem';
import { Col, Row } from 'react-bootstrap'

const LeaderBoard = (props) => {
    const { sortedLeaderBoard } = props;
    return (
        <Row className="justify-content-center">
            <Col lg={5}>
                <Row className="justify-content-center">
                    {
                        sortedLeaderBoard.map((board, i) => (
                            <LeaderBoardItem key={i} board={board} />
                        ))
                    }

                </Row>
            </Col>
        </Row>
    )
}

function mapStateToProps({ leaderBoard }) {
    const sortedLeaderBoard = Object.values(leaderBoard).sort((a, b) => b.score - a.score)
    return {
        sortedLeaderBoard,
    }
}
export default connect(mapStateToProps)(LeaderBoard)