import styled from 'styled-components'

export const NavStyle = styled.div`
    #nav-bar{
        box-shadow: 0px 2px 20px rgba(0,0,0,0.4);
        background: rgba(17, 24, 39,0.95);
        position: fixed;
        z-index:100;
        top: 0;
        left: 0;
        padding: 10px 0 10px 0;
        margin-top: 0px;
        width: 100%;
    }

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