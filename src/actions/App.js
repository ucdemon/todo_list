import * as constants from '../constants/constants';


export function inputValue(input) {
    return {
        type: constants.INPUT_VALUE,
        payload: {
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