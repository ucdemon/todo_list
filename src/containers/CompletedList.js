import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux'; /*pre-binding the action creators so in component we can call action by callback*/
import {deleteCompletedTask, uncompletTask, togleList} from '../actions/CompletedList' /*connect functions from actions*/
import CompletedList from "../components/CompletedList/CompletedList"; /*import component in which we want to path state and action*/

const mapStateToProps = (state) => ({ /*dispose state to props*/
    /*variableName.reducerName.initialStateKey*/
    completed: state.CompletedList.completedList,
    visible: state.CompletedList.visible
});



const mapDispatchToProps = (dispatch) => {  /*dispose action to props*/
    return {
        deleteCompletedTask: bindActionCreators(deleteCompletedTask, dispatch), /*can call this action in component by this.props.someCallback() and not this.props.dispatch(someActionCreator())*/
        uncompletTask: bindActionCreators(uncompletTask, dispatch),
        togleList: bindActionCreators(togleList, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedList); /*connect store and actions to certain component*/
