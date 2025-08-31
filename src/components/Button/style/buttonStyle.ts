import styled from 'styled-components'


export const ButtonStyle = styled.div`
    .button{
        background: none;
        cursor: pointer;
        padding: 0 0 0 0;
        height: 50px;
        position: relative;
        width: 180px;
        text-align: center;
        line-height: 44.5px;
        font-size: 17px;
        border-radius: 8px;
        border: 2px solid #999;
        text-decoration: none;
        color: #fff;
        transition: .0s;
    }
    
    .button:hover div#border{
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
    
    .button:hover{
        background: #2C233A;
        transition-delay: 0.5s, 0.2s;
        color: #fff;
        border-left: 2px solid #BF98FF;
    }

    div#border{
        transform: matrix(1, 0, 0, 1.08, 0.6, -1);
        position: absolute;
        width: 0%;
        border-left: 0;
        height: 100%;
        right: 0;
        transition: .4s;
        border-radius: 7px;
        border-left: 0px solid #fff;
    }
        
    div#box{
        margin: 0;
        display: flex;
    }

`