import { useEffect, useState } from 'react'
import {Head, Body} from './style/project'
import github from '../../assets/img/github.svg'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from '../../components/Footer/Footer'
import { apiProjectById } from '../../assets/api/api'
import MainLayout from '../../layout/MainLayout'

export default function Project(){    
    const [isLoading, setIsLoading] = useState(true);   // Para indicar se está carregando
    const [project, setProject] = useState(null); // Para armazenar os dados dos projetos
    const [error, setError] = useState(null);

    const {id} = useParams()
    const projectId = parseInt(id)
    window.scrollTo(0,0)

    useEffect(() => {
        const loadProfile = async () => {
            try {
                setIsLoading(true);
                setError(null);

                await apiProjectById(projectId).then(res => setProject(res.data));
            } catch (err) {
                console.error("Erro ao carregar perfil:", err);
                setError("Não foi possível carregar os dados do perfil.");
            } finally {
                setIsLoading(false);
            }
        }
        loadProfile();
    },[])

    if (isLoading) {
        return (
            <MainLayout> {/* Se você tiver um layout, pode envolvê-lo aqui */}
                <div className="flex justify-center items-center h-screen text-white text-2xl">
                    Carregando
                </div>
            </MainLayout>
        );
    }

    return(
        <>
            <NavBar/>

            <MainLayout>
                <div className='container max-w-screen-xl flex mx-auto pb-8 -mt-16'>
                    <Head>
                        <div id="head">
                            <h1 className='font-bold'>{project.title}</h1>
                            <h3 className='mb-10'>{project.description}</h3>
                            <div id="info_project">
                                <div id="info_itens">
                                    <div id="data">
                                        <h4>DATA</h4>
                                        <p>{project.start_date}</p>
                                    </div>
                                    <div id="techs">
                                        <h4>TECNOLOGIAS</h4>
                                        <p>{project.technologies_used}</p>
                                    </div>
                                    {/* <div id="designer">
                                        <h4>DESIGNER</h4>
                                        <p>{project.designer}</p>  
                                    </div> */}
                                    <div id="github">
                                        <a href={project.github} target="_blank" rel="noreferrer"><img src={github} alt=""/></a>
                                    </div>
                                </div>
                                {
                                    project.project_link 
                                    ? 
                                        <a id="openSite" href={project.project_link} className={project.project_link} target="_blank" rel="noreferrer">
                                            <div id="border">
                                            </div>
                                            VER PROJETO
                                        </a>
                                    : ""
                                }
                                
                            </div>


                            <div id="secondaryImg">
                                {JSON.parse(project.images).map((image, key) => {
                                        return key > 0 && <img src={image} alt="" key={key}/>
                                })}
                                {/* {project.images.map === ""
                                    ? <p style={{
                                        marginTop: "30px", 
                                        display: "block",
                                        height: "45px"
                                    }}></p>
                                    : <img src={project.images[1]} alt=""/>
                                } */}
                            </div>
                        </div>
                    </Head>
                    <Body>
                        {
                            // project.Topics.map((topic, key) => {
                            //     return(
                            //         <>
                            //             <div key={key} className={topic.layout}>
                            //                 <h1>{topic.title}</h1>
                            //                 <h3>{topic.text}</h3>
                            //                 <div id="topicImg">
                            //                     {
                            //                         topic.img === "" 
                            //                         ? <p></p>
                            //                         : <img src={topic.img} alt={topic.title}/>
                            //                     }
                            //                 </div>
                            //             </div>  
                            //         </>
                            //     )
                            // })
                        }
                    </Body>
                </div>
                <Footer/>
            </MainLayout>
        </>
    )
}

