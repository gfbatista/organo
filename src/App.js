import { useState } from "react";
import { Banner } from "./components/Banner";
import Form from "./components/Form";
import Squad from "./components/Squad";
import Footer from "./components/Footer";

function App() {
  const [squads, setSquads] = useState([
    {
      name: "Programação",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const toCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator() {}

  function changeSquadColor(squadColor, squadName) {
    setSquads(
      squads.map((squad) => {
        if (squad.name === squadName) {
          squad.color = squadColor;
        }
        return squad;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        squads={squads.map((squad) => squad.name)}
        toCollaborator={(collaborator) => toCollaborator(collaborator)}
      />
      <section className="squad">
        <h1>Minha organização</h1>
        {squads.map((squad) => (
          <Squad
            squad={squad}
            key={squad.name}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.squad === squad.name
            )}
            deleteCollaborator={deleteCollaborator}
            changeColor={changeSquadColor}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
