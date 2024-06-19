import { useState } from "react";
import PrviKorak from "./components/PrviKorak";
import DrugiKorak from "./components/DrugiKorak";
import TreciKorak from "./components/TreciKorak";
import CetvrtiKorak from "./components/CetvrtiKorak";

const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    ime: "",
    prezime: "",
    email: "",
    grad: "",
    zanimanje: "",
    godina: "",
  });

  return (
    <div>
      {page === 1 && <PrviKorak page={page} setPage={setPage} data={data} setData={setData} />}
      {page === 2 && <DrugiKorak page={page} setPage={setPage} data={data} setData={setData} />}
      {page === 3 && <TreciKorak page={page} setPage={setPage} data={data} />}
      {page === 4 && <CetvrtiKorak />}
    </div>
  );
};

export default App;
