import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Erro from './components/Erro404/Erro' 

export default function App(){
    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/Project/:id" element={<Project/>}/>
                    <Route path="*" element={<Erro/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
