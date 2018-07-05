import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux';/*pre-binding the action creators so in component we can call action by callback*/
import { addTask,inputValue } from '../actions/App' /*connect functions from actions*/
import App from '../components/App/App'; /*import component in which we want to path state and action*/

const mapStateToProps = (state) => ({   /*dispose state to props*/
    /*variableName.reducerName.initialStateKey*/
    task: state.App.taskList,
    targetValue: state.App.targetValue,
    completedList: state.CompletedList.completedList
});

const mapDispatchToProps = (dispatch) => {   /*dispose action to props*/
    return {
        addTask: bindActionCreators(addTask, dispatch), /*can call this action in component by this.props.someCallback() and not this.props.dispatch(someActionCreator())*/
        inputValue: bindActionCreators(inputValue, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); /*connect store and actions to certain component*/