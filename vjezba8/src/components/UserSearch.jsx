import { useContext, useState } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (event) => {
    const searchText = event.target.value;
    setText(searchText);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Molimo, unesite nešto u polje za pretraživanje.");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-8 mb-4 justify-center">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pretraži..."
          className="bg-gray-200 p-1 rounded"
          onChange={handleChange}
          value={text}
        />
        <button className="bg-gray-500 px-4 text-cyan-50 rounded">Traži</button>
      </form>
      {users.length > 0 && (
        <button className="bg-gray-500 px-4 text-cyan-50 rounded" onClick={clearUsers}>
          Resetiraj
        </button>
      )}
    </div>
  );
};

export default UserSearch;
