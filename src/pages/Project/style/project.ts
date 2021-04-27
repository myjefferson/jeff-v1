import styled from 'styled-components'

export const Nav = styled.div`
    backdrop-filter: blur(3px);
    padding "10px 0 10px 0";
    top: 0px;
    margin: 30px 0 0 0;
    position: absolute;
    width: 100%;
    z-index: 1;
    transition: 0.5s;

    #nav-cont{
        position: relative;
        z-index: 1;
    }

    #logo{
        float: left;
        width: 39px;
    }

    a#back{
        float: right;
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

export const Head = styled.div`
    color: #FFF;
    margin-top: 180px;
    
    #head h1{
        font-family: "Gotham";
        font-size: 54px;
        margin-bottom: 60px;
        color: #BF98FF;
    }

    #head h4{
        font-family: "GothamRounded";
        font-weight: 600;
        margin-bottom: 6px;
        font-size: 14px;
    }
    
    #head h3, .principal h3, #info_itens h1{
        font-family: "GothamRounded";
        font-weight: 100;
        line-height: 38px;
        text-align: justify;
    }

    
    #head h3, .principal h3{
        font-size: 28px;
    }

    #head #info_itens div{
        display: inline-block;
    }
      
    #info_itens #designer, #info_itens #techs, #info_itens #data{
        margin-right: 50px;
    }
      
    #head #info_itens p{
        margin: 0;
        color: #aaa;
        font-size: 14px;
    }

    #head #info_itens{
        float: left;
    }

    #head a{
        background: none;
        cursor: pointer;
        padding: 0;
        position: relative;
        width: 230px;
        height: 45px;
        text-align: center;
        line-height: 47px;
        font-size: 14px;
        float: right;
        border-radius: 6px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
      }
      
      #head a:hover div#border{
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
      
      #head a:hover{
        background: #2C233A;
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
      }

    #head .btnOn{
        display: block;
    }
      
    #head .btnOff{
        display: none;
    }
      
    a div#border{
        transform: matrix(1, 0, 0, 1, 0.5, -1);
        position: absolute;
        width: 0%;
        border-left: 0;
        height: 100%;
        right: 0;
        transition: .4s;
        border-left: 0px solid #fff;
    }

    /*imgs*/
    #secondaryImg img{
    width: 100%;
    }

    /*secondaryImg*/
    #secondaryImg img{  
    margin: 140px 0 0 0;
    }

    @media only screen and (max-width: 900px) {
        margin-top: 140px;

        #head h1{
            margin: 0 0 30px 0;
            font-size: 30px;
        }

        #head h3, .principal h3{
            font-size: 20px;
            line-height: 1.5;
        }

        #head #info_itens div{
            display: block;
            margin: 0 0 30px 0;
        }

        #head a{
            margin: 10px 0 0 0;
            width: 100%;
        }
    }
`

export const Body = styled.div`
    color: #FFF;
    font-family: "GothamRounded";
    font-weight: 78;

    h1{
        font-family: "GothamRounded";
        font-size: 35px;
        letter-spacing: 1px;
        border-top: 1px solid #3C507C;
        padding-top: 90px;
        margin: 100px 0 0 0;
    }

    h3{
        line-height: 35px;
        font-weight: 50;
        font-size: 25px;
        color: #BBB;
    }

    #topicImg img{
        margin: 80px 0 0 0;
        width: 100%;   
    }

    @media only screen and (max-width: 900px) {
        h1{
            font-size: 24px;
        }

        h3{
            font-size: 18px;
            line-height: 1.4;
        }
    }
`