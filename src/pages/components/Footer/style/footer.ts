import styled from 'styled-components'

export const StyleFooter = styled.div`
    text-align: center;
    color: #aaa;
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

    #img-reactjs{
        vertical-align: bottom;
        width: 17px;
    }
`