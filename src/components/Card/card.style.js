
import styled from "styled-components";




export const CardsC = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    margin-top: 50px;
    width:80%;
    height: auto;
    border-radius:10px;
`


export const CardImg = styled.div`
    width:70%;
    height:280px;
    overflow:hidden;
    border-radius:10px;
    background-color:#654894;

`

export const CardBoton =  styled.button`
    width:50px;
    height:50px;
    border-radius:40px;
    border:0px;
    margin-top:20px;
    cursor:pointer;
    background-color:#5CAD4A;
    
`
export const CardTitle = styled.h2 `
    width:350px;
    border-radius:10px;
    font-family: 'Rubik Puddles', cursive;
    font-size:2.5rem;
    background-color:#5CAD4A;
    border-color:#000000;

`

export const CardDivTitles = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

export const CardSubTitle = styled.h2 `
    width:220px;
    border-radius:10px;
    font-family: 'Rubik Puddles', cursive;
    font-size:2.5rem;
    background-color:#5CAD4A;
    border-color:#000000;

`