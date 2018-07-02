//conect to store
import { connect } from 'react-redux'
//connect function 'addTodo' from actions
import { addTask,inputValue } from '../actions/App'

import { bindActionCreators }  from 'redux';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
    //Variable name.reducerName.initialStateKey
    task: state.App.taskList,
    targetValue: state.App.targetValue,
    completedList: state.CompletedList.completedList
});

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: bindActionCreators(addTask, dispatch),
        inputValue: bindActionCreators(inputValue, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);