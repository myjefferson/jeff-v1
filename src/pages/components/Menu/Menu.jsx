import React from 'react'
import logo from '../../../assets/img/logo-jefferson-carvalho.svg'
import {Nav} from './style/menu'
import {Link} from 'react-scroll'
import { Container } from '@material-ui/core'

export default function Menu(){

    var bol = false;
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop

        var nav = document.getElementById('initial')
        var position = this.scrollY

        if(st > lastScrollTop){
            console.log(position)
            if(position <= 95){
                nav.style.boxShadow = "none"
                nav.style.background = "none"
                nav.style.margin = "0"
            }else{
                if(bol == false){
                    nav.animate([
                        {margin: '0'},
                        {margin: '-100px 0 0 0'},
                    ],{
                        duration: 300,
                    })
                }
                bol = true;  
                nav.style.margin = "-100px 0 0 0"
                nav.style.height = "50px"
                nav.style.boxShadow = "none"
                nav.style.position = "fixed"
            }
        }else{ //scrollup
            if(position <= 95){
                nav.style.boxShadow = "none"
                nav.style.background = "none"
                nav.style.padding = "30px 0 0 0"
            }else{
                console.log("scroll up")
                if(bol == true){
                    nav.animate([
                        {margin: '-100px 0 0 0'},
                        {margin: '0 0 0 0'}
                    ],{
                        duration: 300,
                    })
                }
                bol = false;
        
                nav.style.margin = "0"
                nav.style.position = "fixed"
                nav.style.padding = "10px 0 10px 0"
                nav.style.boxShadow = "0px 2px 20px rgba(0,0,0,0.4)"
                nav.style.background = "rgba(17, 24, 39,0.95)"
                nav.style.transition = "0.5s"
            }
        }

        lastScrollTop = st <= 0 ? 0: st
    }, false)
    

    window.onload = function(){
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
    }

    return (
        <>
            <Nav id="initial">
                <Container id="container">
                    <img id="logo" alt="J" src={logo}/>
                    <button id="btn_menu"><img id="icon_menu" src="https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg"/></button>
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
            </Nav>
        </>
    )
}