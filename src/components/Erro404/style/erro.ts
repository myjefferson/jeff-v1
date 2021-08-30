import styled from 'styled-components'

export const StyleError = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        color: white;
        font-size: 10em;
        margin: 0;
    }

    h2{
        color: #BE97FE;
        margin-top: 4px;
        margin-bottom: 50px;
    }

    a#back{
        border-radius: 6px;
        border: 2px solid #BF98FF;
        padding: 9px 15px 10px 15px;
        color: #BF98FF;
        text-decoration: none;
        font-size: 20px;
        transition: .5s;
    }    

    a#back img{
        margin: 0 10px 0 0;
        vertical-align: bottom;
        width: 24px;
        transition: 0.5s;
    }

    a#back:hover{
        transition: .5s;
        background: #2C233A;;
    }

    a#back:hover img{
        transition: 0.5s;
        padding: 0 10px 0 0;
    }  
`