import * as constants from '../constants/constants' /*import all constants*/

/*set initialState*/
const initialState = {
    targetValue: '',
    taskList: []
};
{/*reducer is a pure function that takes
   the previous state and an action, and
   returns the next state.*/}


export default (state = initialState, action) => {
    const { payload } = action; /*import payload obj. from action*/
    switch (action.type) {         /*switch between different action types*/
        case constants.INPUT_VALUE:
            return Object.assign({}, state, {
                ...state,
                targetValue: payload.input
            });
        case constants.ADD_TODO:
            return Object.assign({}, state, {
                ...state,
                taskList: [...state.taskList, payload.task]
            });
        case constants.DELETE_TASK:
            return Object.assign({}, state, {
                ...state,
                taskList: payload.task
            });
        case constants.UNCOMPLET_LIST:
            return Object.assign({}, state, {
                ...state,
                taskList: [...state.taskList, payload.task]
            });
        case constants.EDIT_TASK:
            return Object.assign({}, state, {
                ...state,
                taskList: payload.list
            });
        default:
            return state
    }
}