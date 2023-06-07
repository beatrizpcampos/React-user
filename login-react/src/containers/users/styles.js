import styled from "styled-components"
import Background from "../../assets-login/background.jpg"
import { Link } from 'react-router-dom';

export const Container = styled.div`
 background: url("${Background}");
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 40px 30px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const Button = styled(Link)`
width: 330px;
height: 55px;
margin-top: 50px;
background: rgb(247 136 40);
border-radius: 14px;
border: none;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
color: #ffffff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.9;
}

&:active{
    opacity: 0.6;
}

img {
    transform: rotateY(180deg);
}

`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 14px;
border: none;
background: rgba(255, 255, 255, 0.25);
box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 4px;
width: 330px;
height: 55px;
border: none;
outline: none;
margin-top: 20px;

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgb(255, 255, 255);

}

button {
    background: none;
    border: none;
    cursor: pointer;
}

`;