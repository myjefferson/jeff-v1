import React, { useEffect } from 'react'
import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import {Nav} from './style/menu'
import {Link} from 'react-scroll'
import { Container } from '@material-ui/core'

export default function Menu(){

    useEffect(() => {
        var Nav = document.getElementById("navbar")        
        var prevScrollPos = window.pageYOffset; //posLoadlPage
        window.addEventListener("scroll", function(){
            var currentScrollPos = window.pageYOffset;
            
            if(currentScrollPos < 90){
                Nav.classList.remove("scrollDown")
                Nav.classList.remove("scrollUp")
                Nav.classList.add("scrollTop")
            }else if(prevScrollPos < currentScrollPos){ //scroll 0
                Nav.classList.remove("scrollUp")
                Nav.classList.remove("scrollTop")
                Nav.classList.add("scrollDown")
            }else if(currentScrollPos > 90){
                Nav.classList.remove("scrollTop")
                Nav.classList.remove("scrollDown")
                Nav.classList.add("scrollUp");
            }
            prevScrollPos = currentScrollPos;
        })

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

    return (
        <>
            <Nav>
                <div id="navbar">
                    <Container id="container">
                        <img id="logo" alt="J" src={logo}/>
                        <button id="btn_menu"><img id="icon_menu" src="https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg" alt="Menu"/></button>
                        <div id="group-menu">
                            <div id="list" className="rightnav">
                                <ul>
                                    <li><Link activeClass='active' className="link-nav1" id="link-nav" to="home" spy={true} smooth={true} duration={500}>Início</Link></li>
                                    <li><Link activeClass='active' className="link-nav2" id="link-nav" to="about" spy={true} smooth={true} duration={500}>Sobre Mim</Link></li>
                                    <li><Link activeClass='active' className="link-nav3" id="link-nav" to="all-projects" spy={true} smooth={true} duration={500}>Projetos</Link></li>
                                    <li><Link activeClass='active' className="link-nav4" id="link-nav" to="contact" spy={true} smooth={true} duration={550}>Contatos</Link></li>
                                </ul>
                            </div>
                            <div id="menu-blur"></div>
                        </div>
                    </Container>
                </div>
            </Nav>
        </>
    )
}