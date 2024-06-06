import { useContext } from "react";
import GithubContext from "../context/GithubContext";
import Spinner from "../shared/Spinner";
import UserKartica from "./UserKartica";

const IspisUsera = () => {
  const { users, loading } = useContext(GithubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <UserKartica key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default IspisUsera;
