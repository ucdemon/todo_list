import * as constants from '../constants/constants';



export function deleteCompletedTask(task) {
    return {
        type: constants.DELETE_COMPLETEDTASK,
        payload: {
            task
        }
    };
}

export function uncompletTask(task) {
    return {
        type: constants.UNCOMPLET_LIST,
        payload: {
            task
        }
    };
}

export function togleList() {
    return {
        type: constants.VISIBILITY
    };
}
