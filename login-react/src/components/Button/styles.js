import styled from "styled-components";

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

`;