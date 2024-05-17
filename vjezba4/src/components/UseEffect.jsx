import { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ime, setIme] = useState("");

  /* Ovakav pristup će se učitavati na svakom renderu (naravno ako imamo neki hook koji kreira render,
     u ovom slučaju imamo poziv useStatea pa se render bude stalno "okidao" */
  useEffect(() => {
    console.log("Učitavam se pri svakoj promjeni rendera");
    window.addEventListener("resize", updateWindowWidth);
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  /* Možemo napraviti useEffect da se okine samo jednom, prilikom učitavanja/mountanja komponente.
    Ono što je ComponentDidMount u klasnom pristupu... */

  useEffect(() => {
    console.log("Učitavam se samo prilikom mountanja komponente...");
  }, []);

  /* Možemo napraviti useEffect da se pokrene prilikom učitavanja, ali i kada god se vrijednost
    varijable ime promijeni. */
  useEffect(() => {
    console.log(`Ime je sad ${ime}`);
  }, [ime]);

  return (
    <div>
      <p>Širina prozora: {windowWidth}</p>
      <input type="text" value={ime} onChange={(event) => setIme(event.target.value)} />
    </div>
  );
};

export default UseEffect;
