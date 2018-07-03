//conect to store
import { connect } from 'react-redux'
//connect function 'addTodo' from actions
import {completeTask,deleteTask,editList,toggleEditField} from '../actions/TextArea'

import { bindActionCreators }  from 'redux';
import TextArea from '../components/TextArea/TextArea';

const mapStateToProps = (state) => ({
    //Variable name.reducerName.initialStateKey
    task: state.App.taskList,

    completed: state.CompletedList.completedList,
    edit:state.TextArea.disableEdit
});


const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: bindActionCreators(completeTask, dispatch),
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

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
