import {fork} from 'redux-saga/effects'
import locationSaga from './locationSaga'

function* rootSaga() {
    console.log('root saga running')
    yield fork(locationSaga)
}

export default rootSaga
