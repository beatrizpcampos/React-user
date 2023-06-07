import styled from "styled-components"
import Background from "../../assets-login/background.jpg"

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

export const InputLabel = styled.p`
    letter-spacing: 2px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    margin-bottom: 4px;
`;

export const Input = styled.input`
border-radius: 14px;
    border: none;
    background: rgb(11 159 159 / 15%);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px;
    width: 330px;
    height: 55px;
    outline: none;
    font-size: 20px;
    margin-bottom: 25px;
    padding: 5px;
    color: #ffffff;

::placeholder{
   color: #ffffff;
}

`;