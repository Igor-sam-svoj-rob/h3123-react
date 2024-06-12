import HOC from "./HOC";

const ListaUsera = ({ podaci }) => {
  let filterUsers = podaci.map((user) => <p key={user.id}>{user.name}</p>);

  return <div>{filterUsers}</div>;
};

const SearchUsers = HOC(ListaUsera, "users");

export default SearchUsers;
