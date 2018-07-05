import * as constants from '../constants/constants'/*import all constants*/


/*set initialState*/
const initialState = {
    completedList: [],
    visible: false
};

export default (state = initialState, action) =>{
    const { payload } = action; /*import payload obj. from action*/
    switch (action.type) { /*switch between different action types*/
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



