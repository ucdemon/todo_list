import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AddTodo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'


let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

