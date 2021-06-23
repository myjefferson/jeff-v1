import styled from 'styled-components'

export const StyleFooter = styled.div`
    text-align: center;
    color: #AAA;
    margin: 60px 0 50px 0;

    ul{
        margin: 40px 0 40px 0;
        padding: 0 0 0 15px;
    }

    img#logo{
        width: 40px;
        margin: 25px 0 25px 0;
    }

    ul li{
        display: inline;
        margin: 0 20px 0 0;
        padding: 0;
    }

    ul li img{
        opacity: 70%;
        margin: 0;
        padding:0;
        width: 40px;
        border-radius: 100px;
    }

    ul li img:hover{
        opacity: 100%;
    }

    p{
        margin: 3px 0 0 0;
    }

    a{
        text-decoration: none;
        color: #AAA;
    }

    p a:hover{
        color: #FFF;
    }

    #img-reactjs, #img-github{
        border-radius: 100px;
        vertical-align: bottom;
        width: 17px;
    }

    @media only screen and (max-width: 900px) {
        p{
            font-size: 15px;
        }
    }
`