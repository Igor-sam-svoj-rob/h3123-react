import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [broj, setBroj] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(Number(inputValue))) {
      alert("Molimo unesite broj");
      setBroj("");
    } else {
      const provjera = inputValue === "" ? 0 : parseFloat(inputValue);
      setBroj(provjera);
      console.log(provjera);
    }
  };
  return (
    <div>
      <HelloFn ime="Igor" prezime="Jevremović">
        Učimo React. Ovo su Props childreni.
      </HelloFn>
      <HelloCl ime="Ivan" prezime="Ivić">
        Učimo React. Ovo su Props childreni.
      </HelloCl>
      <Message />
      <hr />
      <br />
      <input type="text" onChange={handleInputChange} value={broj} placeholder="Unesite broj" />
      <Counter korak={broj} />
    </div>
  );
};

export default App;
