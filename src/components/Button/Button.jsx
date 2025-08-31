import {ButtonStyle} from './style/buttonStyle.ts'

export default function Button({title, href}){
    return (
        <>
            <ButtonStyle>
                <div id="box">
                    <a id="email" className='button' href={href}>
                        <div id="border" rel="noreferrer" target="_blank"></div>
                        {title}
                    </a>
                </div>
            </ButtonStyle>
        </>
    )
}
