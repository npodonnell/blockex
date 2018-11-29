import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import HomePage from './pages/HomePage'
import BlockPage from './pages/BlockPage'
import AddressPage from './pages/AddressPage'
import TransactionPage from './pages/TransactionPage'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <Nav/>
                <Router>
                    <>
                        <Route path='/' component={HomePage}/>
                        <Route path='/block/:id' component={BlockPage}/>
                        <Route path='/address/:id' component={AddressPage}/>
                        <Route path='/transaction/:id' component={TransactionPage}/>
                    </>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App
