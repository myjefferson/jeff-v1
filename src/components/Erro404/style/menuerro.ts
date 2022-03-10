import styled from 'styled-components'

export const StyleMenuErro = styled.div`
    padding: 20px 0 0 0;
    z-index: 1;
    left: 0;
    top: 0;
    position: absolute;
    height: 75px;
    width: 100%;
    transition: 0.24s;

    a{
        text-decoration: none;
    }

    #container{
        position: relative;
        width: 100vw;
    }

    #btn_menu{
        display: none;
        background: none;
        border: none;
    }

    #btn_menu img{
        width: 41px;
        padding: 5px;
    }

    #logo{
        margin: 0;
        width: 40px;
    }

    ul{
        display: block;
        float: right;
        margin: -40px 0 0 0;
        color: #FFF;
        list-style: none;
    }

    ul li{
        margin: 0 15px 0 15px;
        font-size: 17px;
        font-family: "GothamRounded";
        text-decoration: none;
        display: inline-block;
    }
    
    ul li #link-nav{
        color: #fff;
        cursor: pointer;
        padding: 5px 7px 5px 7px;
    }

    ul li #link-nav:hover {
        background: #BF98FF;
        color: #121928;
        border-radius: 4px;
    }

    @media only screen and (max-width: 900px){
        backdrop-filter: none;

        #list{
            display flex;
        }

        #btn_menu{
            cursor: pointer;
            position: absolute;
            right 17px;
            top: 0 !important;
            margin: 0 !important;
            float: right;
            z-index: 1;
            display: block;
        }

        ul{
            display: none;
        }
        
        .menumobile #group-menu{
            display: grid;
            grid-template-columns: 40% 60%;
        }

        .menumobile{
            position: fixed !important;
            margin: 0;
            top: 0;
            left: 0;
            padding:0;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #1E2940;
        }

        .menumobile ul{
            float: none;
            padding: 0;
            margin: 0;
            display: block;
        }

        .menumobile ul li{
            display: block;
        }

        .menumobile ul li #link-nav{
            text-align: center;
            display: block;
            width: 100%;
            font-size: 21px;
            margin: 0 0 40% 0;
        }
    }
`