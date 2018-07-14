import React, { Component } from 'react';
import '../App/App.scss';
import TextareaAutosize from 'react-autosize-textarea';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import faEdit from '@fortawesome/fontawesome-free-regular/faEdit';
import faTrash from "@fortawesome/fontawesome-free-solid/faTrash";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import faCircle from "@fortawesome/fontawesome-free-regular/faCircle";
import faSave from "@fortawesome/fontawesome-free-regular/faSave";


class TextArea extends Component {

    editField = (id) =>  {  /*toggle between two states*/
        const list = this.props.task.map((item) =>{
            if (id !== item.id) return item; /*if id off clicked item don't match with transmitted id return old task*/
            return (
                Object.assign(item,item.toggleEdit = !item.toggleEdit) /* if id matches change item to new task with changed text*/
            );
        });
        this.props.toggleEditField(list);
        setTimeout(()=>{document.getElementById(this.props.item.id).focus()},0);
    };

    deleteTask = (id) => {
        const deleted = this.props.task.filter((item)=>{
            return(
                item.id !== id
            );
        });
        this.props.deleteTask(deleted);
    };

    removeTask = (item,id) => {
        const deleted = this.props.task.filter((item)=>{
            return(
                item.id !== id
            );
        });
        this.props.deleteTask(deleted);
        this.props.completeTask(item);
    };

    editTask = (id) =>(e)=> {       /*form new task with old id and new target value*/
        const newtask = {
            task: e.target.value,
            id: id
        };
        const tasklist = this.props.task.map((item) =>{
            if (id !== item.id) return item; /*if id off clicked item don't match with transmitted id return old task*/
            return (
                Object.assign(item, newtask) /* if id matches change item to new task with changed text*/
            );
        });
        this.props.editList(tasklist);
    };

    render() {
        return (
            <div className='todolist_tasklist_task'>
                <button onClick={()=>this.removeTask(this.props.item,this.props.item.id)} data-tip='Complet'
                        data-for='todolist_tasklist_task_check' className='todolist_tasklist_task_check'
                        data-effect="solid" data-place="bottom"  data-delay-show='800'>
                    <FontAwesomeIcon icon={faCircle} color='#4285f4' className='todolist_tasklist_task_check-circle'/>
                    <FontAwesomeIcon icon={faCheck} color='#4285f4' className='todolist_tasklist_task_check-checkmark'/>
                    <ReactTooltip id='todolist_tasklist_task_check'/>
                </button>
                <TextareaAutosize type="text"
                                  id={this.props.item.id} /*assign item id as textarea id to capture it by getElement*/
                                  value={this.props.item.task}
                                  onChange={this.editTask(this.props.item.id)} /*transfer element id to editTask method */
                                  disabled = {this.props.item.toggleEdit}
                />
                <button onClick={() => this.editField(this.props.item.id)} className='todolist_tasklist_task_edit' >
                    {this.props.item.toggleEdit
                        ? <FontAwesomeIcon icon={faEdit} className='todolist_tasklist_task_edit-pen'
                                           data-for='todolist_tasklist_task_edit-pen' data-tip='Edit'
                                           data-effect="solid" data-place="bottom"  data-delay-show='800'/>
                        : <FontAwesomeIcon icon={faSave} className='todolist_tasklist_task_edit=save'
                                           data-for='todolist_tasklist_task_edit-pen' data-tip='Save'
                                           data-effect="solid" data-place="bottom"  data-delay-show='800'/>
                    }
                    <ReactTooltip id='todolist_tasklist_task_edit-pen'/>
                    <ReactTooltip id='todolist_tasklist_task_edit-save'/>
                </button>
                <button onClick={() => this.deleteTask(this.props.item.id)} data-tip='Delete' data-for='todolist_tasklist_task_delete'
                        className='todolist_tasklist_task_delete' data-effect="solid" data-place="bottom"  data-delay-show='800'>
                    <FontAwesomeIcon icon={faTrash} />
                    <ReactTooltip id='todolist_tasklist_task_delete'/>
                </button>
            </div>
        );
    };
}
export default TextArea;