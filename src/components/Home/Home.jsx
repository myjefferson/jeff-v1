import React from 'react'
import {Container} from '@material-ui/core'
import Fade from 'react-reveal/Fade'

import {HomeStyles, Initial, About, Projects, Contact} from './style/home'
import projects from '../../assets/json/data.json'
import skills from '../../assets/json/skills.json'

import avatar from '../../assets/img/avatar.png'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import resume from '../../assets/doc/JeffersonCarvalho.pdf'

import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

export default function Home(){
    const styleHome = HomeStyles()

    return (
        <>
            <div className={styleHome.bgPrincipal}/>
            <Container maxWidth="lg"className={styleHome.container} id="home" >             
                <div className={styleHome.hScreen}>
                    <Menu/>
                    
                    <Initial>
                        <div id="pres-principal">
                            <Fade top delay={100}>
                                <div id="bx-avatar">
                                    <img id="avatar" src={avatar} alt="Jefferson Carvalho" title="Jefferson Carvalho"/>
                                </div>
                            </Fade>
                            <div>
                                <Fade bottom delay={350} duration={700}>
                                    <p id="salut">Olá, meu nome é</p>
                                </Fade>
                                <Fade bottom delay={650} duration={700}>
                                    <h1 id="name">Jefferson Carvalho.</h1>
                                </Fade>
                                <Fade bottom delay={850} duration={700}>
                                    <p id="profes">Futuro Analista e Desenvolvedor de Sistemas.</p>
                                </Fade>
                                <Fade bottom delay={1050} duration={700}>
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/jefferson-carvalho" rel="noreferrer" target="_blank" title="Acessar o LinkedIn"><img src={linkedin} alt="LinkedIn" /></a></li>
                                        <li><a href="https://github.com/myjefferson" rel="noreferrer" target="_blank" title="Acessar o GitHub"><img src={github} alt="GitHub"/></a></li>
                                        <li><div id="box-resume"><a id="resume" href={resume} target="_blank" rel="noreferrer"><div id="border"></div>Ver resumo</a></div></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </Initial>
                </div>

                <About id="about">
                    <div>
                        <Fade bottom>
                            <h1 className={styleHome.title}>Sobre Mim</h1>
                            
                            <p>Olá, muito prazer! Me chamo Jefferson, e uso minhas ideias e criatividade para desenvolver projetos para web. Comecei a estudar programação em 2014 criando projetos pessoais usando o HTML, CSS e JavaScript.</p>
                            <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Anchieta de Ensino Superior do Paraná, na cidade de Curitiba/PR. Meu objetivo é ampliar o conhecimento em habilidades técnicas e gerenciais, sempre buscando a melhor forma de moldar minha vocação para entregar um excelente trabalho.</p>
                            
                            <p id="p-here-skills">Aqui estão algumas das minhas habilidades:</p>
                        </Fade>
                        <Fade bottom>
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
                        </Fade>
                    </div>
                </About>

                <Projects id="all-projects">
                    <Fade bottom>
                        <h1 className={styleHome.title}>Projetos Recentes</h1>
                        <p id="subtitle">
                            Aqui estão meus projetos desenvolvidos recentemente. Fique à vontade para ver ideias criadas por amigos e clientes!
                        </p>
                        <div id="projects">
                            {projects.Projects.map((data) => {
                                return(
                                    <div id="project" key={data.id}>
                                        <a href={`/Project/${data.id}`}>
                                            <img src={data.principalImg} alt={data.title}/>
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
                    </Fade>
                </Projects>

                <Contact id="contact">
                    <Fade bottom>
                        <h1 className={styleHome.title}>Entre em Contato</h1>
                        <p>
                            Estou a procura de uma oportunidade para trabalhar como desenvolvedor front-end. Estarei a disposição para responder.
                            {/*No momento, estou no processo de aprendizagem estagiando como desenvolvedor <i>front-end</i>. Se precisar fazer alguma pergunta, estarei a disposição para responder você.*/}
                        </p>
                        <div id="box-more">
                            <a id="email" href="mailto:jcsjeffrey@gmail.com"><div id="border"></div>Dizer Olá</a>
                        </div>
                    </Fade>
                </Contact>

                <Footer/>
            </Container>
        </>
    )
}