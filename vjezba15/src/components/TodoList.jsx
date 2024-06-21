import Todo from "./Todo";
import TodoStore from "../store/store";

const TodoList = () => {
  const store = new TodoStore();

  return <Todo store={store} />;
};

export default TodoList;
