import { useRef, useState } from "react";
import zvuk from "../assets/zvuk.wav";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const inputRef = useRef(null);
  const brojRendera = useRef(0);
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    // Dobavljanje trenutne vrijednosti input polja koristeći ref...
    const currentInputValue = inputRef.current.value;

    /* Ažuriramo vrijednost input polja u varijablu inputValue koristeći vrijednost zapisanu
     koristeći inputRef vrijednost koja nam će biti između rendera zapisana u varijabli
     currentInputValue...*/
    setInputValue(currentInputValue);
    // zapis novog rendera
    brojRendera.current++;
    // čišćenje input polja na prazan string nakon što se odradila funkcija
    inputRef.current.value = "";
    // fokus postavljen nazad na input polje nakon što se funkcija izvrtila
    inputRef.current.focus();
  };

  const handlePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Unesite nešto..." />
      <button onClick={handleButtonClick}>Dobavi i ažuriraj vrijednost</button>
      <p>Trenutna vrijednost input polja: {inputValue}</p>
      <p>Broj rendera: {brojRendera.current}</p>
      <br />
      <audio src={zvuk} ref={audioRef}></audio>
      <button onClick={handlePlayClick}>{isPlaying ? "Pauziraj" : "Pokreni"}</button>
    </div>
  );
};

export default UseRef;
