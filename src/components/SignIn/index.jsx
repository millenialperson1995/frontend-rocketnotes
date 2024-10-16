import { useState } from "react"
import { Container, Form, Background } from "./styles"
import { Link } from "react-router-dom"
import { Input } from "../Input"
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../Button"

import { useAuth } from "../../hooks/auth";

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={FiLock} 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}