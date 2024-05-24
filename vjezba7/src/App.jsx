import { useState } from "react";
import Header from "./components/Header";
import karticaData from "./data/karticaData";
import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [kartica, setKartica] = useState(karticaData);
  const handleDelete = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };
  return (
    <div>
      <Header />
      <ListaKartica kartica={kartica} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
