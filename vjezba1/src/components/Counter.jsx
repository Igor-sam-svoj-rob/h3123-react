import { useState, useEffect } from "react";

const Counter = () => {
  const [brojac, setBrojac] = useState(0);

  const uvecaj = () => {
    setBrojac((prevBrojac) => prevBrojac + 1);
  };

  const umanji = () => {
    setBrojac((prevBrojac) => prevBrojac - 1);
  };

  useEffect(() => {
    console.log(brojac);
  }, [brojac]);

  return (
    <>
      <div>Brojac {brojac}</div>
      <br />
      <button onClick={uvecaj}>Dodaj 1</button>
      <br />
      <button onClick={umanji}>Umanji 1</button>
    </>
  );
};

export default Counter;
