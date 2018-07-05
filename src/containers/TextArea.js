import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux'; /*pre-binding the action creators so in component we can call action by callback*/
import {completeTask,deleteTask,editList,toggleEditField} from '../actions/TextArea' /*connect functions from actions*/
import TextArea from '../components/TextArea/TextArea'; /*import component in which we want to path state and action*/

const mapStateToProps = (state) => ({
    /*variableName.reducerName.initialStateKey*/
    task: state.TextArea.taskList,
    completed: state.CompletedList.completedList,
    edit:state.TextArea.disableEdit
});


const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: bindActionCreators(completeTask, dispatch), /*can call this action in component by this.props.someCallback() and not this.props.dispatch(someActionCreator())*/
        deleteTask: bindActionCreators(deleteTask, dispatch),
        editList: bindActionCreators(editList, dispatch),
        toggleEditField: bindActionCreators(toggleEditField, dispatch)
    };
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         completeTask: () => (dispatch(completeTask))
//         deleteTask: () => (dispatch(deleteTask)),
//         editList: () => (dispatch(editList)),
//         toggleEditField: () => (dispatch(toggleEditField)),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(TextArea); /*connect store to certain component*/
