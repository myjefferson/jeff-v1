import React from 'react'
import {Link, HashRouter, Route} from 'react-router-dom'

import Home from './pages/Home/Home'

export default function Routes(){
    return (
        <>
            <HashRouter basename='/'>
                {/*<Link to="/"></Link>*/}
                <Route path="/" exact component={Home}/>
            </HashRouter>
        </>
    )
}
