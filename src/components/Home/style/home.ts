import {makeStyles} from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../assets/img/bgPrincipal.png'

export const Initial = styled.div` 
    env(safe-area-inset-top);
    env(safe-area-inset-right);
    env(safe-area-inset-bottom);
    env(safe-area-inset-left);

    font-family: "GothamRounded";
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    ul{
        padding: 0;
    }

    ul li{
        margin: 0 20px 0 0;
        float: left;
        list-style: none;
    }

    ul li img{
        opacity: 70%;
        vertical-align: bottom;
        border-radius: 6px;
        width: 47px;
    }
    
    ul li img:hover{
        opacity: 100%;
    }

    #pres-principal{
        width: 100%;
        position: abolute;
    }
    #pres-principal img#avatar{
        margin: -15px 50px 0 0;
        float: right;
        width: 23%;
        border-radius: 8px;
        padding: 10px 10px 10px 10px;
        border: 2.4px solid #BF98FF;
    }
    p#salut{   
        font-size: 24px;
        margin: 0 0 8px 0;
    }

    h1#name{
        font-family: "Gotham";
        margin: 0;
        font-size: 58px;
        color: #BF98FF;
    }

    p#profes{
        margin: 10px 0 70px 0;
        font-size: 1.56em;
        color: #ddd;
    }

    div#box-resume{
        margin: 0;
        display: flex;
    }

    #resume{
        background: none;
        cursor: pointer;
        padding: 0;
        height: 44.5px;
        position: relative;
        width: 180px;
        text-align: center;
        line-height: 44.5px;
        font-size: 17px;
        border-radius: 6px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
      }
      
      #resume:hover div#border{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;  
        transition: .6s;
        border-radius: 6px;
        border-right: 2px solid #BF98FF;
        border-top: 2px solid #BF98FF;
        border-bottom: 2px solid #BF98FF;
      }
      
      #resume:hover{
        background: #2C233A;
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
      }

      div#border{
        transform: matrix(1, 0, 0, 1, 0.5, -1);
        position: absolute;
        width: 0%;
        height: 100%;
        top: 0;
        right: 0;
        transition: .4s;
        border-radius: 6px;
        border-left: 0;
      }

      /*scroll icon animations*/
      .scroll-icon{
          position: absolute;
          display: flex;
          justify-content: center;
          left: 0;
          bottom: 30px;
          width: 100%;
      }

      .scroll-icon .mouse{
          position relative;
          display: flex;
          justify-content: center;
          padding: 5px;
          width: 12px;
          height: 30px;
          border: 2px solid #FFF;
          border-radius: 50px 50px 50px 50px;
      }

      .scroll-icon .mouse .pointer-mouse{
            display: block;
            width: 4px;
            height: 8px;
            border-radius: 2px;
            background: white;
            margin-top: 20px;
            animation: pointerAnima 1.3s infinite alternate;
      }

      @keyframes pointerAnima{
          from{
            margin-top: 0px;
          }to{
            margin-top: 10px;
          }
      }

      @media only screen and (max-width: 900px) {
        .scroll-icon{
            bottom: 20px;
        }

        #resume{
            height: 40px;
            font-size: 15px;
        }

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 0 0 0 10px;
        }

        ul li img{
            border-radius: 6px;
            width: 40px;
        }

        #pres-principal{
            display: block;
            grid-template-columns: none;
            column-gap: none;
            width: 100%;
            position: abolute;
        }

        #pres-principal div#bx-avatar{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 50px 0;
        }

        p#salut{   
            text-align: center;
            font-size: 24px;
            margin: 0 0 8px 0;
        }

        h1#name{
            width: 100%;
            text-align: center;
            font-family: "Gotham";
            margin: 0;
            font-size: 31px;
            color: #BF98FF;
        }

        p#profes{
            text-align: center;
            margin: 10px 0 70px 0;
            font-size: 1.1em;
            color: #ddd;
        }
        #pres-principal img#avatar{
            float: none;
            top: 0;
            left: 0;
            width: 150px;
            margin: 0;
            border-radius: 7px;
            padding: 9px 9px 9px 9px;
            border: 2.4px solid #BF98FF;
        }
      }
      
      @media only screen and (max-height: 630px){
        .scroll-icon{
            display: none;
        }
      }
`

export const About = styled.div`
    padding: 80px 0 0 0;
    display: flex;
    justify-content: center;  
    aling-itens: center;
    margin: 6% 0 15% 0;  

    p{
        color: #BBB;
        text-align: justify;
        font-size: 20px;
        width: 70vw;
    }

    #p-here-skills{
        margin: 40px 0 10px 0;
        color: #FFF;
    }

    ul{
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
        margin: 40px 0 0 -42px;
        list-style: none;
    }

    ul li{
        margin: 0 20px 0 0;
        float: left;
        width: 50px;
    }

    ul li img{
        width: 45px;
    }

    ul li p{
        text-align: center;
        font-size: 12.2px;
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        p{
            color: #BBB;
            text-align: justify;
            font-size: 17px;
            width: 100%;
        }

        ul{
            grid-template-columns: auto auto auto auto;
            justify-content: space-evenly;
            text-align: center;
        }

        ul li{
            margin: 0;
        }
    }
`

export const Projects = styled.div`
    padding: 80px 0 0 0;
    color: #FFF;
    font-family: "GothamRounded"

    h1{
        font-family: "Gotham" 
    }

    p#subtitle{
        color: #BBB;
        font-size: 22px;
        text-align: center;
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

    #project a{
        text-decoration: none;
        color: #BBB;
    }

    #project img{
        cursor: pointer;
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

    @media only screen and (max-width: 900px){
        p#subtitle{
            font-size: 20px;
        }

        div#project{
            padding: 10px;
            margin: 0 0 40px 0;
        }

        #projects{
            display: block;
            grid-template-columns: none;
        }
    }
`

export const Contact = styled.div`
    padding: 80px 0 0 0;
    margin: 13% 0 13% 0;

    p{
        color: #BBB;
        padding: 0 160px 0 160px;
        font-size: 22px;
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
        background: #2C233A;
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

    @media only screen and (max-width: 900px) {
        p{
            font-size: 20px;
            padding: 0;
            width: 100%;
        }
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