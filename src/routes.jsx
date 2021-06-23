import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Erro from './components/Erro404/Erro' 

export default function Routes(){
    return (
        <>  
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Project/:id" component={Project}/>
                    <Route path="*" component={Erro}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
