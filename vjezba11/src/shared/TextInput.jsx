const TextInput = ({ label, onChange, value, inputProps }) => {
  return (
    <>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
    </>
  );
};

export default TextInput;
