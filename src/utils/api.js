import axios from 'axios'

export const getInitialData = async () => {
    const req = await axios({
        method: 'get',
        url: 'http://localhost:5000/',
    });
    return req.data
}

export const createPoll = async (poll) => {
    const req = await axios({
        method: 'post',
        url: 'http://localhost:5000/createPoll',
        data: { ...poll }
    })
    return req.data
}

export const createUser = async (user) => {
    const req = await axios({
        method: 'post',
        url: 'http://localhost:5000/createUser',
        data: { ...user }
    })
    return req.data
}

export const updatePoll = async (body) => {
    const req = await axios({
        method: 'post',
        url: 'http://localhost:5000/updatePoll',
        data: { ...body }
    })
    return req.data
}