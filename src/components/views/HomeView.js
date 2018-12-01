import React from 'react'
import {NavLink} from 'react-router-dom'

class HomeView extends React.Component {
    render() {
        return (
            <div>
                Home stuff goes here
                <br/>
                Some block: <NavLink to='/block/123'>Click</NavLink>
                <br/>
                Some address: <NavLink to='/address/abc'>Click</NavLink>
                <br/>
                Some transaction: <NavLink to='/transaction/xyz'>Click</NavLink>
                <br/>
            </div>
        )
    }
}

export default HomeView
