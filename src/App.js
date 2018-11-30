import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HomePage from './pages/HomePage'
import Entity from './Entity'

class App extends React.Component {
    render() {
        return (
            <div className='app'>  
                <Header/>
                <div className='main'>
                    <Router>
                        <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route component={Entity}/>
                        </Switch>
                    </Router>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
