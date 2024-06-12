import HOC from "./HOC";

const ListaTodo = ({ podaci }) => {
  let filterTodos = podaci.map((todo) => <p key={todo.id}>{todo.title}</p>);

  return <div>{filterTodos}</div>;
};
const SearchTodos = HOC(ListaTodo, "todos");

export default SearchTodos;
