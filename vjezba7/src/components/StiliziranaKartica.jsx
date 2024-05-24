import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";

const StiliziranaKartica = ({ item, handleDelete }) => {
  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <Card flip={true}>
      <div className="text-display">{item.text}</div>
      <div className="rating">{item.rating}</div>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
};

export default StiliziranaKartica;
