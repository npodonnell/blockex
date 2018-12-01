import {takeLatest} from 'redux-saga/effects'
import {LOCATION_CHANGE} from 'react-router-redux'
import {matchPath} from 'react-router'
import routes from '../routes'

// convert routes object into array for quick iteration
const routesArr = Object.keys(routes).map((k) => routes[k])

function* handleLocationChange(action) {
    console.log('got location change', action)
    const location = {...action.payload}
    let matchedRoute = null

    routesArr.some((route) => {
        const match = matchPath(location.pathname, {
            path: route.path,
            exact: true
        })

        if (match) {
            matchedRoute = route
            return true
        }
    })

    if (matchedRoute) {
        yield matchedRoute.saga()
    }
}

function* saga1() {
    console.log('locationSaga running')
    yield takeLatest(LOCATION_CHANGE, handleLocationChange)
}

export default saga1
