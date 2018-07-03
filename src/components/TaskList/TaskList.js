import React, { Component } from 'react';
import '../App/App.scss';
import TextArea from "../../containers/TextArea";




class TaskList extends Component {


    renderTaskList(list){
        list = this.props.task;
        return list.map((item, index) => {
            return (
                <div key={index} className='todolist_tasklist'>
                    <TextArea item={item}/>
                </div>
            )
        });
    }

    render() {
        return (
            <div className='col-md-6'>
                {this.renderTaskList()}
            </div>
        );
    };

}
export default TaskList;
