import React, { useState, useRef } from "react";
import axios from 'axios';
import People from "../../assets-login/people.png";
import Arrow from "../../assets-login/seta.png";
import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  };

  return (
    <Container>

      <Image alt="logo-img" src={People} />

      <ContainerItens>

        <H1>Hello</H1>

        <InputLabel>Name:</InputLabel>
        <Input ref={inputName} placeholder="Write your name here" />

        <InputLabel>Age:</InputLabel>
        <Input ref={inputAge} placeholder="Write your age here" />

        <Button to="/usuarios" onClick={addNewUser}>Register 
        <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>

    </Container>
  );
}

export default App