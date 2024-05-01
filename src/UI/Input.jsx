const Input = ({ title, id, children, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{title}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
};

export default Input;
