import { createContext, useState } from "react";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [kartica, setKartica] = useState([{ id: 1, rating: 3, text: "Ovo je iz Contexta" }]);

  const handleDelete = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };

  return <Context.Provider value={{ kartica, handleDelete }}>{children}</Context.Provider>;
};

export default Context;
