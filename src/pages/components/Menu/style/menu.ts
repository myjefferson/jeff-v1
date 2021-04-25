import styled from 'styled-components'

export const Nav = styled.div`
    backdrop-filter: blur(3px);
    padding: 30px 0 0 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;

    #logo{
        margin: 0 0 0 0;
        width: 40px;
    }

    ul{
        display: inline-flex;
        color: #FFF;
        float: right;
        list-style: none;
    }

    ul li #link-nav{
        cursor: pointer;
        margin: 0 15px 0 15px;
        font-size: 17px;
        font-family: "GothamRounded";
        padding: 5px 7px 5px 7px;
        color: #fff;
        text-decoration: none;
    }

    ul li #link-nav:hover {
        background: #BF98FF;
        color: #121928;
        border-radius: 4px;
    }
`