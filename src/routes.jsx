import React from 'react'
import {Link, HashRouter, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

export default function Routes(){
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/Project" component={Project}/>
            </BrowserRouter>
        </>
    )
}
