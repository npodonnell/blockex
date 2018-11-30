import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './Nav'

import BlockView from './views/BlockView'
import AddressView from './views/AddressView'
import TransactionView from './views/TransactionView'

class Entity extends React.Component {
    render() {
        return (
            <div class='entity'>
                <Nav/>
                <div className='content'>
                    <Route path='/block/:id' component={BlockView}/>
                    <Route path='/address/:id' component={AddressView}/>
                    <Route path='/transaction/:id' component={TransactionView}/>
                </div>
            </div>
        )
    }
}

export default Entity
