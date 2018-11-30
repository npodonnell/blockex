import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './Nav'
import BlockPage from './pages/BlockPage'
import AddressPage from './pages/AddressPage'
import TransactionPage from './pages/TransactionPage'

class Entity extends React.Component {
    render() {
        return (
            <div class='entity'>
                <Nav/>
                <div className='content'>
                    <Route path='/block/:id' component={BlockPage}/>
                    <Route path='/address/:id' component={AddressPage}/>
                    <Route path='/transaction/:id' component={TransactionPage}/>
                </div>
            </div>
        )
    }
}

export default Entity
