import {makeStyles} from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../assets/img/bgPrincipal.png'

export const Nav = styled.div`
    margin: 30px 0 0 0;
    position: relative;
    z-index: 1;

    #logo{
        margin: 5px 0 0 0;
        width: 39px;
    }

    ul{
        display: inline-flex;
        color: #FFF;
        float: right;
        list-style: none;
    }

    ul li a{
        margin: 0 15px 0 15px;
        font-size: 17px;
        font-family: "GothamRounded";
        padding: 5px 7px 5px 7px;
        color: #fff;
        text-decoration: none;
    }

    ul li a:hover {
        background: #BF98FF;
        color: #121928;
        border-radius: 4px;
    }
`

export const Initial = styled.div` 
    font-family: "GothamRounded";
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: left;

    ul{
        padding: 0;
    }

    ul li{
        margin: 0 15px 0 0;
        display: inline;
        list-style: none;
    }

    ul li img{
        opacity: 70%;
        vertical-align: bottom;
        border-radius: 6px;
        width: 45px;
    }
    
    ul li img:hover{
        opacity: 100%;
    }

    #pres-principal{
        width: 100%;
        position: abolute;
        top: 17%;
        transform: translate(0, 17%);
    }

    #pres-principal img#avatar{
        position: absolute;
        right: 0;
        top: 0%;
        right: 10%;
        transform: translate(-10%, 0%);
        width: 300px;
        float: right;
        border-radius: 10px;
        padding: 10px 10px 10px 10px;
        border: 2.3px solid #BF98FF;
    }

    p#salut{   
        font-size: 24px;
        margin: 0 0 8px 0;
    }

    h1#name{
        color: ;
        font-family: "Gotham";
        margin: 0;
        font-size: 58px;
        color: #BF98FF;
    }

    p#profes{
        margin: 10px 0 70px 0;
        font-size: 30.2px;
        color: #ddd;
    }

    button{
        background: none;
        cursor: pointer;
        padding: 0;
        position: relative;
        width: 180px;
        height: 45px;
        text-align: center;
        line-height: 47px;
        font-size: 17px;
        border-radius: 6px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
      }
      
      button:hover div#border{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;  
        transition: .6s;
        border-right: 2px solid #BF98FF;
        border-top: 2px solid #BF98FF;
        border-bottom: 2px solid #BF98FF;
      }
      
      button:hover{
        background: rgba(0,0,0,0.1);
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
      }

      div#border{
        transform: matrix(1, 0, 0, 1, 0.5, -1);
        position: absolute;
        width: 0%;
        border-left: 0;
        height: 100%;
        right: 0;
        transition: .4s;
        border-radius: 6px;
        border-left: 0px solid #fff;
      }
`

export const About = styled.div`
    display: flex;
    justify-content: center;  
    margin: 6% 0 20% 0;  

    p{
        display: flex;
        text-align: justify;
        font-size: 24px;
        width: 600px;
    }
`

export const Projects = styled.div`
    color: #FFF;
    font-family: "GothamRounded"

    h1{
        font-family: "Gotham" 
    }

    #projects{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    div#project{
        padding: 33px;
        text-align: center;
    }

    #project h1{
        font-size: 18px;
        color: #BF98FF;
        margin: 25px 0 2px 0;
    }

    #project p{
        margin: 0;
    }

    #project img{
        border-radius: 8px;
        width: 100%;
    }

    div#box-more{
        margin: 40px 0 0 0;
        width: 100%;
        display flex;
        justify-content: center;
    }
    
    a#more-projects{
        background: none;
        cursor: pointer;
        position: relative;

        width: 180px;
        height: 45px;
        text-align: center;
        line-height: 47px;
        font-size: 17px;
        border-radius: 6px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
    }
      
    a#more-projects:hover div#border{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;  
        transition: .6s;
        border-right: 2px solid #BF98FF;
        border-top: 2px solid #BF98FF;
        border-bottom: 2px solid #BF98FF;
    }
      
    a#more-projects:hover{
        background: rgba(0,0,0,0.1);
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
    }

    #border{
        transform: matrix(1, 0, 0, 1, 0.5, -1);
        position: absolute;
        width: 0%;
        border-left: 0;
        height: 100%;
        right: 0;
        transition: .4s;
        border-radius: 6px;
        border-left: 0px solid #fff;
    }
`

export const Contact = styled.div`
    margin: 13% 0 13% 0;

    p{
        padding: 0 160px 0 160px;
        font-size: 24px;
        text-align: center;
    }

    div#box-more{
        margin: 40px 0 0 0;
        width: 100%;
        display flex;
        justify-content: center;
    }

    a#email{
        background: none;
        cursor: pointer;
        position: relative;

        width: 180px;
        height: 45px;
        text-align: center;
        line-height: 47px;
        font-size: 17px;
        border-radius: 6px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
    }
      
    a#email:hover div#border{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;  
        transition: .6s;
        border-right: 2px solid #BF98FF;
        border-top: 2px solid #BF98FF;
        border-bottom: 2px solid #BF98FF;
    }
      
    a#email:hover{
        background: rgba(0,0,0,0.1);
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
    }

    div#border{
        transform: matrix(1, 0, 0, 1, 0.5, -1);
        position: absolute;
        width: 0%;
        border-left: 0;
        height: 100%;
        right: 0;
        transition: .4s;
        border-radius: 6px;
        border-left: 0px solid #fff;
    }
`

export const Footer = styled.div`
    text-align: center;
    color: #aaa;
    margin: 10px 0 50px 0;

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
`

export const HomeStyles = makeStyles({
    bgPrincipal: {
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 0,
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: `url(${logo})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    },

    container: {
        color: "#FFF",
    },

    hScreen: {
        height: "100vh"
    },

    title: {
        color: "#BF98FF",
        textAlign: "center"
    },
})

export const NavStyles = makeStyles({

    listNav: {
        margin: "10px",
        textDecoration: "none",
        color: "#FFF"
    },
})