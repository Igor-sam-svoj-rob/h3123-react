import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const UserList = () => {
  const users = [
    { id: "1", ime: "Ivan", email: "ivan@example.com.hr" },
    { id: "2", ime: "Stjepan", email: "stjepan@example.com.hr" },
    { id: "3", ime: "Maja", email: "maja@example.com.hr" },
  ];

  const userList = () =>
    users.map((user) => (
      <div key={user.id}>
        <div>
          <h2>{user.ime}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Link to={`edit-user/${user.id}`}>
            <FaEdit />
          </Link>
          <FaRegTrashAlt />
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <Link to="/add-user">
          <Button />
        </Link>
      </div>
      <div>{users.length ? userList() : <p>Nema korisnika</p>}</div>;
    </>
  );
};

export default UserList;
