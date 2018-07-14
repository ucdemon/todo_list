import React, { Component } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from "@fortawesome/fontawesome-free-solid/faAngleRight";

//connect container not react component coz it's already imported in container
import TaskList from "../../containers/TaskList";
import CompletedList from "../../containers/CompletedList";



class App extends Component {

    targetValue = (event) => {
        this.props.inputValue(event.target.value);
    };

    submitTask = (e) => {       /*form new task array*/
        const task = {
            task:this.props.targetValue,    /*text from input field*/
            id:Date.now(),                   /*forming unique id for each task for for further identification*/
            toggleEdit: true
        };
        this.props.addTask(task);
        e.preventDefault();       /*revent normal action in our case prevent form from submitting and as a reloading*/
        e.target.reset();         /*reset form target value*/
    };


    render() {
        return (
            <div className='container'>
                <div className='todolist'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form onSubmit={(e) => this.submitTask(e)} className='todolist_input'>
                                <label className="input input--hoshi">
                                    <input type="text"  onChange={this.targetValue} onKeyPress={this.handleKeyPress}
                                        className="input__field input__field--hoshi"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color" >
                                        <span className="input__label-content input__label-content--hoshi">
                                            Enter your task
                                        </span>
                                    </label>
                                </label>
                                <button data-tip='submit' data-place="bottom" data-delay-show='1000'
                                        data-scroll-hide='true' data-effect="solid"
                                        className='todolist_input_add'>
                                    <FontAwesomeIcon icon={faAngleRight} color='white'/>
                                </button>
                                <ReactTooltip />
                            </form>
                        </div>
                        <TaskList/>
                    </div>
                    {this.props.completedList.length !== 0 ? <CompletedList/> : null}
                </div>
            </div>
        );
    }
}

export default App;
