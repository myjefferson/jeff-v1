import React from 'react'
import {Container} from '@material-ui/core'
import {Link} from 'react-scroll'
import {HomeStyles, NavStyles, Nav, Initial, About, Projects, Contact, Footer} from './style/home'
import projects from '../../assets/json/data.json'

import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import avatar from '../../assets/img/avatar.png'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import reactjs from '../../assets/img/reactjs.svg'

export default function Home(){
    const styleHome = HomeStyles()
    const styleNav = NavStyles()

    //const ScrollLink = Scroll.ScrollLink

    return (
        <>
            <div className={styleHome.bgPrincipal}/>
            <Container maxWidth="lg" className={styleHome.container}>             
                <div className={styleHome.hScreen}>
                    
                    <Nav id="initial">
                        <img id="logo" alt="J" src={logo}/>
                        
                        <ul className={styleNav.menu}>
                            <li><Link activeClass='active' id="link-nav" to="initial" spy={true} smooth={true} duration={500}>Início</Link></li>
                            <li><Link activeClass='active' id="link-nav" to="about" spy={true} smooth={true} duration={500}>Sobre Mim</Link></li>
                            <li><Link activeClass="active" id="link-nav" to="all-projects" spy={true} smooth={true} duration={500}>Projetos</Link></li>
                            <li><Link activeClass="active" id="link-nav" to="contact" spy={true} smooth={true} duration={500}>Contatos</Link></li>
                        </ul>
                    </Nav>

                    <Initial>
                        <div id="pres-principal">
                            <p id="salut">Olá, meu nome é</p>
                            <h1 id="name">Jefferson Carvalho.</h1>
                            <p id="profes">Analista e Desenvolvedor de Sistemas</p>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/jefferson-carvalho" target="_blank"><img src={linkedin} /></a></li>
                                <li><a href="https://github.com/myjefferson" target="_blank"><img src={github} /></a></li>
                                <li><button type="button"><div id="border"></div>Ver resumo</button></li>
                            </ul>
                            <img id="avatar" src={avatar}/>
                        </div>
                    </Initial>
                </div>

                <About id="about">
                    <div>
                        <h1 className={styleHome.title}>Sobre Mim</h1>
                        <p>Olá, muito prazer! Me chamo Jefferson e uso minhas ideias e criatividade para desenvolver projetos para web. Comecei a estudar programação em 2014 criando projetos pessoais usando o HTML, CSS e JavaScript, </p>
                    </div>
                </About>
            

                <Projects id="all-projects">
                    <h1 className={styleHome.title}>Projetos Recentes</h1>
                    <div id="projects">
                        {projects.Projects.map((data, key) => {
                            return(
                                <div id="project" key={key}>
                                    <a href={`${data.id}`}>
                                        <img src={data.principalImg}/>
                                        <h1>{data.title}</h1>
                                        <p>{data.subtitle}</p>
                                    </a>
                                </div>
                            )         
                        })}
                    </div>
                    <div id="box-more">
                        <a id="more-projects" href="#"><div id="border"></div>Mostrar tudo</a>
                    </div>
                    
                </Projects>

                <Contact id="contact">
                    <h1 className={styleHome.title}>Entre em Contato</h1>
                    <p>Estou a procura de uma oportunidade para estágiar como desenvolvedor front-end. Estarei a disposição para responder.</p>
                    <div id="box-more">
                        <a id="email" href="mailto:jcsjeffrey@gmail.com"><div id="border"></div>Dizer Olá</a>
                    </div>
                </Contact>

                <Footer>
                    <img id="logo" src={logo} />
                    <ul>
                        <li><a href="https://github.com/myjefferson" target="_blank"><img src={github}/></a></li>
                        <li><a href="https://www.linkedin.com/in/jefferson-carvalho" target="_blank"><img src={linkedin}/></a></li>
                    </ul>
                    <p>Desenvolvido com 💜 por Jefferson Carvalho</p>
                    <p>Usando ReactJS <img id="img-reactjs" src={reactjs}/></p>
                </Footer>
            </Container>
           
        </>
    )
}