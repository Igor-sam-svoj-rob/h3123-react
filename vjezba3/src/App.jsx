import { useState, useEffect } from "react";
import SearchPolje from "./components/SearchPolje";
import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [searchPolje, setSearchPolje] = useState("");
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);

  useEffect(() => {
    const noviFilter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  }, [osobe, searchPolje]);

  const onFilterChange = (event) => {
    const searchPoljeString = event.target.value.toLowerCase();
    setSearchPolje(searchPoljeString);
  };

  return (
    <div className="app">
      <SearchPolje onFilterChange={onFilterChange} />
      <ListaKartica osobe={filter} />
    </div>
  );
};

export default App;
