import { useEffect } from 'react'
import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import {Nav} from './style/menu'

export default function Menu(){

    // useEffect(() => {
    //     var Nav = document.getElementById("navbar")        
    //     var prevScrollPos = window.pageYOffset; //posLoadlPage
    //     window.addEventListener("scroll", function(){
    //         var currentScrollPos = window.pageYOffset;
            
    //         if(currentScrollPos < 90){
    //             Nav.classList.remove("scrollDown")
    //             Nav.classList.remove("scrollUp")
    //             Nav.classList.add("scrollTop")
    //         }else if(prevScrollPos < currentScrollPos){ //scroll 0
    //             Nav.classList.remove("scrollUp")
    //             Nav.classList.remove("scrollTop")
    //             Nav.classList.add("scrollDown")
    //         }else if(currentScrollPos > 90){
    //             Nav.classList.remove("scrollTop")
    //             Nav.classList.remove("scrollDown")
    //             Nav.classList.add("scrollUp");
    //         }
    //         prevScrollPos = currentScrollPos;
    //     })

    //     document.getElementById('btn_menu').addEventListener("click", function(){
    //         var x = document.getElementById("list")

    //         document.querySelector(".link-nav1").addEventListener('click', function(){
    //             x.className = "rightnav"
    //             window.document.documentElement.style.overflowY = "scroll"
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
    //         })
    //         document.querySelector(".link-nav2").addEventListener('click', function(){
    //             x.className = "rightnav"
    //             window.document.documentElement.style.overflowY = "scroll" 
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
    //         })
    //         document.querySelector(".link-nav3").addEventListener('click', function(){
    //             x.className = "rightnav"
    //             window.document.documentElement.style.overflowY = "scroll" 
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
    //         })
    //         document.querySelector(".link-nav4").addEventListener('click', function(){
    //             x.className = "rightnav"
    //             window.document.documentElement.style.overflowY = "scroll" 
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
    //         })

    //         if(x.className === "rightnav"){
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/close.svg")
    //             window.document.documentElement.style.overflow = "hidden"
    //             x.className += " menumobile"
    //         }else{
    //             document.getElementById('icon_menu').setAttribute("src", "https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg")
    //             x.className = "rightnav"
    //             window.document.documentElement.style.overflowY = "scroll"   
    //         }
    //     })

    // },[])

    return (
        <>
            <nav className="absolute w-full">
                <div className="flex container mx-auto p-8 items-center justify-between">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img id="icon_menu" src="https://raw.githubusercontent.com/myjefferson/jefferson-carvalho/master/src/assets/img/menu.svg" alt="Menu"/> */}
                        <img id="logo" alt="J" src={logo} className='h-12 sm:h-14'/>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/#home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:p-0" aria-current="page">Início</a>
                            </li>
                            <li>
                                <a href="/#about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre Mim</a>
                            </li>
                            <li>
                                <a href="/#all-projects" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projetos</a>
                            </li>
                            <li>
                                <a href="/#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}