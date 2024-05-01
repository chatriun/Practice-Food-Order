const Button = ({ textOnly, children, ...props }) => {
  const cssClass = textOnly ? `text-button` : `button`;
  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
