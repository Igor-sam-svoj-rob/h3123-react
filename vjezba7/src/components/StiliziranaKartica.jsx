import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Context from "../../context/Context";

const StiliziranaKartica = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(Context);

  const handleEdit = () => {
    editFeedback(item);
  };

  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <Card flip={true}>
      <div className="text-display">{item.text}</div>
      <div className="rating">{item.rating}</div>
      <button className="edit" onClick={handleEdit}>
        <FaEdit />
      </button>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
};

export default StiliziranaKartica;
