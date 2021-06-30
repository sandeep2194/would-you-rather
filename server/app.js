const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

const port = 5000
app.use(cors())
app.use(bodyParser.json())

let data = {
    polls: {
        'abc1': {
            id: 'abc1',
            authorId: "user1",
            option1: "test",
            option2: "asd",
            results: {
                option1: 0,
                option2: 0,
            }
        }
    },
    users: {
        'user1': {
            id: 'user1',
            polls_answered: [],
            polls_created: ['abc1'],
            name: "test user",
            pic: "https://i.ibb.co/drpCp7b/download.jpg"
        }
    },
    leaderBoard: {
        'user1': {
            userId: 'user1',
            score: 0,
        }
    },
}

app.get('/', (req, res) => {
    res.send({ body: data })
})

app.post('/createPoll', (req, res) => {
    const reqData = req.body
    data.polls[reqData.id] = { ...reqData }
    const pollsA = data.users[reqData.authorId].polls_answered
    pollsA.push(reqData.id)
    res.send('success')
})
app.post('/createUser', (req, res) => {
    const reqData = req.body
    data.users[reqData.id] = { ...reqData }
    data.leaderBoard[reqData.id] = { userId: reqData.id, score: 0 }
    res.send('success')
})
app.post('/updatePoll', (req, res) => {
    const reqData = req.body
    let user = data.users[reqData.userId]
    let poll = data.polls[reqData.pollId]
    let leaderBoard = data.leaderBoard[reqData.userId]
    let results = poll.results
    if (reqData.option = 0) {
        results.option1 = results.option1 + 1
    } else if (reqData.option = 1) {
        results.option2 = results.option2 + 1
    }
    poll.results = results
    user.polls_answered = [...user.polls_answered, poll.id]
    leaderBoard.score = leaderBoard.score + 1
    res.send('success')
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})