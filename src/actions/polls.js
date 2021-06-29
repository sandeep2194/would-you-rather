import { v4 as uuidv4 } from 'uuid';

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

export function handleCreatePoll(options, authorId) {
    const Id = uuidv4();
    return (dispatch) => {
        dispatch(createPoll(options, Id, authorId));
    }
}
