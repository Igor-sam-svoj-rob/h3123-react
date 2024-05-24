const Card = ({ children, flip }) => {
  return <div className={`card ${flip && "flip"}`}>{children}</div>;
};

Card.defaultProps = {
  flip: false,
};

export default Card;
