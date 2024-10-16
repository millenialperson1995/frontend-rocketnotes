import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container, Form, Background } from "./styles"; 

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("User created!");
        navigate("/");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch(err => {
        alert(err.response ? err.response.data.message : "An error occurred");
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser}
          value={name} // Adicionado
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
          value={email} // Adicionado
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input 
          placeholder="Senha" 
          type="password"
          icon={FiLock}
          value={password} // Adicionado
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/"> Já possuo uma conta? Fazer login</Link>
      </Form>
    </Container>
  );
}
