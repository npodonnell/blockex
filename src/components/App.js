import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import Header from './Header'
import Footer from './Footer'
import Entity from './Entity'
import routes from '../routes'

class App extends React.Component {
    render() {
        const {store, history} = this.props
        return (
            <Provider store={store}>
                <div className='app'>  
                    <Header/>
                    <div className='main'>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route exact {...routes.homeView}/>
                                <Route component={Entity}/>
                            </Switch>
                        </ConnectedRouter>
                    </div>
                    <Footer/>
                </div>
            </Provider>
        )
    }
}

export default App
