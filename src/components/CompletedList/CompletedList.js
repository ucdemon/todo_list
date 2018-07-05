import React, { Component } from 'react';
import '../App/App.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import ReactTooltip from 'react-tooltip';



class CompletedList extends Component {

    deleteTask = (id) => {
        const deleted = this.props.completed.filter((item)=>{  /*filter array by id, compering transfer id from map with all id in array*/
            return(
                item.id !== id
            );
        });
        this.props.deleteCompletedTask(deleted); /*transfer new array to reducer*/
    };

    removeTask = (item,id) => {
        const deleted = this.props.completed.filter((item)=>{
            return(
                item.id !== id
            );
        });
        this.props.deleteCompletedTask(deleted);
        this.props.uncompleteTask(item); /*additionally transfer clicked item to task list*/
    };

    rendercompletedTasks = (completedtasks) => {
        completedtasks = this.props.completed;
        return  completedtasks.map((item, index) =>{
            return (
                <div key={index} className='todolist_completed_list_task'>
                    <button onClick={()=>this.removeTask(item,item.id)} data-tip='Uncomplet'
                            data-for='todolist_completed_list_task_delete' data-effect="solid"
                            data-place="bottom"  data-delay-show='800' className='todolist_completed_list_task_check'>
                        <FontAwesomeIcon icon={faCheck} color='#4285f4'/>
                        <ReactTooltip id='todolist_completed_list_task_check'/>
                    </button>
                    <li key={item.id}>{item.task}</li>
                    <button onClick={()=>this.deleteTask(item.id)} data-tip='Delete'
                            data-for='todolist_completed_list_task_delete' data-effect="solid"
                            data-place="bottom"  data-delay-show='800' className='todolist_completed_list_task_delete'>
                        <FontAwesomeIcon icon={faTrash} />
                        <ReactTooltip id='todolist_completed_list_task_delete'/>
                    </button>
                </div>
            )
        })
    };


    render() {
        return (
            <div className='row'>
                <div className='col-md-6'>
                </div>
                <div className='col-md-6'>
                    <div className='todolist_completed'>
                        <p> Completed ({this.props.completed.length})</p>
                        <div onClick={this.props.toggleList} className='todolist_completed_slide'> {/*toggle completed list*/}
                            {this.props.visible ? <div className='todolist_completed_slide_down'> {/*changing icons for open/closed list state*/}
                                <FontAwesomeIcon icon={faAngleUp} color='#4285f4' />
                            </div> : <div className='todolist_completed_slide_up'>
                                <FontAwesomeIcon icon={faAngleDown} color='#4285f4' />
                            </div> }
                        </div>
                    </div>
                    <div className={'todolist_completed_list' + (this.props.visible ? '' : '_none')}> {/*make completed list visible/not visible depending on state by class name change*/}
                        {this.rendercompletedTasks()}
                    </div>
                </div>
            </div>
        );
    };
}
export default CompletedList;
