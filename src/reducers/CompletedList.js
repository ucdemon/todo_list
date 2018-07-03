import * as constants from '../constants/constants'



const initialState = {
    completedList: [],
    visible: false
};

export default (state = initialState, action) =>{
    const { payload } = action;
    switch (action.type) {
        case constants.COMPLETE_TASK:
            return Object.assign({}, state, {
                ...state,
                completedList: [...state.completedList, payload.complete_task]
            });
        case constants.DELETE_COMPLETEDTASK:
            return Object.assign({}, state, {
                ...state,
                completedList: payload.task
            });
        case constants.VISIBILITY:
            return Object.assign({}, state, {
                ...state,
                visible: !state.visible
            });
        default:
            return state
    }
}



