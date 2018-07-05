/*combiner for main reducer*/
import { combineReducers } from 'redux'
/*import other reducers*/
import App from './App'
import TextArea from './TextArea'
import CompletedList from './CompletedList'

const todoApp = combineReducers({
    App,
    TextArea,
    CompletedList
});

export default todoApp