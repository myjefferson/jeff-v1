import React from 'react'
import {StyleError} from './style/erro'
import arrow from '../../assets/img/arrow.svg'

export default function Erro(){
    return(
        <>
            <StyleError>
                <div>
                    <h1>404</h1>
                    <h2>Página não encontrada</h2>
                    <a id="back" href="/"><img src={arrow} alt="<-"/>Voltar</a>
                </div>
            </StyleError>
        </>
    )
}