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
              key={collaborator.name}
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
              backgroundColor={props.primaryColor}

            />
          ))}
        </div>
      </section>
    )
  );
};

export default Squad;
