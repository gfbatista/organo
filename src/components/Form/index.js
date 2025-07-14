import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const squads = [
    "Programaçao",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("TESTE");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite o seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown required={true} label="Time" itens={squads} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
