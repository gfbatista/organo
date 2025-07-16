import Collaborator from "../Collaborator";
import "./Squad.css";

const Squad = (props) => {
  return (
    <section
      className="squad"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <Collaborator />
    </section>
  );
};

export default Squad;
