import { useState } from "react";
import { Banner } from "./components/Banner";
import Form from "./components/Form";
import Squad from "./components/Squad";

function App() {
  const squads = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const toCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        squads={squads.map((squad) => squad.name)}
        toCollaborator={(collaborator) => toCollaborator(collaborator)}
      />
      {squads.map((squad) => (
        <Squad
          key={squad.name}
          name={squad.name}
          primaryColor={squad.primaryColor}
          secondaryColor={squad.secondaryColor}
        />
      ))}
    </div>
  );
}

export default App;
