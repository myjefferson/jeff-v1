import React from 'react'
import project from '../../assets/json/data.json'
import {Container} from '@material-ui/core'

import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import github from '../../assets/img/github.svg'
import arrow from '../../assets/img/arrow.svg'
import {Nav, Head, Body} from './style/project'
import Footer from '../components/Footer/Footer'

export default function Project(){
    const url = window.location.search
    const query = new URLSearchParams(url)
    const get = query.get('id')

    function scrollNav(){

        
        var bol = true;
        window.addEventListener("scroll", function(){
            var nav = document.getElementById('nav-project')
            var position = this.scrollY;
            
            if(position <= 95){
                bol = true;
                nav.style.margin = "30px 0 0 0"
                nav.style.height = "50px"
                nav.style.boxShadow = "none"
                nav.style.position = "absolute"
            }else{
                if(bol === true){
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
        })
    
    }

    return(
        <>
            <Nav id="nav-project" onScroll={scrollNav()}>
                <Container>
                    <a href="/#all-projects"><img id="logo" src={logo} alt="Logo Jefferson Carvalho"/></a>
                    <a id="back" href="/#all-projects"><img src={arrow} alt="<-"/>Voltar</a>
                </Container>
            </Nav> {scrollNav}
            <Container>
                {
                    project.Projects.filter(result => result.id === get)
                    .map((data,key) => {
                        return(
                            <>
                                <Head>
                                    <div id="head">
                                        <h1>{data.title}</h1>
                                        <h3>{data.description}</h3>
                                        <div id="info_project">
                                            <div id="info_itens">
                                                <div id="data">
                                                    <h4>DATA</h4>
                                                    <p>{data.data}</p>
                                                </div>
                                                <div id="techs">
                                                    <h4>LINGUAGENS</h4>
                                                    <p>{data.techs}</p>
                                                </div>
                                                <div id="designer">
                                                    <h4>DESIGNER</h4>
                                                    <p>{data.designer}</p>  
                                                </div>
                                                <div id="github">
                                                    <a href={data.github} target="_blank" rel="noreferrer"><img src={github} alt=""/></a>
                                                </div>
                                            </div>
                                            <a id="openSite" href={data.linkSite} className={data.btnStatus} target="_blank" rel="noreferrer">
                                                <div id="border">
                                                </div>
                                                ABRIR SITE
                                            </a>
                                        </div>


                                        <div id="secondaryImg">
                                            <img src={data.secondaryImg} alt=""/>
                                        </div>
                                    </div>
                                </Head>
                                <Body>
                                    {
                                        data.Topics.map((topic, key) => {
                                            return(
                                                <>
                                                    <div key={key} className={topic.layout}>
                                                        <h1>{topic.title}</h1>
                                                        <h3>{topic.text}</h3>
                                                        <div id="topicImg">
                                                            <img src={topic.img} alt={topic.title}/>
                                                        </div>
                                                    </div>  
                                                </>
                                            )
                                        })
                                    }
                                </Body>
                                <Footer/>
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}

