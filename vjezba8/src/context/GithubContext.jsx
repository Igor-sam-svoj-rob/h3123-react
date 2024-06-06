import { createContext, useEffect, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    dispatch({
      type: "GET_USERS",
      users: data,
    });
  };

  useEffect(() => {
    //fetchUsers();
  }, []);

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
