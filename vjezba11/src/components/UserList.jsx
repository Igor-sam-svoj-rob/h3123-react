import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const removeUser = (id) => {
    dispatch(deleteUser({ id }));
  };

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
          <FaRegTrashAlt onClick={() => removeUser(user.id)} />
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
