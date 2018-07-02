import * as constants from '../constants/constants'

//set initialState
const initialState = {
    targetValue: '',
    taskList: []
};

//children reducer
export default (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
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