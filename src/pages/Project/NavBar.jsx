import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo-jefferson-carvalho.svg'
import arrow from '../../assets/img/arrow.svg'
import Button from '../../components/Button/Button'

export default function NavBar(){   

    return(
        <>
            <div id="nav-bar">
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
                    <Link to="/">
                        <img id="logo" src={logo} alt="Logo Jefferson Carvalho" title="Jefferson Carvalho" className='h-12'/>
                    </Link>
                    <Button title={`Voltar`} href="/#all-projects"/>
                </div>
            </div>  
        </>
    )
}