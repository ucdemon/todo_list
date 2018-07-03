import * as constants from '../constants/constants'

//set initialState
const initialState = {
    disableEdit:true
};


export default function toggleEditField (state = initialState, action){
    switch (action.type) {
        case constants.EDIT_TOGGLE:
            return Object.assign({}, state, {
                ...state,
                disableEdit: !state.disableEdit
            });
        default:
            return state
    }
}