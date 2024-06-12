import { useState, useEffect } from "react";

const HOC = (Komponenta, ekstenzija) => {
  return () => {
    const [podaci, setPodaci] = useState([]);
    const [upit, setUpit] = useState("");

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => setPodaci(data));
    }, [ekstenzija]);

    const handleChange = (e) => {
      setUpit(e.target.value);
    };

    let filterPodaci = podaci.filter((podatak) => {
      if (ekstenzija === "users") {
        const { name } = podatak;
        return name.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
      }

      if (ekstenzija === "todos") {
        const { title } = podatak;
        return title.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
      }

      return true;
    });

    return (
      <>
        <input type="text" value={upit} onChange={handleChange} />
        <Komponenta podaci={filterPodaci} />
      </>
    );
  };
};

export default HOC;
