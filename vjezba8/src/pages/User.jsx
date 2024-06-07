import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const { login, avatar_url, repos_url, name } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return <div>{user.login}</div>;
  }
};

export default User;
