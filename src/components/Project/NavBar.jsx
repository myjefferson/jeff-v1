import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import arrow from '../../assets/img/arrow.svg'
import {Container} from '@material-ui/core'
import {NavStyle} from './style/nav'

export default function NavBar(){   

    return(
        <>
            <NavStyle>
                <div id="nav-bar">
                    <Container>
                        <Link to="/"><img id="logo" src={logo} alt="Logo Jefferson Carvalho" title="Jefferson Carvalho"/></Link>
                        <a id="back" href="/#all-projects"><img src={arrow} alt="<-"/>Voltar</a>
                    </Container>
                </div>
            </NavStyle>  
        </>
    )
}