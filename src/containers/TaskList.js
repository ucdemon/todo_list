//conect to store
import { connect } from 'react-redux'


// import { bindActionCreators }  from 'redux';
import TaskList from '../components/TaskList/TaskList';

const mapStateToProps = (state) => ({
    //Variable name.reducerName.initialStateKey
    task: state.App.taskList,
});

export default connect(mapStateToProps)(TaskList);
