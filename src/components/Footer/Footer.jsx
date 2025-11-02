import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import reactjs from '../../assets/img/reactjs.svg'

export default function Footer(){
    return(
        <div className='container flex justify-center mx-auto pt-8 pb-8 text-white'>
            <div>
                <div className='w-full flex justify-center'>
                    <img id="logo" src={logo} alt="Logo Jefferson Carvalho" className='h-12 mb-16'/>
                </div>
                <ul className='flex space-x-5 justify-center mb-16'>
                    <li><a href="https://github.com/myjefferson" rel="noreferrer" target="_blank"><img src={github} alt="GitHub" className='rounded-full h-10'/></a></li>
                    <li><a href="https://www.linkedin.com/in/jefferson-carvalho" rel="noreferrer" target="_blank"><img src={linkedin} alt="LinkedIn" className='rounded-full h-10'/></a></li>
                </ul>
                <p className='text-sm sm:text-base'>Desenvolvido com 💜 por <a href="https://github.com/myjefferson"><b>Jefferson Carvalho</b></a></p>
                <p className='flex justify-center text-sm sm:text-base'>Usando ReactJS <img id="img-reactjs" src={reactjs} alt="ReactJS"  className='h-4 mx-1 my-1.5'/> e <a href="https://github.com/myjefferson/JeffersonCarvalho" className='flex inline-block align-middle ml-1'>Veja o código no <img id="img-github" src={github} alt="github" className='rounded-full h-4 mx-2 my-1.5'/></a></p>
                <p className='flex justify-center items-center text-sm sm:text-base -mt-1'>API <a href="https://www.handgeev.com" rel="noreferrer" target='_blank' className="flex text-sm sm:text-base"><img className='h-6' src="https://www.handgeev.com/assets/images/icon.png"/> Handgeev</a> .</p>
            </div>
        </div> 
    )
}