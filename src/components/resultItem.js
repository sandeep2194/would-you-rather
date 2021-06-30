import React from 'react'
import { Container, Col, ProgressBar } from 'react-bootstrap'

const Result = (props) => {
    const { option1, option2, results } = props.poll
    const option1Score = results.option1
    const option2Score = results.option2
    const totalScore = option1Score + option2Score
    return (
        <Container className='bg-light'>
            <Col className='py-4 px-2'>
                <h5>{'Would you rather ' + option1 + ' ?'}</h5>
                <ProgressBar now={option1Score / totalScore * 100} />
                <p>{option1Score + ' out of ' + totalScore}</p>
            </Col>
            <Col className='py-4 px-2'>
                <h5>{'Would you rather ' + option2 + ' ?'}</h5>
                <ProgressBar now={option2Score / totalScore * 100} />
                <p>{option2Score + ' out of ' + totalScore}</p>
            </Col>
        </Container>
    )
}

export default Result