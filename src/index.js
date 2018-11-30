import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import rootReducer from './reducers'
import rootSaga from './sagas'

const rootDiv = document.getElementById('root')
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    {}, // preloaded state
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware(history))
    )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(<App store={store}/>, rootDiv)
