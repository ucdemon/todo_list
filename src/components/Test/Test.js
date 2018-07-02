import React, { Component } from 'react';
import '../App/App.scss';
import TextareaAutosize from 'react-autosize-textarea';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import faEdit from '@fortawesome/fontawesome-free-regular/faEdit';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state= {
            edit: false
        };
    }

    editField = () => {
        // refs.item.getInputDOMNode(Test).focus();
    };


    render() {
        // {console.log('this.state', this.state)}
        return (
            <div>
                <input   ref='item'
                />

                {/*<input*/}
                    {/*type="button"*/}
                    {/*value="Focus the text input"*/}
                    {/*onClick={this.focusTextInput}*/}
                {/*/>*/}
                <button onClick={this.editField}>
                    edit
                </button>

                {/*<button onClick={()=>this.focusTextInput()}  type="button" className='todolist_tasklist_task_edit' >*/}
                        {/*<FontAwesomeIcon icon={faEdit} className='todolist_tasklist_task_edit-pen'*/}
                                           {/*data-for='todolist_tasklist_task_edit-pen' data-tip='Edit' data-effect="solid" data-place="bottom"  data-delay-show='800'/>*/}
                    {/*<ReactTooltip id='todolist_tasklist_task_edit-pen'/>*/}
                {/*</button>*/}


            </div>
        );
    }
}
export default Test;