import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <p>{todo.text}</p>
      <div className="buttons">
        <button className="complete-btn" onClick={completeHandler}>
          <FaCheck />
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Todo;
