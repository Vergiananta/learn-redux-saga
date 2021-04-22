import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import reducer from '../reducers'
import sagas from "../sagas";

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(sagas)

export default store
