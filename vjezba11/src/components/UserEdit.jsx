import { useState } from "react";
import Button from "../shared/Button";
import TextInput from "../shared/TextInput";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../redux/UserSlice";

const UserEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((store) => store.users);
  const selectedUser = users.filter((user) => user.id === params.id);
  const { ime, email } = selectedUser[0];
  const [podaci, setPodaci] = useState({
    ime,
    email,
  });

  const handleEditUser = () => {
    console.log(podaci);
    setPodaci({ ime: "", email: "" });
    navigate("/");
    dispatch(
      editUser({
        id: params.id,
        ime: podaci.ime,
        email: podaci.email,
      })
    );
  };

  return (
    <div>
      <TextInput
        label="ime"
        inputProps={{ type: "text", placeholder: "Ime" }}
        value={podaci.ime}
        onChange={(e) => setPodaci({ ...podaci, ime: e.target.value })}
      />
      <TextInput
        label="email"
        inputProps={{ type: "email", placeholder: "E-mail" }}
        value={podaci.email}
        onChange={(e) => setPodaci({ ...podaci, email: e.target.value })}
      />
      <Button onClick={handleEditUser} />
    </div>
  );
};

export default UserEdit;
