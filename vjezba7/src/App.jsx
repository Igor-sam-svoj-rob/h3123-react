import { useState } from "react";
import Header from "./components/Header";
import karticaData from "./data/karticaData";
import ListaKartica from "./components/ListaKartica";
import Stats from "./components/Stats";
import KarticaForma from "./components/KarticaForma";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import { FeedbackProvider } from "../context/Context";

const App = () => {
  const [kartica, setKartica] = useState(karticaData);

  const handleFeedback = (unos) => {
    unos.id = uuidv4();
    setKartica([unos, ...kartica]);
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <KarticaForma handleFeedback={handleFeedback} />
                <Stats />
                <ListaKartica />
                <Link to="/about">About</Link>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
