import "./TextField.css";

const TextField = (props) => {
  const toChanged = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={toChanged}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
