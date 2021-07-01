import { v4 as uuidv4 } from 'uuid';
import { updatePollsCreated } from './users';
import { createPoll as postPoll } from '../utils/api';
import { updatePoll as updateToServer } from '../utils/api'

export const CREATE_POLL = 'CREATE_POLL'
export const UPDATE_POLL = 'UPDATE_POLL'
export const INIT_POLL = 'INIT_POLL'

export function initPoll(polls) {
    return {
        type: INIT_POLL,
        polls,
    }
}
export function handlePollToServer(option, pollId, userId) {
    return (dispatch) => {
        updateToServer({ option, pollId, userId })
    }
}
function createPoll(options, Id, authorId, timestamp) {
    return {
        type: CREATE_POLL,
        options,
        Id,
        authorId,
        timestamp,
    }
}

export function updatePoll(option, pollId) {
    return {
        type: UPDATE_POLL,
        option,
        pollId,
    }
}

export function handleCreatePoll(options, authorId) {
    const Id = uuidv4();
    const timestamp = Date.now()
    return (dispatch) => {
        postPoll({
            id: Id, authorId: authorId,
            results: {
                option1: 0,
                option2: 0,
            },
            timestamp: timestamp,
            ...options
        })
        dispatch(createPoll(options, Id, authorId, timestamp));
        dispatch(updatePollsCreated(authorId, Id));
    }
}
