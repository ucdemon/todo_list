//conect to store
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux';
//connect function 'addTodo' from actions
import {deleteCompletedTask, uncompletTask, togleList} from '../actions/CompletedList'
import CompletedList from "../components/CompletedList/CompletedList";

const mapStateToProps = (state) => ({
    //Variable name.reducerName.initialStateKey
    completed: state.CompletedList.completedList,
    visible: state.CompletedList.visible
});



const mapDispatchToProps = (dispatch) => {
    return {
        deleteCompletedTask: bindActionCreators(deleteCompletedTask, dispatch),
        uncompletTask: bindActionCreators(uncompletTask, dispatch),
        togleList: bindActionCreators(togleList, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedList);
