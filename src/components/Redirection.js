import React from 'react'
import { Redirect } from 'react-router-dom'

const Redirection = (props) => {
    const { to, back } = props
    return (
        <Redirect to={{
            pathname: to,
            state: { referrer: back }
        }} />
    )
}

export default Redirection