import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer'
import { registerReducer } from '../reducers/registerReducer';
import { tasksReducers } from '../reducers/tareasReducer';
import {MetaReducers} from '../reducers/metasReducer'
import {userReducer} from '../reducers/userReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    task: tasksReducers,
    meta: MetaReducers,
    user: userReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)