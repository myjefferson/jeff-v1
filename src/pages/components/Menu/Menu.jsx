import React from 'react'
import logo from '../../../assets/img/logo-jefferson-carvalho.svg'
import {Nav} from './style/menu'
import {Link} from 'react-scroll'
import { Container } from '@material-ui/core'

export default function Menu(){

    var bol = false;
    window.addEventListener("wheel", function(event){
        var nav = document.getElementById('initial')
        var position = this.scrollY

        if(event.deltaY < 0){ //scrollup
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
        }else if(event.deltaY > 0){ //scrolldown
            console.log("scroll down")
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
        }
    })

    return (
        <>
            <Nav id="initial">
                <Container>
                    <img id="logo" alt="J" src={logo}/>
                    
                    <ul>
                        <li><Link activeClass='active' id="link-nav" to="home" spy={true} smooth={true} duration={500}>Início</Link></li>
                        <li><Link activeClass='active' id="link-nav" to="about" spy={true} smooth={true} duration={500}>Sobre Mim</Link></li>
                        <li><Link activeClass="active" id="link-nav" to="all-projects" spy={true} smooth={true} duration={500}>Projetos</Link></li>
                        <li><Link activeClass="active" id="link-nav" to="contact" spy={true} smooth={true} duration={550}>Contatos</Link></li>
                    </ul>
                </Container>
            </Nav>
        </>
    )
}