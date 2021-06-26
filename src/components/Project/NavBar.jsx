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
                        <Link to="/"><img id="logo" src={logo} alt="Logo Jefferson Carvalho"/></Link>
                        <Link id="back" to="/"><img src={arrow} alt="<-"/>Voltar</Link>
                    </Container>
                </div>
            </NavStyle>  
        </>
    )
}