import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './Nav'
import routes from '../routes'

class Entity extends React.Component {
    render() {
        return (
            <div className='entity'>
                <Nav/>
                <div className='content'>
                    <Route exact {...routes.blockView}/>
                    <Route exact {...routes.addressView}/>
                    <Route exact {...routes.transactionView}/>
                </div>
            </div>
        )
    }
}

export default Entity
