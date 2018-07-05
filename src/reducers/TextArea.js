import * as constants from '../constants/constants' /*import all constants*/

/*set initialState*/
const initialState = {
    disableEdit:true,
    taskList: []
};


export default function toggleEditField (state = initialState, action){
    const { payload } = action; /*import payload obj. from action*/
    switch (action.type) { /*switch between different action types*/
        case constants.EDIT_TOGGLE:
            return Object.assign({}, state, {
                ...state,
                disableEdit: !state.disableEdit
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