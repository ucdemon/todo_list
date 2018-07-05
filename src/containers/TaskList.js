import { connect } from 'react-redux' /*connect to store*/
import TaskList from '../components/TaskList/TaskList'; /*import component in which we want to path state and action*/

const mapStateToProps = (state) => ({
    /*variableName.reducerName.initialStateKey*/
    task: state.TextArea.taskList,
});

export default connect(mapStateToProps)(TaskList); /*connect store to certain component*/
