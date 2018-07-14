import * as constants from '../constants/constants';

export function completeTask(complete_task) {/*action creator*/
    return {
        type: constants.COMPLETE_TASK,      /*type of action being performed*/
        payload: {                          /*payload of data sent from application to store*/
            complete_task
        }
    };
}

export function deleteTask(task) {
    return {
        type: constants.DELETE_TASK,
        payload: {
            task
        }
    };
}
export function editList(list) {
    return {
        type: constants.EDIT_TASK,
        payload: {
            list
        }
    };
}

export function toggleEditField(list) {
    return {
        type: constants.EDIT_TOGGLE,
        payload: {
            list
        }
    };
}