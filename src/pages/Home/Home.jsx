// import {Initial, About, Projects} from './style/home'
import { useEffect, useState } from 'react'

import avatar from '../../assets/img/avatar.png'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import resume from '../../assets/doc/JeffersonCarvalho.pdf'

import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import MainLayout from '../../layout/MainLayout'
import { apiTopicProject, apiTopicProfile, apiTopicSkill } from '../../assets/api/api'

export default function Home(){
    const [profile, setProfile] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dataProjects = await apiTopicProject();
                const dataProfile = await apiTopicProfile();
                const dataSkills = await apiTopicSkill();

                setProfile(Object(dataProfile?.data.fields || []));
                setSkills(Object.values(dataSkills?.data.fields || []));
                setProjects(Object.values(dataProjects?.data.fields || []));

            } catch (err) {
                console.error("Erro ao carregar dados:", err);
                setError("Não foi possível carregar os dados.");
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen text-white text-2xl">Carregando...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-white text-2xl">{error}</div>;
    }

    return (
        <>
            <MainLayout>             
                <div>
                    <Menu/>
                
                    <section 
                        className='flex h-scrren items-center' 
                        style={{
                            background: "url('./assets/images/principal-background.jpg')",
                            backgroundSize: "cover",
                            height: '100vh',
                            width: '100%'
                        }}
                    >
                        <div id="pres-principal" className='container mx-auto p-8 pt-36 pb-14 grid grid-cols-1 md:grid-cols-[60%_40%]  h-full items-center justify-between'>
                            <div className='text-center md:text-left order-2 md:order-1 mt-5'>
                                <div className="space-y-4">
                                    <p id="salut" className="text-white text-2xl md:text-4xl">Olá, meu nome é</p>
                                    {console.log(profile)}
                                    <h1 id="name" className='text-4xl md:text-6xl text-purple-400 font-bold'>{profile.name} {profile.surname}</h1>
                                
                                    <p id="profes" className="text-white text-xl md:text-3xl">Analista e Desenvolvedor de Sistemas.</p>
                                </div>
                                <div className='mt-16 flex justify-center md:justify-start'>
                                    <ul className="flex space-x-5">
                                        <li><a href="https://www.linkedin.com/in/jefferson-carvalho" rel="noreferrer" target="_blank" title="Acessar o LinkedIn"><img src={linkedin} alt="LinkedIn" className="h-10 md:h-12"/></a></li>
                                        <li><a href="https://github.com/myjefferson" rel="noreferrer" target="_blank" title="Acessar o GitHub"><img src={github} alt="GitHub" className="h-10 md:h-12"/></a></li>
                                        <li><Button title="Ver resumo" href={resume}/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex justify-center md:justify-end order-1 md:order-2'>
                                <div id="bx-avatar" className='border-2 w-max border-purple-400 rounded-xl p-3'>
                                    <img id="avatar" src={avatar} alt="Jefferson Carvalho" title="Jefferson Carvalho" className='w-52 md:w-[280px]'/>
                                </div>
                            </div>
                        </div>
                            
                        
                        <div className="scroll-icon">
                            <div className="mouse" title="Utilize o Scroll do mouse para me conhecer mais!">
                                <div className="pointer-mouse"></div>
                            </div>
                        </div>
                    </section>
                </div>

                <section id="about" className='container mx-auto items-center px-4 py-20 space-y-8'>
                    <h1 className="text-center text-3xl text-purple-400 font-bold mb-8">Sobre Mim</h1>
                    
                    <div className='text-white text-xl'>
                        <p className='mb-5'>
                            {profile.about_me}
                        </p>
                        <p id="p-here-skills text-center w-full">Aqui estão <i>algumas</i> das minhas habilidades:</p>
                    </div>
                    <ul className="skills w-full grid grid-cols-4 lg:grid-cols-8 text-center">
                        {skills.map((field, key) => {
                            const fieldData = JSON.parse(field);
                            
                            return(
                                <>
                                    <li key={key} className='space-y-2 mb-10'>
                                        <p className='flex justify-center w-full'><img src={fieldData.img} alt="" title={fieldData.title} className="h-10"/></p>
                                        <p className="text-[11px] text-white w-max-content">{fieldData.name}</p>
                                    </li>
                                </>
                            )
                        })}

                    </ul>
                </section>

                <section id="all-projects" className='container mx-auto items-center px-4 py-20 space-y-8 text-white'>
                    <h1 className="text-center text-3xl text-purple-400 font-bold mb-8">Projetos Pessoais</h1>
                    <p id="subtitle" className='text-center'>Aqui serão apresentados meus projetos desenvolvidos recentemente. Fique à vontade!</p>
                    <div id="projects" className='grid grid-cols-1 md:grid-cols-2'>
                        {projects.map((project, key) => {
                            const projectData = JSON.parse(project)
                            console.log(project)
                            return(
                                <a href={`/project/${projectData.id}`} key={key} id="project" className='mx-5 my-8'>
                                    <img src={projectData.principalImg} alt={projectData.title} className='w-full rounded-lg'/>
                                    <h1 className='text-center mt-5 text-purple-400 font-bold text-lg'>{projectData.title}</h1>
                                    <p className='text-center'>{projectData.subtitle}</p>
                                </a>
                            )         
                        })}
                    </div>
                </section>
                  
                <section className="py-20 px-8">
                    <div className='text-center text-3xl text-purple-400 font-bold mb-8'>Entre em Contato</div>
                    <p className='text-center text-white text-2xl'>
                        Estou a procura de uma oportunidade para trabalhar como desenvolvedor front-end. Estarei a disposição para responder.
                        {/* No momento, estou trabalhando como Analista de Desenvolvimento na empresa <a href="https://autoconf.com.br/" target="_blank" rel="noreferrer" style={{color: "#ddd", textDecoration: "none"}}><b>AUTOCONF</b></a>. Mas se precisar fazer alguma pergunta, estarei a disposição para responder você. */}
                    </p>
                    <div className='flex justify-center mt-10'>
                        <div id="box-more">
                            <Button title="Dizer Olá" href="mailto:jcsjeffrey@gmail.com"/>
                        </div>
                    </div>
                </section>

                <Footer/>
            </MainLayout>
        </>
    )
}
