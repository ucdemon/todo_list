import * as constants from '../constants/constants';

export function deleteCompletedTask(task) {  /*action creator*/
    return {
        type: constants.DELETE_COMPLETEDTASK, /*type of action being performed*/
        payload: {                            /*payload of data sent from application to store*/
            task
        }
    };
}

export function uncompleteTask(task) {
    return {
        type: constants.UNCOMPLET_LIST,
        payload: {
            task
        }
    };
}

export function toggleList() {
    return {
        type: constants.VISIBILITY
    };
}
