import React from 'react'
import logo from '../../../assets/img/logo-jefferson-carvalho.svg'
import linkedin from '../../../assets/img/linkedin.svg'
import github from '../../../assets/img/github.svg'
import {StyleFooter} from './style/footer'
import reactjs from '../../../assets/img/reactjs.svg'

export default function Footer(){
    return(
        <>
            <StyleFooter>
                <img id="logo" src={logo} />
                <ul>
                    <li><a href="https://github.com/myjefferson" target="_blank"><img src={github}/></a></li>
                    <li><a href="https://www.linkedin.com/in/jefferson-carvalho" target="_blank"><img src={linkedin}/></a></li>
                </ul>
                <p>Desenvolvido com 💜 por Jefferson Carvalho</p>
                <p>Usando ReactJS <img id="img-reactjs" src={reactjs}/></p>
            </StyleFooter>
        </> 
    )
}