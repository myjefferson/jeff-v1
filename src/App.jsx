import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Erro from './pages/Erro404/Erro' 
import MainLayout from './layout/MainLayout';

/**
 *  TailwindCSS | Flowbite 
 **/
import './assets/css/index.css'

export default function App(){
    return (
        <>  
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/project/:id" element={<Project/>}/>
                        <Route path="*" element={<Erro/>}/>
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </>
    )
}
