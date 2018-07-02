import * as constants from '../constants/constants';



export function completeTask(complete_task) {
    return {
        type: constants.COMPLETE_TASK,
        payload: {
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

export function toggleEditField() {
    return {
        type: constants.EDIT_TOGGLE
    };
}