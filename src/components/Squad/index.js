import Collaborator from "../Collaborator";
import "./Squad.css";

const Squad = (props) => {
  return (
    props.collaborators.length && (
      <section
        className="squad"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <Collaborator
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Squad;
