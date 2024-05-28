const Button = ({ children, type, version, isDisabled }) => {
  return (
    <button type={type} className={`btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
