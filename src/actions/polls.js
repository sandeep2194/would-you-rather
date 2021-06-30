import { v4 as uuidv4 } from 'uuid';
import { updatePollsCreated } from './users';
import { incrementScore } from './leaderBoard';

export const CREATE_POLL = 'CREATE_POLL'
export const UPDATE_POLL = 'UPDATE_POLL'


function createPoll(options, Id, authorId) {
    return {
        type: CREATE_POLL,
        options,
        Id,
        authorId,
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
    return (dispatch) => {
        dispatch(createPoll(options, Id, authorId));
        dispatch(updatePollsCreated(authorId, Id));
        dispatch(incrementScore(authorId))
    }
}
