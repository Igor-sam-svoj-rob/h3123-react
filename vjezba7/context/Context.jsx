import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [kartica, setKartica] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/kartice")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Niste dohvatili podatke");
        }
        return res.json();
      })
      .then((data) => {
        setKartica(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Greška:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/kartice/${id}`, { method: "DELETE" });
    setKartica(kartica.filter((item) => item.id != id));
  };

  const handleFeedback = async (unos) => {
    const res = await fetch("http://localhost:3000/kartice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unos),
    });
    const data = await res.json();
    setKartica([data, ...kartica]);
  };

  const [editKartica, setEditKartica] = useState({
    kartica: {},
    edit: false,
  });

  const editFeedback = (kartica) => {
    setEditKartica({
      kartica,
      edit: true,
    });
  };

  const updateFeedback = async (id, updateKartice) => {
    const res = await fetch(`http://localhost:3000/kartice/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateKartice),
    });
    const data = await res.json();
    setKartica(kartica.map((karta) => (karta.id === id ? { ...karta, ...data } : karta)));
  };

  return (
    <Context.Provider
      value={{
        kartica,
        handleDelete,
        handleFeedback,
        editFeedback,
        editKartica,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
