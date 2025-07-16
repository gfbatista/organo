import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [squad, setSquad] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.toCollaborator({ name, position, image, squad });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <DropDown
          required={true}
          label="Time"
          itens={props.squads}
          value={squad}
          onChange={(value) => setSquad(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
