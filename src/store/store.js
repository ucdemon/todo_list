import { createStore } from 'redux' /*create store*/
import todoApp from '../reducers/index' /*import combine reducer to store*/

let store = createStore(todoApp);
