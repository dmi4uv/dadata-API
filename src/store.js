import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './redux/sagas'
const saga = createSagaMiddleware()

const store = createStore(reducer, compose(
applyMiddleware( thunk, saga
    )
    /* ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
))

saga.run(sagaWatcher)

export default store;