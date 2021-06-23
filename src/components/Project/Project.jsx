import React from 'react'
import project from '../../assets/json/data.json'
import {Container} from '@material-ui/core'

import {Head, Body} from './style/project'
import github from '../../assets/img/github.svg'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from '../Footer/Footer'

export default function Project(){    
    const {id} = useParams();
    const getId = id;
    console.log(getId);
    window.scrollTo(0,0)

    return(
        <>
            <NavBar/>

            <Container>
                {
                    project.Projects.filter(result => result.id === getId)
                    .map((data) => {
                        return(
                            <>
                                <div key={data.id}>  
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
                                </div>
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}

