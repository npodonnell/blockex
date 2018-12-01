import HomeView from './components/views/HomeView'
import BlockView from './components/views/BlockView'
import AddressView from './components/views/AddressView'
import TransactionView from './components/views/TransactionView'

import homeViewSaga from './sagas/views/homeViewSaga'
import blockViewSaga from './sagas/views/blockViewSaga'
import addressViewSaga from './sagas/views/addressViewSaga'
import transactionViewSaga from './sagas/views/transactionViewSaga'

/**
 * Here is where we tie together view components (HomeView, BlockView, etc...) and their
 * corresponding sagas (homeViewSaga, blockViewSaga, etc...). When a LOCATION_CHANGE event
 * happens react-router will update the DOM to show the new view and the corresponding
 * saga will be run.
 */

const routes = {
    homeView: {
        path: '/',
        component: HomeView,
        saga: homeViewSaga
    },
    blockView: {
        path: '/block/:id',
        component: BlockView,
        saga: blockViewSaga
    },
    addressView: {
        path: '/address/:id',
        component: AddressView,
        saga: addressViewSaga
    },
    transactionView: {
        path: '/transaction/:id',
        component: TransactionView,
        saga: transactionViewSaga
    }
}

export default routes
