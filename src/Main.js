import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlockPage from './pages/BlockPage'
import AddressPage from './pages/AddressPage'
import TransactionPage from './pages/TransactionPage'

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <Router>
                    <>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/block/:id' component={BlockPage}/>
                        <Route path='/address/:id' component={AddressPage}/>
                        <Route path='/transaction/:id' component={TransactionPage}/>
                    </>
                </Router>
            </div>
        )
    }
}

export default Main
