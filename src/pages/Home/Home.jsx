import React from 'react'
import {Container} from '@material-ui/core'

import {HomeStyles, Initial, About, Projects, Contact} from './style/home'
import projects from '../../assets/json/data.json'
import skills from '../../assets/json/skills.json'

import avatar from '../../assets/img/avatar.png'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import resume from '../../assets/doc/JeffersonCarvalho.pdf'

import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

export default function Home(){
    const styleHome = HomeStyles()

    return (
        <>
            <div className={styleHome.bgPrincipal}/>
            <Container maxWidth="lg" className={styleHome.container} id="home">             
                <div className={styleHome.hScreen}>
                    <Menu/>
                    
                    <Initial>
                        <div id="pres-principal">
                            <div id="bx-avatar">
                                <img id="avatar" src={avatar} alt="Jefferson Carvalho"/>
                            </div>
                            <div>
                                <p id="salut">Olá, meu nome é</p>
                                <h1 id="name">Jefferson Carvalho.</h1>
                                <p id="profes">Futuro Analista e Desenvolvedor de Sistemas.</p>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/jefferson-carvalho" rel="noreferrer" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></li>
                                    <li><a href="https://github.com/myjefferson" target="_blank" rel="noreferrer"><img src={github} alt="GitHub"/></a></li>
                                    <li><div id="box-resume"><a id="resume" href={resume} target="_blank" rel="noreferrer"><div id="border"></div>Ver resumo</a></div></li>
                                </ul>
                            </div>
                        </div>
                    </Initial>
                </div>

                <About id="about">
                    <div>
                        <h1 className={styleHome.title}>Sobre Mim</h1>
                        
                        <p>Olá, muito prazer! Me chamo Jefferson, e uso minhas ideias e criatividade para desenvolver projetos para web. Comecei a estudar programação em 2014 criando projetos pessoais usando o HTML, CSS e JavaScript.</p>
                        <p>Atualmente estou estudando Análise e Desenvolvimento de Sistemas na Faculdade Anchieta de Ensino Superior do Paraná, na cidade de Curitiba/PR. Meu objetivo é ampliar o conhecimento em habilidades técnicas e gerenciais, sempre buscando a melhor forma de moldar minha vocação para entregar um excelente trabalho.</p>
                        
                        <p id="p-here-skills">Aqui estão algumas das minhas habilidades:</p>

                        <ul>
                            {skills.Skills.map((data, key) => {
                                return(
                                    <>
                                        <li key={key}>
                                            <p><img src={data.img} alt=""/></p>
                                            <p>{data.name}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </About>
            

                <Projects id="all-projects">
                    <h1 className={styleHome.title}>Projetos Recentes</h1>
                    <div id="projects">
                        {projects.Projects.map((data, key) => {
                            return(
                                <div id="project" key={key}>
                                    <a href={`/Project?id=${data.id}`}>
                                        <img src={data.principalImg} alt=""/>
                                        <h1>{data.title}</h1>
                                        <p>{data.subtitle}</p>
                                    </a>
                                </div>
                            )         
                        })}
                    </div>
                    {/*<div id="box-more">
                        <a id="more-projects" href="#"><div id="border"></div>Mostrar tudo</a>
                    </div>*/}
                    
                </Projects>

                <Contact id="contact">
                    <h1 className={styleHome.title}>Entre em Contato</h1>
                    <p>Estou a procura de uma oportunidade para estágiar como desenvolvedor front-end. Estarei a disposição para responder.</p>
                    <div id="box-more">
                        <a id="email" href="mailto:jcsjeffrey@gmail.com"><div id="border"></div>Dizer Olá</a>
                    </div>
                </Contact>

                <Footer/>
            </Container>
        </>
    )
}