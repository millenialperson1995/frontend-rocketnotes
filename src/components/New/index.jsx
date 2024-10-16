import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../Header";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { NoteItem } from "../NoteItem";
import { Section } from "../Section";
import { Button } from "../Button";
import { api } from "../../services/api";


export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("You forgot to add a title.");
    }

    if (newLink) {
      return alert("You forgot to add a link. Click to add or remove a link.");
    }

    if (newTag) {
      return alert("You forgot to add a tag. Click to add or remove a tag.");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Note created successfully!");

    navigate("/");
  }

  return (
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input 
            placeholder="titulo"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea 
            placeholder="Escreva sua nota"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map(link => (
              <NoteItem
                key={String(link)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem 
              $isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map(tag => (
                  <NoteItem
                    key={String(tag)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                $isNew 
                placeholder="Nova tecnologia"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />

        </Form>
      </main>
    </Container>
  );
}