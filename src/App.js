import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Main from './Main'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App
