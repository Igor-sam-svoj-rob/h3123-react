import { useState, useEffect, useCallback } from "react";

const Counter = ({ korak }) => {
  const [brojac, setBrojac] = useState(0);

  const uvecaj = useCallback(() => {
    setBrojac((prevBrojac) => prevBrojac + korak);
  }, [korak]);

  const umanji = useCallback(() => {
    setBrojac((prevBrojac) => prevBrojac - korak);
  }, [korak]);

  useEffect(() => {
    console.log(brojac);
  }, [brojac]);

  return (
    <>
      <div>Brojac {brojac}</div>
      <br />
      <button onClick={uvecaj}>Povećaj za {korak}</button>
      <br />
      <button onClick={umanji}>Smanji za {korak}</button>
    </>
  );
};

export default Counter;
