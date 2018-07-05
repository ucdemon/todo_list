import * as constants from '../constants/constants';

export function inputValue(input) {  /*action creator*/
    return {
        type: constants.INPUT_VALUE, /*type of action being performed*/
        payload: {                   /*payload of data sent from application to store*/
            input
        }
    };
}

export function addTask(task) {
    return {
        type: constants.ADD_TODO,
        payload: {
            task
        }
    };
}