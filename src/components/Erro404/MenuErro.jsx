import React, { useEffect } from 'react'
import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import {Container} from '@material-ui/core'
import {StyleMenuErro} from './style/menuerro'

export default function NavBar(){  
    
    useEffect(() => {
        document.getElementById('btn_menu').addEventListener("click", function(){
            var x = document.getElementById("list")

            document.querySelector(".link-nav1").addEventListener('click', function(){
                x.className = "rightnav"
                window.document.documentElement.style.overflowY = "scroll"
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
            })
            document.querySelector(".link-nav2").addEventListener('click', function(){
                x.className = "rightnav"
                window.document.documentElement.style.overflowY = "scroll" 
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
            })
            document.querySelector(".link-nav3").addEventListener('click', function(){
                x.className = "rightnav"
                window.document.documentElement.style.overflowY = "scroll" 
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
            })
            document.querySelector(".link-nav4").addEventListener('click', function(){
                x.className = "rightnav"
                window.document.documentElement.style.overflowY = "scroll" 
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
            })

            if(x.className === "rightnav"){
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/close.svg")
                window.document.documentElement.style.overflow = "hidden"
                x.className += " menumobile"
            }else{
                document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
                x.className = "rightnav"
                window.document.documentElement.style.overflowY = "scroll"   
            }
        })
    },[])

    return(
        <>
            <StyleMenuErro>
                <div id="navbar">
                    <Container id="container">
                        <img id="logo" alt="J" src={logo}/>
                        <button id="btn_menu"><img id="icon_menu" src="https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg" alt="Menu"/></button>
                        <div id="group-menu">
                            <div id="list" className="rightnav">
                                <ul>
                                    <li><a className="link-nav1" id="link-nav" href="/">Início</a></li>
                                    <li><a className="link-nav2" id="link-nav" href="/#about">Sobre Mim</a></li>
                                    <li><a className="link-nav3" id="link-nav" href="/#all-projects">Projetos</a></li>
                                    <li><a className="link-nav4" id="link-nav" href="/#contact">Contatos</a></li>
                                </ul>
                            </div>
                            <div id="menu-blur"></div>
                        </div>
                    </Container>
                </div>
            </StyleMenuErro>  
        </>
    )
}