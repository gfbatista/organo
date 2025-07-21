import { AiFillCloseCircle } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({ name, position, image, backgroundColor, onDelete }) => {
  return (
    <div className="collaborator">
      <AiFillCloseCircle size={25} className="delete" onClick={onDelete} />
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="card">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
