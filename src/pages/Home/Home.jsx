import React from 'react'
import {Container} from '@material-ui/core'
import {HomeStyles, NavStyles, Nav, Initial, About, Projects, Contact, Footer} from './style/home'
import projects from '../../assets/json/data.json'

import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import avatar from '../../assets/img/avatar.png'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'

export default function Home(){
    const styleHome = HomeStyles()
    const styleNav = NavStyles()

    return (
        <>
            <div className={styleHome.bgPrincipal}/>
            <Container maxWidth="lg" className={styleHome.container}>             
                <div className={styleHome.hScreen}>
                    
                    <Nav>
                        <img id="logo" alt="J" src={logo}/>
                        <ul className={styleNav.menu}>
                            <li><a href="#init">Início</a></li>
                            <li><a href="#about">Sobre Mim</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contatos</a></li>
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
            

                <Projects>
                    <h1 className={styleHome.title}>Projetos Recentes</h1>
                    <div id="projects">
                        {projects.Projects.map((data, key) => {
                            return(
                                <div id="project" key={key}>
                                    <img src={data.principalImg}/>
                                    <h1>{data.title}</h1>
                                    <p>{data.subtitle}</p>
                                </div>
                            )         
                        })}
                    </div>
                    <div id="box-more">
                        <a id="more-projects" href="#"><div id="border"></div>Ver mais projetos</a>
                    </div>
                    
                </Projects>

                <Contact id="contact" >
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
                    <p>Feito com 💜 por Jefferson Carvalho</p>
                </Footer>
            </Container>
           
        </>
    )
}