//combiner for main reducer
import { combineReducers } from 'redux'
//import all constants


import App from './App'
import TextArea from './TextArea'
import CompletedList from './CompletedList'


//main reducer that combines two children reducers
const todoApp = combineReducers({
    App,
    TextArea,
    CompletedList
});

export default todoApp