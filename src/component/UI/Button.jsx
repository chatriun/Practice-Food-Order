const Button = ({ className, children, textOnly, ...props }) => {
  const cssClass = textOnly ? `text-button ${className}` : `button`;

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
