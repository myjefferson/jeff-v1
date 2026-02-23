import { useEffect, useState } from 'react'
import { Head, Body } from './style/project'
import github from '../../assets/img/github.svg'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from '../../components/Footer/Footer'
import { apiTopicProfile, apiTopicProject } from '../../assets/api/api'
import MainLayout from '../../layout/MainLayout'

export default function Project() {    
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    const { id } = useParams()
    const projectId = parseInt(id)

    // scroll apenas ao entrar
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const loadProfile = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // PERFIL
                const dataProfile = await apiTopicProfile();
                setProfile(dataProfile?.data.record || []);

                // PROJETOS
                const apiProjects = await apiTopicProject();                
                const records = apiProjects?.data.topic.records || [];

                // ENCONTRA O PROJETO PELO ID
                const foundProject = records.find(r => r.id === projectId);

                if (!foundProject) {
                    setProject(null);
                    return;
                }

                // PARSE SEGURO DOS TOPICS
                let parsedTopics = [];
                try {
                    parsedTopics = JSON.parse(foundProject.topics || "[]");
                } catch {
                    parsedTopics = [];
                }

                // SALVA PROJETO FINAL
                setProject({
                    ...foundProject,
                    topics: parsedTopics
                });

            } catch (err) {
                console.error("Erro ao carregar perfil:", err);
                setError("Não foi possível carregar os dados do perfil.");
            } finally {
                setIsLoading(false);
            }
        }

        loadProfile();
    }, [projectId])

    // LOADING
    if (isLoading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-white text-2xl">
                    Carregando...
                </div>
            </MainLayout>
        );
    }

    // ERRO
    if (error) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-red-500 text-xl">
                    {error}
                </div>
            </MainLayout>
        );
    }

    // NÃO ENCONTROU
    if (!project) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-white text-xl">
                    Projeto não encontrado.
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className='container max-w-screen-xl mx-auto py-8 px-4'>
                <NavBar />

                <Head>
                    <div id="head">
                        <h1 className='font-bold'>{project.title}</h1>
                        <h3 className='mb-14'>{project.description}</h3>

                        <div id="info_project">
                            <div id="info_itens">

                                <div id="data">
                                    <h4>DATA</h4>
                                    <p>{project.created}</p>
                                </div>

                                <div id="techs">
                                    <h4>TECNOLOGIAS</h4>
                                    <p>{project.techs}</p>
                                </div>

                                <div id="github">
                                    {project.link_github && (
                                        <a href={project.link_github} target="_blank" rel="noreferrer">
                                            <img src={github} alt="github"/>
                                        </a>
                                    )}
                                </div>

                            </div>

                            {project.linkSite && (
                                <a
                                    id="openSite"
                                    href={project.linkSite}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div id="border"></div>
                                    VER PROJETO
                                </a>
                            )}
                        </div>

                        {project.secondaryImg && (
                            <div id="secondaryImg">
                                <img src={project.secondaryImg} alt="preview"/>
                            </div>
                        )}
                    </div>
                </Head>

                <Body>
                    {project.topics.map((topic, key) => (
                        <div key={key} className={topic.layout}>
                            <h1>{topic.title}</h1>
                            <h3>{topic.text}</h3>

                            <div id="topicImg">
                                {topic.img
                                    ? <img src={topic.img} alt={topic.title}/>
                                    : <p></p>
                                }
                            </div>
                        </div>
                    ))}
                </Body>

            </div>

            <Footer profile={profile}/>
        </MainLayout>
    )
}
