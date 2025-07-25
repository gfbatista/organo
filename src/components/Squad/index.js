import Collaborator from "../Collaborator";
import "./Squad.css";
import hexToRgba from "hex-to-rgba";

const Squad = ({ changeColor, collaborators, deleteCollaborator, squad }) => {
  return (
    collaborators.length && (
      <section
        className="squad"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(squad.color, 0.6),
        }}
      >
        <input
          type="color"
          onChange={(event) => changeColor(event.target.value, squad.name)}
          value={squad.color}
          className="input-color"
        ></input>
        <h3 style={{ borderColor: squad.color }}>{squad.name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.name}
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
              backgroundColor={squad.color}
              onDelete={deleteCollaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Squad;
