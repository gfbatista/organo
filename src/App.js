import { useState } from "react";
import { Banner } from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const toCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form toCollaborator={(collaborator) => toCollaborator(collaborator)} />
    </div>
  );
}

export default App;
