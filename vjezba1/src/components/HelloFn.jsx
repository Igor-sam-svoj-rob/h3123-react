const HelloFn = (props) => {
  return (
    <div>
      <p>
        Hello {props.ime} {props.prezime}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default HelloFn;
